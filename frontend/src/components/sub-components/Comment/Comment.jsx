import React from 'react'
import './Comment.css'

const Comment = () => {
    return (
        <div className="container">
            <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
                 alt="" className="video-img"/>
            <div className='details'>
                <span className="name">Anmol<span className="date"> 3 days ago</span></span>
                <span className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur ducimus fugiat itaque iusto magnam minus pariatur quo repellat reprehenderit! Aliquid corporis cumque expedita fugit nobis non porro recusandae voluptates.
                </span>
            </div>
        </div>
    )
}

export default Comment