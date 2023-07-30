import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../api/config";

export const allIncome = createAsyncThunk(
  "income/allIncome",
  async ({ rejectWithValue }) => {
    try {
      const response = await api.get(`/allincomes`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addIncome = createAsyncThunk(
  "income/addIncome",
  async (
    { name, description, amount, user, navigate, toast },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post(`/income`, {
        name,
        description,
        type,
        amount,
        user,
      });
      toast.success("New Income added successfully");
      navigate("/incomelist");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    income: {},
    incomes: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [allIncome.pending]: (state, action) => {
      state.loading = true;
    },
    [allIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.tours = action.payload;
    },
    [allIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [addIncome.pending]: (state, action) => {
      state.loading = true;
    },
    [addIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.tour = [action.payload];
    },
    [addIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default incomeSlice.reducer;
