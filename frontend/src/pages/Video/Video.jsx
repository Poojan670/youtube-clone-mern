import React, {useEffect, useState} from "react";
import './Video.css'
import {
    AddTaskOutlined,
    ReplyOutlined,
    ThumbDown,
    ThumbDownOffAltOutlined,
    ThumbUp,
    ThumbUpOffAltOutlined
} from "@mui/icons-material";
import Comments from "../../components/Comments/Comments";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {DISLIKE, FETCH_FAILURE, FETCH_START, FETCH_SUCCESS, LIKE} from "../../Redux/Video/Video";
import {format} from "timeago.js";
import {SUBSCRIPTION} from "../../Redux/User/User";
import Recommend from "../../components/Recommend/Recommend";

const Video = () => {
    const {currentUser} = useSelector((state)=> state.user)
    const {currentVideo} = useSelector((state)=> state.video)
    const dispatch = useDispatch();
    const path = useLocation().pathname.split("/")[2];

    const [channel, setChannel] = useState({})

    useEffect(()=> {
        const getVideoData =async () => {
            dispatch(FETCH_START())
            try{
                const video = await axios.get(`/videos/find/${path}`)
                const channel = await axios.get(`/users/${video.data.userId}`)
                setChannel(channel.data)
                dispatch(FETCH_SUCCESS(video.data))
            }catch (err){
                dispatch(FETCH_FAILURE())
                console.log(err.message)
            }
        }
        getVideoData();
    }, [path, dispatch])

    const handleLike = async () => {
        await axios.put(`/users/like/${currentVideo._id}`)
        dispatch(LIKE(currentUser._id))
    }
    const handleDislike = async () => {
        await axios.put(`/users/dislike/${currentVideo._id}`)
        dispatch(DISLIKE(currentUser._id))
    }

    const handleSubscribe = async () => {
        console.log(currentUser)
        currentUser.subscribedUsers.includes(channel._id)
            ? await axios.put(`/users/unsub/${channel._id}`)
            : await axios.put(`/users/sub/${channel._id}`);
        dispatch(SUBSCRIPTION(channel._id));
    };

    return (
        <div className="video-container">
            <div className="video-content">
                <div className="video-wrapper">
                    <video className="video-frame" src={currentVideo.videoUrl} controls>
                    </video>
                </div>
                <h1 className="video-title">{currentVideo.title}</h1>
                <div className="video-details">
                    <div className="video-info">{currentVideo.views} views : {format(currentVideo.createdAt)}</div>
                    <div className="video-buttons">
                        <div className="video-btn" onClick={handleLike}>
                            {
                                currentVideo.likes?.includes(currentUser._id)
                                ? (<ThumbUp/>) :
                                (<ThumbUpOffAltOutlined/>)
                            }
                            {currentVideo.likes?.length}</div>
                        <div className="video-btn" onClick={handleDislike}>
                            {
                                currentVideo.dislikes?.includes(currentUser._id)
                                ? (<ThumbDown/>)
                                : <ThumbDownOffAltOutlined/>
                            }
                            Dislike</div>
                        <div className="video-btn"><ReplyOutlined/>Share</div>
                        <div className="video-btn"><AddTaskOutlined/>Save</div>
                    </div>
                </div>

                <div className="menu-hr"/>

                <div className="video-channel">
                    <div className="video-channel-info">
                        <img src={channel.img} alt="video-img" className="video-img"/>
                        <div className="video-channel-details">
                            <span className="video-channel-name">{channel.name}</span>
                            <span className="video-sub-counter">{channel.subscribers} Subscribers</span>
                            <p className="video-description">{currentVideo.desc}</p>
                        </div>
                    </div>
                    <button type="button" className="video-subscribe" onClick={handleSubscribe}>{
                        currentUser.subscribedUsers?.includes(channel._id)
                        ? "SUBSCRIBED" : "SUBSCRIBE"
                    }</button>
                </div>

                <div className="menu-hr">
                    <Comments videoId={currentVideo._id}/>
                </div>
            </div>
            <Recommend tags={currentVideo.tags}/>
        </div>
    )
}

export default Video