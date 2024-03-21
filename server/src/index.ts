import express, { Request, Response } from "express";
import cors from "cors";
import authRouter from "./routes/authRoute";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", authRouter);

export default app;
