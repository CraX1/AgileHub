import express from "express";
import {
  createUser,
  googleLogin,
  loginUser,
} from "../controllers/authController";

const authRouter = express.Router();

authRouter.route("/login").post(loginUser);
authRouter.route("/signUp").post(createUser);

authRouter.route("/google-signin").post(googleLogin);

export default authRouter;
