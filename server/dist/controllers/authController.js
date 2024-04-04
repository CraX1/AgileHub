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
exports.loginUser = exports.createUser = void 0;
const authModel_1 = require("../models/authModel");
const SecretToken_1 = require("../utils/SecretToken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const inputValidation_1 = require("../utils/inputValidation");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.json({ error: "All fields are required" });
        }
        if (!(0, inputValidation_1.isValidEmail)(email) && !(0, inputValidation_1.isValidPassword)(password)) {
            return res
                .status(400)
                .json({ error: "Invalid email and password format. Please re-enter" });
        }
        if (!(0, inputValidation_1.isValidEmail)(email)) {
            return res
                .status(400)
                .json({ error: "Invalid email format. Please re-enter" });
        }
        if (!(0, inputValidation_1.isValidPassword)(password)) {
            return res
                .status(400)
                .json({ error: "Invalid password format. Please re-enter" });
        }
        const existingUser = yield authModel_1.Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        const newUser = yield authModel_1.Users.create(req.body);
        const token = (0, SecretToken_1.createSecretToken)(newUser._id);
        res.cookie("token", token, {
            //NOTE 1
            httpOnly: true, //Note 2
            withCredentials: true,
            // secure:true,//if using https
            sameSite: "strict",
            maxAge: 259200,
        });
        console.log("req", req.body);
        res.status(201).json({
            success: true,
            message: `Created user with email, ${email}`,
            data: {
                email,
                // username
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: `Reason: ${err}`,
        });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = yield authModel_1.Users.findOne({ email });
        if (!user) {
            return res
                .status(404)
                .json({ message: "User does not exist with this email" });
        }
        const auth = yield bcrypt_1.default.compare(password, user.password);
        if (!auth) {
            return res
                .status(401)
                .json({ message: "Incorrect password, please re-enter" });
        }
        const token = (0, SecretToken_1.createSecretToken)(user._id);
        res.cookie("token", token, {
            httpOnly: true, //Note 2
            withCredentials: true,
            // secure:true,//if using https
            sameSite: "strict",
            maxAge: 259200,
        });
        res.status(200).json({
            status: "success",
            message: `Logged in user with email, ${email}`,
            data: {
                email,
                username: user.username,
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: `Reason: ${err}`,
        });
    }
});
exports.loginUser = loginUser;
//NOTE 1:
// Here we set the JWT token as an HTTP-Only cookie in the response from the server
// The client doesn't need to store or handle the token explicitly. The browser will automatically include the cookie in subsequent requests to the same domain.
//NOTE 2:
// When the httpOnly flag is set on a cookie, it instructs the web browser that the cookie should only be accessible by the server and not by client-side scripts
// running in the browser. This means that even if a cross-site scripting (XSS) vulnerability exists on the website, and a malicious script is injected and
// executed in the user's browser, the script will not be able to access or manipulate the cookie marked as httpOnly.
// The withCredentials option is set to true to allow the cookie to be sent with cross-origin requests
