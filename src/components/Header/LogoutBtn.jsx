import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch=useDispatch();
    const handleLogout=()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
    </button>
  )
}

export default LogoutBtn
