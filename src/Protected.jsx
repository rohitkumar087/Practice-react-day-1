import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({child}) => {
    const isSignup = localStorage.getItem('data')
    // if(isSignup){
    //     return child
    // }
    // else{
    //     return <Navigate to={'/signup'}/>
    // }

    return isSignup? child :<Navigate to={'/signup'}></Navigate>   
  
}

export default ProtectedRoute


// return(
//         <>
//         <Nav/>
//         <h1>🪬 Protected Route 🪬</h1>
//         <h3>Sensetive data</h3>
//         <p>Only authoorized user can access</p>
//         <p>If you can access so congrates you are our authorized user</p>
//         </>
//     )