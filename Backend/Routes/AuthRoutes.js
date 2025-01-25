import express from "express";
import { signupValidation, loginValidation } from "../Middleware/AuthValidation.js";
import { signup, login } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);

export default router;

