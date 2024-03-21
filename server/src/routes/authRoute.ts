import express from "express";
import { createUser, loginUser } from "../controllers/authController";

const authRouter = express.Router();

authRouter.route("/login").post(loginUser);
authRouter.route("/signUp").post(createUser);

export default authRouter;
