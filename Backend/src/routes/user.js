import express from "express";
const router=express.Router();
import { signIn,signup,fetchUsers } from "../controllers/user.js";
router.post("/signup",signup);
router.post("/signin",signIn);
router.get("/users",fetchUsers);

export default router;