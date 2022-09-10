import React, {useEffect, useState} from "react";
import './Home.css'
import Card from "../../components/Card/Card";
import axios from "axios";

const Home = ({type}) => {

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        const getVideos = async () => {
            const res = await axios.get(`/videos/${type}`)
            setVideos(res.data)
        }
        getVideos()
    }, [type])
        return (
            <div className="home-container">
                {videos.map(video => (
                    <Card key={video._id} video={video}/>
                ))}
            </div>
        );
};

export default Home;