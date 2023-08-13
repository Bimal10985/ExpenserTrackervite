import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/config";

export const allExpense = createAsyncThunk(
  "expense/allExpense",
  async (rejectWithValue) => {
    try {
      const response = await api.get(`/allexpenses/fetch`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async (
    { name, description, amount, user, navigate, toast },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post(`/expense`, {
        name,
        description,
        amount,
        user,
      });
      toast.success("New Expense added successfully");
      navigate("/expenseslist");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const deleteExpense = createAsyncThunk(
  "expense/deleteExpense",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/deleteExpense/${id}`);
      toast.success("Expense deleted successfully");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleExpense = createAsyncThunk(
  "expense/getSingleExpense",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/getexp/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const EditExpense = createAsyncThunk(
  "expense/EditExpense",
  async ({ id, name, description, amount, toast }, { rejectWithValue }) => {
    try {
      const response = await api.put(`updateExpense/${id}`, {
        name,
        description,
        amount,
      });
      toast.success("Expense edited successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: {},
    expensesArr: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [allExpense.pending]: (state, action) => {
      state.loading = true;
    },
    [allExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.expensesArr = action.payload;
    },
    [allExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    [addExpense.pending]: (state, action) => {
      state.loading = true;
    },
    [addExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.expenses = [action?.payload];
    },
    [addExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    [deleteExpense.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [deleteExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [deleteExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getSingleExpense.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [getSingleExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.expenses = action.payload;
      state.success = true;
    },
    [getSingleExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [EditExpense.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [EditExpense.fulfilled]: (state, action) => {
      state.loading = false;
      state.expenses = action.payload;
      state.success = true;
    },
    [EditExpense.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default expenseSlice.reducer;
