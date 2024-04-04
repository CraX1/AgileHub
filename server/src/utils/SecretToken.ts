import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

dotenv.config({ path: `${__dirname}/../../config.env` });

export const createSecretToken = (id: Types.ObjectId) => {
  const jwtToken = process.env.JWT_TOKEN;

  if (!jwtToken) {
    throw new Error("JWT_TOKEN environment variable is not defined");
  }

  return jwt.sign({ id }, jwtToken, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

// jwt.sign is a function provided by the jsonwebtoken library, which is used to generate a new JSON Web Token.
// this JWT could be sent to the client (e.g., in an HTTP response) and then included in subsequent requests from the client as an Authorization header
// for authentication. When verifying the JWT on the server-side, the jwt.verify function from the jsonwebtoken library can be used to ensure that the
// token is valid and not expired. The process.env.JWT_TOKEN secret is required to verify the signature of the JWT.
