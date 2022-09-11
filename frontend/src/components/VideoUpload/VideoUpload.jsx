import React, {useEffect, useState} from "react";
import './VideoUpload.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const VideoUpload = ({setOpen}) => {

    const [image,setImage] = useState(undefined);
    const [video,setVideo] = useState(undefined);
    const [imgLoad,setImgLoad] = useState(undefined);
    const [videoLoad,setVideoLoad] = useState(undefined);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState("");
    const navigate = useNavigate();

    const handleTags = (e) => {
        setTags(e.target.value.split(","));
    }

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgLoad(Math.round(progress)) : setVideoLoad(Math.round(progress));
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs(prev => {
                        return {...prev, [urlType]: downloadURL }
                    })
                });
            }
        );
    }

    useEffect(() => {
        video && uploadFile(video, "videoUrl");
    }, [video])

    useEffect(() =>{
        image && uploadFile(image, "imgUrl");
    }, [image])

    const handleUpload = async (e) => {
        e.preventDefault();
        const res = await axios.post("/videos", {
            ...inputs, tags
        })
        setOpen(false);
        res.status === 201 && navigate(`/video/${res.data._id}`)
    }

    return (
        <div className="upload-container">
            <div className="upload-wrapper">
                <div className="upload-close" onClick={() => setOpen(false)}>x</div>
                <h1 className="upload-title">
                Upload a new Video
                </h1>
                <label className="upload-label">Video : </label>

                {videoLoad > 0 ? (`Uploading: ${videoLoad} %`) : (
                    <input className="upload-input"
                        type="file"
                        accept="video/*"
                        onChange={e => setVideo(e.target.files[0])}
                />)}

                <input className="upload-input"
                       type="text"
                       name="title"
                       placeholder="Title"
                       onChange={handleChange}
                />
                <textarea  className="upload-input"
                           placeholder="Description"
                           rows={8}
                           name="desc"
                           onChange={handleChange}>
                </textarea>

                <input className="upload-input"
                       type="text"
                       placeholder="Separate tags with commas"
                onChange={handleTags}
                />

                <label className="upload-label">Image : </label>

                {imgLoad > 0 ? (`Uploading: ${imgLoad} %`) : (
                    <input className="upload-input"
                           type="file"
                           accept="image/*"
                           onChange={e => setImage(e.target.files[0])}
                    />)}


                <button className="auth-btn" onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )
}

export default VideoUpload