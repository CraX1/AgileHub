"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.default.Schema({
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
userSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        // NOTE-1
        this.password = yield bcrypt_1.default.hash(this.password, 12);
    });
});
exports.Users = mongoose_1.default.model("Users", userSchema);
// NOTE-1:
// executed before saving a document to the database. It is used to hash the user's password using the bcrypt library before storing it in the database.
// bcrypt.hash(this.password, 12) is a function provided by the bcrypt library that takes the plaintext password (this.password) and generates a hashed version
// of it using a salt rounds value of 12. The higher the salt rounds value, the more secure the hash is, but it also increases the computational time required
// to generate the hash. await is used because bcrypt.hash is an asynchronous function that returns a Promise.
