import express from "express";
const router = express.Router();
import {
  incomeCreate,
  getAllIncomes,
  getIncomeByID,
  editIncome,
  deleteIncome,
  getIncomeUser,
} from "../controllers/income.js";
router.post("/income", incomeCreate);
router.get("/allincomes", getAllIncomes);
router.get("/:id", getIncomeByID);
router.put("/update/:id", editIncome);
router.delete("/delete/:id", deleteIncome);
router.get("/userIncome/:userID", getIncomeUser);

export default router;
