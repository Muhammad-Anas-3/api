import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import authRouter from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/room.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

//middleware
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/hotel", hotelRoute);
app.use("/api/v1/room", roomRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    message: errMessage,
    stack: err.stack,
  });
});

const start = () => {
  try {
    connectDb(process.env.MONGO_DB_URI);
    app.listen(3000, () => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
