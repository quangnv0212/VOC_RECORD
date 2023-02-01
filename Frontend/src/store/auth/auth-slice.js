import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authSignin: (state, { payload }) => {},
    authSignup: (state, { payload }) => {},
    authUpdateUser: (state, { payload }) => {
      return {
        ...payload,
      };
    },
    authToken: (state, { payload }) => {},
    authUpdateUserToken: (state, { payload }) => {
      return {
        ...payload,
      };
    },
    authLogout: (state, { payload }) => {},
    authUpdatePassword: (state, { payload }) => {},
    authUpdateAccount: (state, { payload }) => {},
    authResetPassword: (state, { payload }) => {},
    authForgetPassword: (state, { payload }) => {},
  },
});

export const {
  authSignin,
  authSignup,
  authUpdateUser,
  authToken,
  authUpdateUserToken,
  authLogout,
  authUpdatePassword,
  authUpdateAccount,
  authResetPassword,
  authForgetPassword,
} = authSlice.actions;
export default authSlice.reducer;
