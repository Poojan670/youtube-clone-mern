import React, {useEffect, useState} from "react";
import './Comments.css'
import Comment from "../sub-components/Comment/Comment";
import axios from "axios";
import {useSelector} from "react-redux";

const Comments = ({videoId}) => {

    const currentUser = useSelector((state) => state.user);
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        const getComments = async () => {
            try{
                const res = await axios.get(`/comments/${videoId}`)
                setComments(res.data)
            }catch (err){
                console.log(err.message)
            }
        }
        getComments();
    }, [videoId])
    return (
        <div className="comment-container">
            <div className="new-comment">
                <img src={currentUser.img} alt="" className="video-img"/>
                <input type="text" placeholder="Add a comment..." className="comment-input"/>
            </div>
            {comments.map(comment=> {
                <Comment key={comment._id} comment={comment}/>
            })}
        </div>
    )
}

export default Comments