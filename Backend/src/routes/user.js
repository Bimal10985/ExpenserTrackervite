import express from "express";
const router = express.Router();
import { signIn, signup, fetchUsers, editUser } from "../controllers/user.js";
router.post("/signup", signup);
router.post("/signin", signIn);
router.get("/users", fetchUsers);
router.put("/useredit/:id", editUser);

export default router;
