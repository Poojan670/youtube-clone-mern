import jwt from 'jsonwebtoken';
import {apiError} from "./error.js";

export const auth = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token) return next(apiError(401, "Not Authenticated"))

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if(err) return next(apiError(403, "Invalid Token"))
        req.user = user;
        next()
    })
}