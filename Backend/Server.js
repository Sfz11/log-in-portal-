import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./DB/ConnectDB.js";
import router from "./Routes/Routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});
