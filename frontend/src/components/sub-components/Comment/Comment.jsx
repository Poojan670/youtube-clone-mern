import React, {useEffect, useState} from 'react'
import './Comment.css'
import axios from "axios";
import {format} from "timeago.js";

const Comment = ({comment}) => {
    const [channel, setChannel] = useState({});
    useEffect( ()=> {
        const getComments = async () => {
            const res= await axios.get(`users/find/${comment.userId}`)
            setChannel(res.data)
        };
        getComments();
    }, [comment.userId])

    return (
        <div className="container">
            <img src={channel.img}
                 alt="" className="video-img"/>
            <div className='details'>
                <span className="name">{channel.name}<span className="date">{format(comment.createdAt)}</span></span>
                <span className="text">{comment.desc}</span>
            </div>
        </div>
    )
}

export default Comment