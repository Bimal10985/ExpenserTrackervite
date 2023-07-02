import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.listen(8000, async () => {
  console.log("Server started");
  try {
    await mongoose.connect(
      "mongodb+srv://bimal10985:CcRTddu1h1NI4DSa@cluster0.dcrhemp.mongodb.net/expensestracker?retryWrites=true&w=majority"
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});
