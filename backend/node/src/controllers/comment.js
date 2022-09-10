import {apiError} from "../utils/error.js";
import Comments from "../models/comments.js";
import Video from "../models/video.js";

export const postComment = async(req,res,next) => {
    try{
        const comment = new Comments({...req.body, userId: req.user.id})
        await comment.save()
        res.status(200).json(comment);
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const deleteComment = async(req,res,next) => {
    try{
        const comment = await Comments.findById(req.params.id)
        const video =  await Video.findById(req.params.id)
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comments.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted!")
        }else{
            next(apiError(403, "You can only delete your comment"))
        }
    }catch (err){
        next(apiError(err.status, err.message))
    }
}

export const getComments = async(req,res,next) => {
    try{
        const comments = Comments.find({videoId: req.params.videoId})
        res.status(200).json(comments)
    }catch (err){
        next(apiError(err.status, err.message))
    }
}