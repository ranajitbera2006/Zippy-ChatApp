import mongoose from "mongoose";

const connectDB = async (req,res) =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully.")
  } catch (error) {
    console.error("Error while connecting to database ",error.message);
  }
}

export default connectDB;