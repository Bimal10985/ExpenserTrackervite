import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
import IncomeReducer from "./slice/incomeSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    income: IncomeReducer,
  },
});
