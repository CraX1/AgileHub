"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: `${__dirname}/../config.env` });
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
    mongoose_1.default
        .connect(db)
        .then(() => {
        console.log("Connected to MongoDB");
        _1.default.listen(PORT, () => {
            console.log("Server running at PORT: ", PORT);
        });
    })
        .catch((error) => {
        console.error("Failed to connect to MongoDB:", error.message);
    });
}
else {
    console.error("Database URL or password is not defined in the environment variables.");
}
// app
//   .listen(PORT, () => {
//     console.log("Server running at PORT: ", PORT);
//   })
//   .on("error", (error) => {
//     throw new Error(error.message);
//   });
