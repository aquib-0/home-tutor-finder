import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function PrivateRoutes({children}) {
    // const {user} = useAuth();
    const user = localStorage.getItem('user');

    // if(user === null)
    // {
    //     return <Navigate to='/student-login' />
    // }
    return user ? children : <Navigate to='/student-login' />

    // return children;
}
