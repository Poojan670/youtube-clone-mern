import mongoose from "mongoose";

export default mongoose.model("Comments", new mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        videoId : {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
    }, {timestamps:true})
);