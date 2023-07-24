import express from "express";
const router = express.Router();
import {
  incomeCreate,
  getAllIncomes,
  getIncomeByID,
  editIncome,
  deleteIncome,
} from "../controllers/income.js";
router.post("/income", incomeCreate);
router.get("/allincomes", getAllIncomes);
router.get("/:id", getIncomeByID);
router.put("/update/:id", editIncome);
router.delete("/delete/:id", deleteIncome);

export default router;
