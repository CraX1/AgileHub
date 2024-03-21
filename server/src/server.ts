import app from ".";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config({ path: `${__dirname}/../config.env` });

const PORT = process.env.PORT;
const database = process.env.DATABASE;
const localDatabase = process.env.DATABASE_LOCAL;
const databasePassword = process.env.DATABASE_PASSWORD;

// if (database && databasePassword ) {
const db = localDatabase;
// database && databasePassword
//   ? database.replace("<password>", databasePassword)
//   : "";

if (db) {
  mongoose
    .connect(db)
    .then(() => {
      console.log("Connected to MongoDB");

      app.listen(PORT, () => {
        console.log("Server running at PORT: ", PORT);
      });
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB:", error.message);
    });
} else {
  console.error(
    "Database URL or password is not defined in the environment variables."
  );
}
// app
//   .listen(PORT, () => {
//     console.log("Server running at PORT: ", PORT);
//   })
//   .on("error", (error) => {
//     throw new Error(error.message);
//   });
