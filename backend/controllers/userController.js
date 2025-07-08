import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import { response } from "express";


//login user
const loginUser=async(req,res)=>{
    const{email,password}= req.body;
    console.log("Login attempt with email:", email); // Debug log
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User does not exsits"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token=createToken(user._id);
        res.json({success:true,token}) 

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
} 

//register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // 🔍 Basic input check
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // ❗ Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    // ❗ Validate email and password
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

    // 🔒 Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 📥 Save user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    console.log("✅ User saved to DB:", savedUser); // Debug log

    // 🔑 Create token and respond
    const token = createToken(savedUser._id);
    res.status(201).json({ success: true, message: "User registered successfully", token });

  } catch (error) {
    console.error("❌ Error during user registration:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

export {loginUser,registerUser}