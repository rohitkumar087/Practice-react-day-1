import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const isLoggedin = localStorage.getItem("currentUser");
    const navigate = useNavigate()
    const HandleLogout= ()=>{
        localStorage.removeItem('currentUser')
        localStorage.removeItem('value')
        navigate('/login')
    }

    return(
        <div className="navStyl">
            <Link to='/'>Home</Link>
            {!isLoggedin && <Link to='/signup'>Sign up</Link>}
            {!isLoggedin && <Link to='/login'>Log in</Link>}
            {isLoggedin && <Link to='/counter'>Counter </Link>}
            {isLoggedin && <Link to='/data'>Data </Link>}
            {isLoggedin && <a onClick={HandleLogout} style={{cursor:"pointer"}}>Logout</a>}
            

        </div>
    )
}