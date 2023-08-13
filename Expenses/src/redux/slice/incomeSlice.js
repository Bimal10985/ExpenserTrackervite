import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/config";

export const allIncome = createAsyncThunk(
  "income/allIncome",
  async (rejectWithValue) => {
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
        amount,
        user,
      });
      toast.success("New Income added successfully");
      navigate("/incomelist");
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export const deleteIncome = createAsyncThunk(
  "income/deleteIncome",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/delete/${id}`);
      toast.success("Income deleted successfully");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleIncome = createAsyncThunk(
  "income/getSingleIncome",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const EditIncome = createAsyncThunk(
  "income/EditIncome",
  async ({ id, name, description, amount, toast }, { rejectWithValue }) => {
    try {
      const response = await api.put(`update/${id}`, {
        name,
        description,
        amount,
      });
      toast.success("Income edited successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getIncomeByUser = createAsyncThunk(
  "income/getIncomeByUser",
  async (userID,{rejectWithValue}) => {
    try {
      const response = await api.get(`/userIncome/${userID}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const incomeSlice = createSlice({
  name: "income",
  initialState: {
    incomess: {},
    incomes: [],
    incomeUser:[],
    error: "",
    loading: false,
  },

  extraReducers: {
    [allIncome.pending]: (state, action) => {
      state.loading = true;
    },
    [allIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.incomes = action.payload;
    },
    [allIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getIncomeByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getIncomeByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.incomeUser = action.payload;
    },
    [getIncomeByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    [addIncome.pending]: (state, action) => {
      state.loading = true;
    },
    [addIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.incomess = [action?.payload];
    },
    [addIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
    [deleteIncome.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [deleteIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    [deleteIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getSingleIncome.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [getSingleIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.incomess = action.payload;
      state.success = true;
    },
    [getSingleIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [EditIncome.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
    [EditIncome.fulfilled]: (state, action) => {
      state.loading = false;
      state.incomess = action.payload;
      state.success = true;
    },
    [EditIncome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default incomeSlice.reducer;
