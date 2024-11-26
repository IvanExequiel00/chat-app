import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
       const conn = await mongoose.connect(process.env.MONGODB_URL);
       console.log(`MONGO DB connected  wachin ${conn.connection.host}`)
    } catch (error) {
        console.log("Mongo db error: ",error)
    }
}