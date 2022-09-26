import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const collectData = async () => {

        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        // console.log(result)
        localStorage.setItem("userData", JSON.stringify(result))

        navigate("/")
    }

    return (
        <div className='signup'>
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>

        </div>
    )
}

export default SignUp