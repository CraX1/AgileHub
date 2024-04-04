"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const authSchema = new mongoose_1.default.Schema({
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
});
exports.Users = mongoose_1.default.model("Users", authSchema);
