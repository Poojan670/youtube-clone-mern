import React from "react";
import './Navbar.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-search">
                    <input className="navbar-input" placeholder="Search"/>
                    <SearchOutlinedIcon/>
                </div>
                <button className="navbar-btn">
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                </button>
            </div>
        </div>
    )
}

export default Navbar