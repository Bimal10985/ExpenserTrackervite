import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import incomeRouter from "./routes/income.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", userRouter);
app.use("/", incomeRouter);


const port=process.env.PORT;
app.listen(port, async () => {
  console.log("Server started");
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});
