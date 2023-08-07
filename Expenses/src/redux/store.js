import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
import IncomeReducer from "./slice/incomeSlice";
import ExpenseReducer from "./slice/expenseSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    income: IncomeReducer,
    expense: ExpenseReducer,
  },
});
