import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const registerSubmit = async(e)=>{
        e.preventDefault();
        try{
            //some logic to be added here
            if(confirmPassword !== password){
                alert('Confirm password error');
                return;
            }
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, email, password, role})
            });

            const message = await res.json();
            if(res.ok)
            {
                alert('User registered successfully');
                navigate('/login');
            }
            else{
                console.log("The registration result:" + message.msg);
            }
        } catch(err){
            console.log(err);
            alert('An error occurred', err);
        }
    };

  return (
    <div className='w-full h-fit flex flex-col gap-y-10 md:gap-y-6'>
        <input type="text" placeholder='enter your username: Henry-cavill' value={username} onChange={(e)=> setUsername(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <input type="email" placeholder='enter your email: xyz@gmail.com' value={email} onChange={(e)=> setEmail(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <input type="text" placeholder='enter password: 12**cvx' value={password} onChange={(e)=> setPassword(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <input type="password" placeholder='confirm password: 12**cvx' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <div className='w-full flex justify-between items-center gap-x-10'>
            <span>
                <h1 className='text-white font-bold text-xl'>Role</h1>
            </span>
            <span className='w-fit flex gap-x-2'>
                <label htmlFor="student-radio">Student</label>
                <input id='student-radio' type="radio" name='role' value='Student' checked={role === 'Student'} onChange={(e)=> setRole(e.target.value)} />
            </span>
            <span className='w-fit flex gap-x-2'>
                <label htmlFor="tutor-radio">Tutor</label>
                <input id='tutor-radio' type="radio" name='role' value='Tutor' checked={role === 'Tutor'} onChange={(e)=> setRole(e.target.value)} />
            </span>
        </div>
        <button onClick={registerSubmit} className='h-[50px] rounded-md bg-black text-white text-lg font-bold hover:cursor-pointer'>Register me</button>
        <span className='self-center text-white'>
            <Link to='/login' className='underline'>Already have an account? SignIn</Link>
        </span>
    </div>
  )
}

export default RegisterForm
