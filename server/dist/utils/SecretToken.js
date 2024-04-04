"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecretToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config({ path: `${__dirname}/../../config.env` });
const createSecretToken = (id) => {
    const jwtToken = process.env.JWT_TOKEN;
    if (!jwtToken) {
        throw new Error("JWT_TOKEN environment variable is not defined");
    }
    return jsonwebtoken_1.default.sign({ id }, jwtToken, {
        expiresIn: 3 * 24 * 60 * 60,
    });
};
exports.createSecretToken = createSecretToken;
// jwt.sign is a function provided by the jsonwebtoken library, which is used to generate a new JSON Web Token.
// this JWT could be sent to the client (e.g., in an HTTP response) and then included in subsequent requests from the client as an Authorization header
// for authentication. When verifying the JWT on the server-side, the jwt.verify function from the jsonwebtoken library can be used to ensure that the
// token is valid and not expired. The process.env.JWT_TOKEN secret is required to verify the signature of the JWT.
