import { useState } from "react"
import SignUp from "./SignUp"
import Nav from "./Nav"
import { data } from "react-router-dom"

export default function LogIn(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const HandleSubmit=(e)=>{
        e.preventDefault()        

        const resultData = JSON.parse(localStorage.getItem('data'))

        if(resultData.email===email && resultData.password===password){
            alert("Log in successfully done")
            setEmail('')
            setPassword('')
        }
        else if(resultData.email!=email && resultData.password!=password){
            alert("Invalid email and password")
        }
        else if(resultData.email!=email){
            alert("invalid email")
        }
        else if(resultData.password!=password){
            alert("invalid password")
        }

    }
 function handleLogout() {
    const userData = localStorage.getItem('data')

        if (!userData) {
            alert("Please Signup first")
            return;
        }
        localStorage.removeItem("userData");
        alert("Logged out successfully")
    }
       
    return(
        <>
        <Nav/>
        <h1>Log In Form</h1>
        <div className="formStyl"> 
            <form  onSubmit={HandleSubmit}>
            <input 
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <br/>

            <input 
            type="text"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br />

            <button type="submit">Submit</button>

        </form>
        <p onClick={handleLogout} style={{textDecoration:"underline",cursor:"pointer"}}><b>Log out</b></p>
        </div>
        <h4>If you don't have any accout so - <a href="/signup">Sign up</a></h4> 

        </>
    )
}