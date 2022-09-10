import bcrypt from 'bcryptjs';
import User from "../models/user.js";
import {apiError} from "../utils/error.js";

export const register = async (req,res,next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({...req.body, password: hash})
        await user.save();
        res.status(201).send(user);
    }catch (err){
        next(err);
    }
}

export const login = async(req,res,next) => {
    try{
        const user = await User.findOne({name:req.body.name})
        if(!user) return next(apiError(404, "User not found!"))

        const validCheck = await bcrypt.compare(req.body.password, user.password)
        if(!validCheck) return next(apiError(400, "Incorrect username/password"))

        const accessToken = user.generateAuthToken(req.hostname, "50min")
        const refreshToken = user.generateAuthToken(req.hostname, "1d")

        res.cookie("access_token", accessToken,{
            httpOnly: true
        })
            .status(200)
            .json({
                "access_token" : accessToken,
                "refresh_token": refreshToken
            });

    }catch (err){
        next(err)
    }
}
