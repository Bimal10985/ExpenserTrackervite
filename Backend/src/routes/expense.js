import express from "express";
import { deleteExpense, editExpense, expenseCreate, getAllExpenses, getExpenseByID } from "../controllers/expense.js";
const router = express.Router();


router.post("/expense", expenseCreate);
router.get("/allexpenses", getAllExpenses);
router.get("/:id", getExpenseByID);
router.put("/update/:id", editExpense);
router.delete("/delete/:id", deleteExpense);

export default router;
