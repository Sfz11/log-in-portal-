import User from "../Models/User.model.js";
import jsonSetToken from "../Utils/jsonSetToken.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    if (!email || !password) {
      res.status(400).json({
        message: "Please enter email and password",
      });
    }

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      res.status(400).json({
        message: "User not found",
      });
    }

    const checkPassword = await bcrypt.compare(password, checkUser.password);

    if (!checkPassword) {
      res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jsonSetToken(checkUser._id, res);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const signupUser = async (req, res) => {
  try {
    const { username, email, password, phoneNumber } = req.body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
      res.status(400).json({
        message: "Please enter a valid phone number",
      });
    }

    if (!username || !email || !password || !phoneNumber) {
      res.status(400).json({
        message: "Please enter username, email, password and phone number",
      });
    }
    const hasshedPassword = await bcrypt.hash(password, 8);

    const user = await User.create({
      username,
      email,
      password: hasshedPassword,
      phoneNumber,
    });

    const token = jsonSetToken(user._id, res);

    res.status(200).json({
      message: "Signup successful",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
