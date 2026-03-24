import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

export const product = 
  mongoose.models.kuma5 || mongoose.model("kuma5", userSchema);