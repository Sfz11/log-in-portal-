import express from "express";
import { loginUser, signupUser } from "../Controller/Auth.controller.js";

const router = express.Router();

router.post("/auth/login", loginUser);
router.post("/auth/signup", signupUser);

export default router;
