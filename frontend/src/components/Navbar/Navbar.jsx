import React from "react";
import './Navbar.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-search">
                    <input className="navbar-input" placeholder="Search"/>
                    <SearchOutlinedIcon/>
                </div>
                <Link to="login" style={{textDecoration:"none"}}>
                <button className="navbar-btn">
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar