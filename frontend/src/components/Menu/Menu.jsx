import React from 'react';
import './Menu.css'
import Youtube from "../../img/youtube-logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import {SettingsBrightnessOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";


const Menu  = ({toggleTheme, theme}) => {
    return (
        <div className="menu-container">
            <div className="menu-wrapper">
                <Link to="/" className="router-link">
                <div className="menu-logo">
                    <img src={Youtube} alt="youtube" className="menu-img"/>
                    PoojanTube
                </div>
                </Link>
                <div className="menu-item"><HomeIcon/>Home</div>
                <div className="menu-item"><ExploreOutlinedIcon />Explore</div>
                <div className="menu-item"> <SubscriptionsOutlinedIcon/>Subscriptions</div>
                <div className="menu-hr"/>
                <div className="menu-item"><VideoLibraryOutlinedIcon/>Library</div>
                <div className="menu-item"><HistoryOutlinedIcon/>History</div>

                <div className="menu-hr"/>

                <div className="menu-login">
                    Sign in to like videos, comment and subscribe
                    <button className="menu-btn">
                        <AccountCircleOutlinedIcon/>
                        SIGN IN
                    </button>
                </div>

                <div className="menu-hr"/>

                <h2 className="menu-title">BEST OF POOJANTUBE</h2>
                <div className="menu-item"><LibraryMusicOutlinedIcon/>Music</div>
                <div className="menu-item"> <SportsBasketballOutlinedIcon />Sports</div>
                <div className="menu-item"><SportsEsportsOutlinedIcon />Gaming</div>
                <div className="menu-item"><MovieOutlinedIcon /> Movies</div>
                <div className="menu-item"><ArticleOutlinedIcon />News</div>
                <div className="menu-item"><LiveTvOutlinedIcon />Live</div>

                <div className="menu-hr"/>

                <div className="menu-item"><SettingsOutlinedIcon />Settings</div>
                <div className="menu-item"><FlagOutlinedIcon />Report</div>
                <div className="menu-item"><HelpOutlineOutlinedIcon/>Help</div>
                <div className="menu-item" onClick={toggleTheme}>
                    <SettingsBrightnessOutlined />
                    {theme==="dark-mode" ? "Dark" : "Light"} Mode
                </div>
            </div>
        </div>
    )
}

export default Menu