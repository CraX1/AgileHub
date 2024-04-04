import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User must have an username"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    maxLength: [40, "The password must have less or equal to 40 characters"],
    minLength: [8, "The password must have more or equal to 8 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function () {
  // NOTE-1
  this.password = await bcrypt.hash(this.password, 12);
});

export const Users = mongoose.model("Users", userSchema);

// NOTE-1:
// executed before saving a document to the database. It is used to hash the user's password using the bcrypt library before storing it in the database.
// bcrypt.hash(this.password, 12) is a function provided by the bcrypt library that takes the plaintext password (this.password) and generates a hashed version
// of it using a salt rounds value of 12. The higher the salt rounds value, the more secure the hash is, but it also increases the computational time required
// to generate the hash. await is used because bcrypt.hash is an asynchronous function that returns a Promise.
