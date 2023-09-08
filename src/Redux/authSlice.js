import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    id: null,
  },
  sid: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
