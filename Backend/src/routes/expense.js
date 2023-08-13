import express from "express";
import {
  deleteExpense,
  editExpense,
  expenseCreate,
  getAllExpenses,
  getExpenseByID,
} from "../controllers/expense.js";
const router = express.Router();

router.post("/expense", expenseCreate);
router.get("/allexpenses/fetch", getAllExpenses);
router.get("/getexp/:id", getExpenseByID);
router.put("/updateExpense/:id", editExpense);
router.delete("/deleteExpense/:id", deleteExpense);

export default router;
