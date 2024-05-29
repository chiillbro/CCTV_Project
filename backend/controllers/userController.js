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
  const { email, username, employeeId,state, password, confirmPassword } = req.body;
  if (!email || !username || !employeeId || !password || !confirmPassword || !state) {
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
    state,
    password: hashedPassword,
  });

  try {
    await newUser.save();
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
      generateToken(res,existingUser._id);

      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User not found, Please register" });
  }
});

export const Logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully!" });
});

export const getCurrentUserProfile = asyncHandler(async (req,res)=>{
  const user = await User.findById(req.user._id)
  if(user){
    res.json({
      _id: user._id,
      username: user.username,
      employeeId: user.employeeId,
      email: user.email,
      isAdmin: user.isAdmin
    })
  }else{
    res.status(404)
    throw new Error("User not found")
  }
})

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export const deleteUserById = asyncHandler(async(req,res)=>{
  const user = await User.findById(req.params.id)
  
  if(user){
    if(user.isAdmin){
      res.status(400)
      throw new Error("Cannot delete admin user")
    }
    await User.deleteOne({_id:user._id})
    res.json({messge:"User deleted successfully"})
  }else{
    res.status(404)
    throw new Error("User not found")
  }
})

export const getUserById = asyncHandler(async(req,res)=>{
  const user = await User.findById(req.params._id);
  if(user){
    res.json(user)
  }else{
    res.status(404)
    throw new Error("User not found")
  }
})

export const updateUserById = asyncHandler(async(req,res)=>{
  const user = await User.findById(req.params.id)
  if(user){
    user.username = req.body.username || user.username
    user.email= req.body.email || user.email
    user.employeeId = req.body.employeeId || user.employeeId
    user.state = req.params.state || user.state
    user.password = req.body.password || user.password

    const updatedUser = await user.save(user)
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  }else{
    res.status(404)
    throw new Error("User not found")
  }
})