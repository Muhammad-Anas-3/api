import mongoose from "mongoose";

const connectDb = (url) => {
  try {
    mongoose.connect(url);
  } catch (error) {
    console.log('error');
  }
};

export default connectDb;
