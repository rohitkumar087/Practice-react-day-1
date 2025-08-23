import { Link } from "react-router-dom"

export default function Nav() {
    return(
        <div className="navStyl">
            <Link to='/'>Home</Link>
            <Link to='/pr'>Protected Route</Link>
            <Link to='/signup'>Sign up</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/axiosapi'>Axios </Link>
        </div>
    )
}