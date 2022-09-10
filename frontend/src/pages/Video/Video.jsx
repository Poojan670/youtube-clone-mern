import React from "react";
import './Video.css'
import {ThumbUpOffAltOutlined} from "@mui/icons-material";
import {ThumbDownOffAltOutlined} from "@mui/icons-material";
import {ReplyOutlined} from "@mui/icons-material";
import {AddTaskOutlined} from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Comments from "../../components/Comments/Comments";
import Card from "../../components/Card/Card";

const Video = () => {
    return (
        <div className="video-container">
            <div className="video-content">
                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <h1 className="video-title">How to be a millionaire</h1>
                <div className="video-details">
                    <div className="video-info">7,00,000 views : Oct 2, 2022</div>
                    <div className="video-buttons">
                        <div className="video-btn"><ThumbUpOffAltOutlined/>123</div>
                        <div className="video-btn"><ThumbDownOffAltOutlined/>Dislike</div>
                        <div className="video-btn"><ReplyOutlined/>Share</div>
                        <div className="video-btn"><AddTaskOutlined/>Save</div>
                    </div>
                </div>

                <div className="menu-hr"/>

                <div className="video-channel">
                    <div className="video-channel-info">
                        <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="video-img" className="video-img"/>
                        <div className="video-channel-details">
                            <span className="video-channel-name">Poojan Pradhan</span>
                            <span className="video-sub-counter">200k Subscribers</span>
                            <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eius excepturi incidunt natus provident quam rerum ullam? Eos laudantium libero nulla officia perspiciatis quod. Atque deleniti eos ex necessitatibus officia?</p>
                        </div>
                    </div>
                    <button type="button" className="video-subscribe">Subscribe</button>
                </div>

                <div className="menu-hr">
                    <Comments/>
                </div>
            </div>
            <div className="video-recommend">
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </div>

        </div>
    )
}

export default Video