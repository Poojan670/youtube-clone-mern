import React from 'react';
import './Auth.css'
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <h1 className="auth-title">
                    Sign Up
                </h1>
                <h2 className="auth-subtitle">
                    Welcome to Youtube
                </h2>
                <input className="auth-input" placeholder="username" type="text"/>
                <input className="auth-input" placeholder="email" type="text"/>
                <input className="auth-input" placeholder="password" type="password"/>
                <button className="auth-btn"> Sign In</button>
                <Link to="/login" style={{textDecoration:"none"}}>
                    <span className="auth-footer">Already have an account? Sign In</span>
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

export default Register