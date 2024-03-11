"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dotenv from "dotenv";
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({ path: `${__dirname}/../config.env` });
// configures dotenv to work in your application
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app
    .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
})
    .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
