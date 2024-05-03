import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const Register = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, username, employeeId, password, confirmPassword } = req.body;

  if (!email || !username || !employeeId || !password || !confirmPassword) {
    throw new Error("Please fill all the fields");
  }

  const existingUser = await User.findOne({ email });
  //   console.log(existingUser);

  if (existingUser) {
    return res.status(400).json({ message: "User already registered" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    email,
    username,
    employeeId,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    // generateToken(newUser._id, res);

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to register user" });
  }
});

export const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      generateToken(existingUser._id, res);

      res.status(200).json({ existingUser });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found, Please register" });
  }
});

export const Logout = asyncHandler(async (rea, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully!" });
});
