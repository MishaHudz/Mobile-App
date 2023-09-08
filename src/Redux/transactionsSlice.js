import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const transactionReducer = transactionsSlice.reducer;
