import { createSlice } from "@reduxjs/toolkit";

const authSilce = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    login: {
      user_data: JSON.parse(localStorage.getItem("user_data")) || {},
    },
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.login.user_data = {};
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.login.user_data = action.payload;
    },
    loginError: (state) => {
      state.loading = false;
      state.login.user_data = {};
    },
    logout: (state) => {
      state.loading = false;
      state.login.user_data = {};
    },
  },
});

export const { loginStart, loginSuccess, loginError, logout } =
  authSilce.actions;

export default authSilce.reducer;
