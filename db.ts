import mongoose from "mongoose";

export async function connectDB() {
  await mongoose
    .connect("mongodb://localhost:27017/rbac-demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("🔰 Connected to database");
    })
    .catch((err) => console.log("Cant connect", err));
}
