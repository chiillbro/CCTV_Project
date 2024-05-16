import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

import { Register, Login, Logout, getAllUsers,getCurrentUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", authenticate, Logout);
router.get("/profile",authenticate, getCurrentUserProfile)

export default router;
