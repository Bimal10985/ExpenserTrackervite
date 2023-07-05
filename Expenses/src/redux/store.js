import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
