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
exports.googleLogin = exports.loginUser = exports.createUser = void 0;
const authModel_1 = require("../models/authModel");
const SecretToken_1 = require("../utils/SecretToken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const inputValidation_1 = require("../utils/inputValidation");
const google_auth_library_1 = require("google-auth-library");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, username, provider } = req.body;
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
            user: {
                email,
                provider,
                username,
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
        if (user.provider === "google") {
            return res.status(404).json({
                message: "User was created using Google Sign up. Please use Google Sign in",
            });
        }
        const auth = yield bcrypt_1.default.compare(password, user.password || "");
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
            message: `Logged in user with email, ${user.email}`,
            user: {
                email: user.email,
                username: user.username,
                provider: user.provider,
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
const googleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const { idToken, provider } = req.body;
    console.log("Provider", provider);
    try {
        const ticket = yield client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        console.log("payload", payload);
        let user = yield authModel_1.Users.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email }
        // {
        //   username: payload?.name,
        //   email: payload?.email,
        //   picture: payload?.picture,
        //   provider,
        // },
        // { upsert: true, new: true }
        );
        if (!user) {
            console.log("userrrr");
            user = yield authModel_1.Users.create({
                username: payload === null || payload === void 0 ? void 0 : payload.name,
                email: payload === null || payload === void 0 ? void 0 : payload.email,
                picture: payload === null || payload === void 0 ? void 0 : payload.picture,
                provider,
            });
            console.log("USSSSSSS", user);
        }
        console.log("user", user);
        const jwtToken = (0, SecretToken_1.createSecretToken)(user._id);
        res.cookie("token", jwtToken, {
            httpOnly: true, //Note 2
            withCredentials: true,
            // secure:true,//if using https
            sameSite: "strict",
            maxAge: 259200,
        });
        res.status(200).json({
            status: "success",
            message: `Logged in user with email, ${user.email}`,
            user: {
                email: user.email,
                username: user.username,
                provider: user.provider,
            },
        });
    }
    catch (err) {
        console.log("err", err);
        res.status(500).json({
            success: false,
            error: `Reasondasdasd: ${err}`,
        });
    }
});
exports.googleLogin = googleLogin;
//NOTE 1:
// Here we set the JWT token as an HTTP-Only cookie in the response from the server
// The client doesn't need to store or handle the token explicitly. The browser will automatically include the cookie in subsequent requests to the same domain.
//NOTE 2:
// When the httpOnly flag is set on a cookie, it instructs the web browser that the cookie should only be accessible by the server and not by client-side scripts
// running in the browser. This means that even if a cross-site scripting (XSS) vulnerability exists on the website, and a malicious script is injected and
// executed in the user's browser, the script will not be able to access or manipulate the cookie marked as httpOnly.
// The withCredentials option is set to true to allow the cookie to be sent with cross-origin requests
// NOTE 3: Google OAuth
// The OAuth2Client class from the google-auth-library provides the functionality to verify the Google ID token.
// const client = new OAuth2Client(CLIENT_ID);
// => Here, we create a new instance of the OAuth2Client and pass the CLIENT_ID as a parameter.
// => The CLIENT_ID is the OAuth 2.0 Client ID that you obtained earlier during the Google Sign-In API setup process.
// => Inside the try block, we use the verifyIdToken method of the OAuth2Client instance to verify the Google ID token.
// => We pass the idToken and the CLIENT_ID as parameters. The verifyIdToken method returns a ticket object, which contains the verified payload of the ID token.
// User.findOneAndUpdate(): This is a Mongoose method that performs a combination of finding a document and updating it in a single atomic operation.
// => It's useful when you want to update a document if it exists, or create a new document if it doesn't.
// { email: payload.email }: This is the query object, which specifies the criteria to find the document.
// => In this case, we're looking for a document where the email field matches the email value from the payload object.
// { name: payload.name, email: payload.email }: This is the update object, which specifies the fields to be updated on the document.
// => In this case, we're updating the name, and email fields with the corresponding values from the payload object.
// { upsert: true, new: true }: These are options for the findOneAndUpdate operation:
// upsert: true: If a document is not found that matches the query, a new document will be created with the specified update data.
// new: true: This option ensures that the updated document is returned, rather than the original document.
