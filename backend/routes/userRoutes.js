import express from "express";

import { Register, Login, Logout, getAllUsers, getCurrentUserProfile, updateUserById, deleteUserById, getUserById } from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.get('/profile', authenticate, getCurrentUserProfile)

router.get('/', authenticate, authorizeAdmin, getAllUsers)


router.route('/:id')
  .get(authenticate, authorizeAdmin, getUserById)
  .put(authenticate,authorizeAdmin, updateUserById)
  .delete(authenticate ,authorizeAdmin, deleteUserById)


export default router;
