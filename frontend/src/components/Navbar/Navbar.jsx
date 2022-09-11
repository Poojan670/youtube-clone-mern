import React, {useState} from "react";
import './Navbar.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {VideoCallOutlined} from "@mui/icons-material";
import VideoUpload from '../VideoUpload/VideoUpload';

const Navbar = () => {
    const {currentUser} = useSelector(state => state.user)
    const [open,setOpen] = useState(false);


    return (
        <>
            <div className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="navbar-search">
                        <input className="navbar-input" placeholder="Search"/>
                        <SearchOutlinedIcon/>
                    </div>
                    {currentUser ? (
                        <div className="user-container">
                            <VideoCallOutlined style={{cursor:"pointer"}} onClick={() => setOpen(true)}/>
                            <img className="user-avatar" alt="" src={currentUser.img}/>
                            {currentUser.name}
                        </div>
                    ) : <Link to="login" style={{textDecoration: "none"}}>
                        <button className="navbar-btn">
                            <AccountCircleOutlinedIcon/>
                            SIGN IN
                        </button>
                    </Link>}
                </div>
            </div>
            {open && <VideoUpload setOpen={setOpen}/>}
        </>
    )
}

export default Navbar