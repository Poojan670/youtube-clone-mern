import React, {useState} from 'react';
import './Auth.css'
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/login", {name, password})
            console.log(res.data)
        }catch (err){
            console.log(err.data.message)
        }
    }

    return (
        <div className="auth-container">
        <div className="auth-wrapper">
            <h1 className="auth-title">
                Sign In
            </h1>
            <h2 className="auth-subtitle">
                Continue to Youtube
            </h2>
            <input className="auth-input"
                   placeholder="username"
                   type="text"
                   onChange={e=>setName(e.target.value)}/>
            <input className="auth-input"
                   placeholder="password"
                   type="password"
                   onChange={e=>setPassword(e.target.value)}/>
            <button className="auth-btn" onClick={handleLogin}> Sign In</button>
            <Link to="/register" style={{textDecoration:"none"}}>
                <span className="auth-footer">Don't have an account? Sign Up</span>
            </Link>
        </div>
        <div className="auth-details">
            <div className="auth-language">English(USA)</div>
            <div className="links">
                <span className="auth-link">Help</span>
                <span className="auth-link">Privacy</span>
                <span className="auth-link">Terms</span>
            </div>
        </div>
        </div>
    )
}

export default Login