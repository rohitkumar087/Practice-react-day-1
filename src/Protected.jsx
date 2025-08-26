import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isSignup = localStorage.getItem('currentUser')
    return isSignup? children :<Navigate to={'/login'}></Navigate>   
}
export default ProtectedRoute
