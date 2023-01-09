import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import musicRoute from "./routes/Music.js";

dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO).then(() => {
  console.log("DB is Connected");
});

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/music", musicRoute);

app.listen(port, () => {
  console.log(`Server Started in Port ${port}`);
});
