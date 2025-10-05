import React from 'react'
import { Link } from 'react-router-dom';

const ProfileMenu = ({profileMenuOpen, setProfileMenuOpen, handleLogout, role}) => {
    let dashboardUrl = '';
    if(role === `Student`)
    {
        dashboardUrl = '/dashboard';
    }
    else if(role === `Tutor`)
    {
        dashboardUrl = '/dashboard-tutor';
    }
  return (
        <>
        {
            profileMenuOpen && (
                <div className='w-[140px] flex flex-col justify-start gap-y-2 p-2 absolute right-10 top-12 bg-white border-2 rounded-md'>
                    <Link onClick={()=> setProfileMenuOpen(false)} to='/my-profile' className='bg-gray-300 py-2 flex justify-center rounded-lg'>My Profile</Link>
                    <Link onClick={()=> setProfileMenuOpen(false)} to={dashboardUrl} className='bg-gray-300 py-2 flex justify-center rounded-lg'>My Dashboard</Link>
                    <button onClick={()=>{handleLogout(); setProfileMenuOpen(false);}} className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2 flex justify-center'>
                        Logout
                    </button>
                </div>
            )
        }   
        </>
  )
}

export default ProfileMenu
