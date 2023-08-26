import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://suhaskumarnagaraj:suhas@cluster0.wwmqe7j.mongodb.net/?retryWrites=true&w=majority");
    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;