import mongoose from "mongoose";

export interface IUser {
  email: string;
  password: string;
  username: string;
  role: 10 | 20 | 25 | 30 | 100;
}

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  username: { type: String },
  role: {
    type: Number,
    enum: [10, 20, 25, 30, 100],
    default: 10,
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
