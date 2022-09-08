import React from "react";
import './Card.css'
import {Link} from 'react-router-dom'
import Me from '../../img/poo.jpeg'
import Group from '../../img/group.jpg'

const Card = ({type}) => {
    return (
        <Link to="/video/test" className="router-link">
            <div className={`${type === "sm" ? "card-container-recommend" : "card-container"}`}>
                <img src={Group}
                     alt="card" className={`${type === "sm" ? "card-img-recommend" : "card-img"}`}/>
                <div className={`${type === "sm" ? "card-details-recommend" : "card-details"}`}>
                    <img className={`${type === "sm" ? "channel-image-recommend" : "channel-image"}`}
                         src={Me} alt=""/>
                    <div className="card-texts">
                        <h1 className="card-title">Test Video</h1>
                        <h2 className="channel-name">Poojan</h2>
                        <div className="card-info">400k views : 1 day ago</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card