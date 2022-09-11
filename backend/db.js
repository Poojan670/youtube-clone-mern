import mongoose from "mongoose";

export async function connect (){
    await mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log(err))
}