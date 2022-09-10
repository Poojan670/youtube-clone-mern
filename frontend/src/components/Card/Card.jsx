import React, {useEffect, useState} from "react";
import './Card.css'
import {Link} from 'react-router-dom'
import {format} from 'timeago.js'
import axios from "axios";

const Card = ({type, video}) => {

    const [channel,setChannel] = useState({});

    useEffect(()=>{
        const getChannel = async () => {
            const res = await axios.get(`/users/${video.userId}`)
            setChannel(res.data)
        }
        getChannel()
    }, [video.userId])


    return (
        <Link to="/video/test" className="router-link">
            <div className={`${type === "sm" ? "card-container-recommend" : "card-container"}`}>
                <img src={video.imgUrl}
                     alt="card" className={`${type === "sm" ? "card-img-recommend" : "card-img"}`}/>
                <div className={`${type === "sm" ? "card-details-recommend" : "card-details"}`}>
                    <img className={`${type === "sm" ? "channel-image-recommend" : "channel-image"}`}
                         src={channel.img} alt=""/>
                    <div className="card-texts">
                        <h1 className="card-title">{video.title}</h1>
                        <h2 className="channel-name">{channel.name}</h2>
                        <div className="card-info">{video.views} views : {format(video.createdAt)}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card