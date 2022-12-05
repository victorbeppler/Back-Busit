import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  created_date: {
    type: Date,
    default: Date.now,
  },
  name: String,
  email: String,
  password: String,
  birthdate: String,
});

export const DbUser = new mongoose.model("user", userSchema);
