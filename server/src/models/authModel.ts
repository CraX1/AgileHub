import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: [true, "A user with this email already exists"],
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    maxLength: [40, "The password must have less or equal than 40 characters"],
    minLength: [10, "The password must have more or equal to 10 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Users = mongoose.model("Users", authSchema);
