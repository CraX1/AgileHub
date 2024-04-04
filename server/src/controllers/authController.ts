import { Users } from "../models/authModel";
import { createSecretToken } from "../utils/SecretToken";
import bcrypt from "bcrypt";
import { isValidEmail, isValidPassword } from "../utils/inputValidation";

export const createUser = async (req: any, res: any) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.json({ error: "All fields are required" });
    }
    if (!isValidEmail(email) && !isValidPassword(password)) {
      return res
        .status(400)
        .json({ error: "Invalid email and password format. Please re-enter" });
    }
    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ error: "Invalid email format. Please re-enter" });
    }
    if (!isValidPassword(password)) {
      return res
        .status(400)
        .json({ error: "Invalid password format. Please re-enter" });
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const newUser = await Users.create(req.body);
    const token = createSecretToken(newUser._id);

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
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `Reason: ${err}`,
    });
  }
};

export const loginUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User does not exist with this email" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(401)
        .json({ message: "Incorrect password, please re-enter" });
    }
    const token = createSecretToken(user._id);
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
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `Reason: ${err}`,
    });
  }
};

//NOTE 1:
// Here we set the JWT token as an HTTP-Only cookie in the response from the server
// The client doesn't need to store or handle the token explicitly. The browser will automatically include the cookie in subsequent requests to the same domain.

//NOTE 2:
// When the httpOnly flag is set on a cookie, it instructs the web browser that the cookie should only be accessible by the server and not by client-side scripts
// running in the browser. This means that even if a cross-site scripting (XSS) vulnerability exists on the website, and a malicious script is injected and
// executed in the user's browser, the script will not be able to access or manipulate the cookie marked as httpOnly.
// The withCredentials option is set to true to allow the cookie to be sent with cross-origin requests
