import express from "express";
import { connectDB } from "./db";
import userRouter from "./routes/userRoutes";
import cookieParser from "cookie-parser";

connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/", userRouter);

app.listen(3000, () => {
  console.log("🔰 Server started on port 3000");
});
