import { useState } from "react"
import Nav from "./Nav"
import { Link } from "react-router-dom"

export default function SignUp() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })
    const [error, setError] = useState("")


    const HandleSubmit = (e) => {
        e.preventDefault()

        let allError = {}
        if (!input.name) allError.name = "Name is required"
        if (!input.email) allError.email = "email is required"
        if (!input.phone) allError.phone = "phone is required"
        if (!input.password) allError.password = "password is required"

        if (Object.keys(allError).length > 0) {
            setError(allError)
            return
        }

        localStorage.setItem('data', JSON.stringify(input))
        alert("Sign up succesfull ,Now you can log in 🚀")

         setInput({
                name: "",
                email: "",
                phone: "",
                password: "",
            })
            
    }

    // let person = {name:"rohit",email:""}

    // // person = {name:"",email:"rohit@123"}
    // const samePerson = {...person , lastName: "kumar"};
    // console.log(samePerson)

    return (
        <>
            <Nav />
            <h1>Sign Up Form</h1>
            <form onSubmit={HandleSubmit} className="formStyl">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                {error.name && <p style={{ color: "red", margin: "0px", padding: "0px", textAlign: "left" }}>{error.name}</p>}

                <br />

                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                />
                {error.email && <p style={{ color: "red", margin: "0px", padding: "0px", textAlign: "left" }}>{error.email}</p>}
                <br />

                <input
                    type="number"
                    name="phone"
                    placeholder="Enter your Phone num"
                    value={input.phone}
                    onChange={(e) => setInput({ ...input, phone: e.target.value })}
                />
                {error.phone && <p style={{ color: "red", margin: "0px", padding: "0px", textAlign: "left" }}>{error.phone}</p>}
                <br /><input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                />
                {error.password && <p style={{ color: "red", margin: "0px", padding: "0px", textAlign: "left" }}>{error.password}</p>}
                <br />

                <button type="submit">Submit</button>

            </form>
            <h4>If you already have an account ? <Link to='/login'>Log in</Link></h4>

        </>
    )
}