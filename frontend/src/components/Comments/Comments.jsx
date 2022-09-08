import React from "react";
import './Comments.css'
import Comment from "../sub-components/Comment/Comment";

const Comments = () => {
    return (
        <div className="comment-container">
            <div className="new-comment">
                <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="video-img"/>
                <input type="text" placeholder="Add a comment..." className="comment-input"/>
            </div>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    )
}

export default Comments