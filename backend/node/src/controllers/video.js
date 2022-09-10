import {apiError} from "../utils/error.js";
import Video from "../models/video.js";
import User from "../models/user.js";

export const postVideo = async (req,res,next) => {
    try{
        const video = new Video({userId:req.user.id, ...req.body})
        await video.save()
        res.status(201).json(video);
    }catch (err){
        next(apiError(err.status,err.message))
    }
}

export const updateVideo = async(req,res,next) => {
    try{
        const video = Video.findById(req.params.id)
        if(!video) return next(apiError(404, "Video not found"))
        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set: req.body
            }, {new:true})
            res.status(200).json(updatedVideo);
        }else{
            next(apiError(403, "You can update only your own video"))
        }
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const deleteVideo = async(req,res,next) => {
    try{
        const video = Video.findById(req.params.id)
        if(!video) return next(apiError(404, "Video not found"))
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).json("Video Deleted Successfully");
        }else{
            next(apiError(403, "You can delete only your own video"))
        }
    }catch (err){
        next(apiError(err.status, err.message))
    }
}


export const getVideo = async(req,res,next) => {
    try{
        const video = Video.findById(req.params.id)
        !video ? next(apiError(404, "Video not found")) : res.status(200).json(video)
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const updateViews = async(req,res,next) => {
    try{
        await Video.findByIdAndUpdate(req.params.id, {
            $inc:{views: 1}
        })
        res.status(200).json("Increase the video's view By 1")
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const getRandomVideos = async(req,res,next) => {
    try{
       const videos = await Video.aggregate([{$sample: {size: 40}}])
        res.status(200).json(videos)
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const getTrendingVideos = async(req,res,next) => {
    try{
        const videos = await Video.find().sort({views:-1})
        res.status(200).json(videos)
    }catch (err){
        next(apiError(err.status, err.message))
    }
}


export const getSubbedVideos = async(req,res,next) => {
    try{
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUsers
        const list = await Promise.all(
            subscribedChannels.map(
                channelId => {
                    return Video.find({userId: channelId})
                }
            )
        )
        res.status(200).json(list.flat().sort(
            (a,b) => b.createdAt - a.createdAt
        ));
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const getByTags = async (req,res,next) => {
    try{
        const tags = req.query.tags.split(",")
        const videos = await Video.find({
            tags: { $in: tags}
        }).limit(20);
        res.status(200).json(videos);
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const search = async (req,res,next) => {
    try{
        const search = req.query.search
        const videos = await Video.find({
            title: {$regex:search, $options: "i"}
        }).limit(40);
        res.status(200).json(videos);
    }catch (err){
        next(apiError(err.status, err.message))
    }
}


