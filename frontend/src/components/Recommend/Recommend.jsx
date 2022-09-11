import React, {useEffect, useState} from "react";
import './Recommend.css'
import axios from "axios";
import Card from "../Card/Card";

const Recommend = ({tags}) => {

    const [videos,setVideos] = useState([]);

    useEffect(()=> {
        const getVideos = async () => {
            const res = await axios.get(`/videos/tags?tags=${tags}`)
            setVideos(res.data)
        }
        getVideos()
    }, [tags])

    return (
        <div className="video-recommend">
            {videos.map(video=>(
                <Card type="sm" key={video._id} video={video}/>
            ))}
        </div>

    )
}

export default Recommend