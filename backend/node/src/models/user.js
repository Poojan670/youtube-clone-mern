import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    img : {
        type: String
    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscribedUsers : {
        type : [String],
    },
}, {timestamps:true}, { versionKey: false })

userSchema.methods.generateAuthToken = function (domain, expiryTime) {
    return  jwt.sign({
        id:this._id,
        domain: domain
    }, process.env.JWT_KEY, {expiresIn: expiryTime})
}


const User = mongoose.model("User", userSchema);

export default User;