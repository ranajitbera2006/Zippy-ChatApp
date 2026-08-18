import dns from "dns";
import mongoose from "mongoose";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error while connecting to database ", error.message);
  }
};

export default connectDB;
