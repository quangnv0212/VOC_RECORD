import { takeLatest } from "redux-saga/effects";
import handleAuthRegister, {
  handleAuthForgetPassword,
  handleAuthResetPassword,
  handleAuthSignin,
  handleAuthSignout,
  handleAuthToken,
  handleAuthUpdateAccount,
  handleAuthUpdatePassword,
} from "./auth-handlers";
import {
  authForgetPassword,
  authLogout,
  authResetPassword,
  authSignin,
  authSignup,
  authToken,
  authUpdateAccount,
  authUpdatePassword,
} from "./auth-slice";
export default function* authSaga() {
  yield takeLatest(authSignin.type, handleAuthSignin);
  yield takeLatest(authToken.type, handleAuthToken);
  yield takeLatest(authLogout.type, handleAuthSignout);
  yield takeLatest(authSignup.type, handleAuthRegister);
  yield takeLatest(authUpdatePassword.type, handleAuthUpdatePassword);
  yield takeLatest(authUpdateAccount.type, handleAuthUpdateAccount);
  yield takeLatest(authResetPassword.type, handleAuthResetPassword);
  yield takeLatest(authForgetPassword.type, handleAuthForgetPassword);
}
