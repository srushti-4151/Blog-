import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth' 
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()

    //When the LogoutBtn is clicked, the logoutHandler function is triggered.
    //This function calls authService.logout(), which performs the logout operation via the AuthService.
    //After the logout operation is successful, dispatch(logout()) is called to update the Redux state, setting status to false and userData to null.
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn