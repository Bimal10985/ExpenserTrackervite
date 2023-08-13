import express from "express";
import {
  deleteExpense,
  editExpense,
  expenseCreate,
  getAllExpenses,
  getExpenseByID,
  getIExpenseUser,
} from "../controllers/expense.js";
const router = express.Router();

router.post("/expense", expenseCreate);
router.get("/allexpenses/fetch", getAllExpenses);
router.get("/getexp/:id", getExpenseByID);
router.put("/updateExpense/:id", editExpense);
router.delete("/deleteExpense/:id", deleteExpense);
router.get("/userExpense/:userID", getIExpenseUser);


export default router;
