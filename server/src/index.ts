// import dotenv from "dotenv";
import dotenv from "dotenv";

import express, { Request, Response } from "express";

dotenv.config({ path: `${__dirname}/../config.env` });
// configures dotenv to work in your application
const PORT = process.env.PORT;

const app = express();

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
