import express from "express";

import { Register, Login, Logout, getAllUsers, getCurrentUserProfile, updateUserById, deleteUserById, getUsersForAgent, getUserById } from "../controllers/userController.js";
import { authenticate, authorizeAdmin,authorizeAgent } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.get('/profile', authenticate, getCurrentUserProfile)

router.get('/', authenticate, authorizeAdmin, getAllUsers)
router.get('/userlist', authenticate, authorizeAgent, getUsersForAgent)

router.route('/:id')
  .get(authenticate, authorizeAdmin, getUserById)
  .put(authenticate,authorizeAdmin, updateUserById)
  .delete(authenticate ,authorizeAdmin, deleteUserById)

export default router;