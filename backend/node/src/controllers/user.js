import User from '../models/user.js'
import {apiError} from "../utils/error.js";
import paginate from "../middleware/pagination.js";
import Video from '../models/video.js';

export const getMe = async(req,res,next) => {
    try{
        const user = await User.findOne({_id: req.user.id})
        !user ?  next(apiError(404, "User not found")) :  res.status(200).json(user);
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const getUserById = async(req,res,next) => {
    try{
        const user = await User.findById(req.params.id)
        !user ? apiError(404, "User not found") :  res.status(200).json(user);
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const listUsers = async(req,res,next) => {
    try{
        const users = await User
            .find()
            .sort({createdAt: 1})
            .select('-password')
        const result = await paginate(users,req,res)
        res.json(result)
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const updateUser = async(req,res, next) => {
    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: res.body
            }, {new:true})
            res.status(200).json(updatedUser)
        }catch (err){
            next(apiError(err.status, err.message))
        }
    }else{
        next(apiError(403, "You can only update your own account"))
    }
}

export const deleteUser = async(req,res, next) => {
    if(req.params.id === req.user.id){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted successfully!")
        }catch (err){
            next(apiError(err.status, err.message))
        }
    }else{
        return next(apiError(403, "You can only delete your own account"))
    }
}

export const subscribe = async(req,res,next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
            $push: {subscribedUsers: req.params.id }
        })

        await User.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: 1}
        })
        res.status(200).json("Subscription successful!")
    }catch (err){
        return next(apiError(err.status,err.message))
    }
}

export const unsubscribe = async(req,res,next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
            $pull: {subscribedUsers: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc:{subscribers: -1}
        })
        res.status(200).json("UnSubscription successful!")
    }catch (err){
        return next(apiError(err.status,err.message))
    }
}

export const likeVideo = async(req,res,next) => {
    try{
        const userId = req.user.id,
            videoId = req.params.videoId;
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { likes: userId },
            $pull:{ dislikes:userId }
        })
        res.status(200).json("Liked the Video")
    }catch (err){
        return next(apiError(err.status, err.message))
    }
}

export const dislikeVideo = async(req,res,next) => {
    try{
        const userId = req.user.id,
            videoId = req.params.videoId;
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { dislikes: userId },
            $pull:{ likes:userId }
        })
        res.status(200).json("Liked the Video")
    }catch (err){
        return next(apiError(err.status, err.message))
    }
}

