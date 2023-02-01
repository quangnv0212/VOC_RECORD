import {
  requestAuthSignin,
  requestAuthRegister,
  requestAuthFetchMe,
  requestAuthUpdatePassword,
  requestAuthUpdateAccount,
  requestAuthResetPassword,
  requestAuthForgetPassword,
} from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken, singout } from "../../utils/auth";

import { call, put } from "redux-saga/effects";
import { authUpdateUser, authUpdateUserToken } from "./auth-slice";
export default function* handleAuthRegister({ payload }) {
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Bạn tạo tài khoản thành công rùi đó!!");
    }
    const token = response.data.token;
    yield call(handleAuthFetchUser, { payload: token });
  } catch (error) {
    console.log(error.message);
  }
}

function* handleAuthSignin({ payload }) {
  try {
    const { data } = yield call(requestAuthSignin, payload);

    if (data.token) {
      saveToken(data.token);
      yield call(handleAuthFetchUser, { payload: data.token });
    }
  } catch (error) {
    toast.error("Bạn đã nhập sai email hoặc mật khẩu! Vui lòng nhập lại");
  }
}

function* handleAuthFetchUser({ payload }) {
  try {
    console.log(payload);
    const response = yield call(requestAuthFetchMe, payload);
    const userObject = response.data.data.data;
    console.log(userObject);
    yield put(
      authUpdateUser({
        user: userObject.name,
        email: userObject.email,
        accessToken: payload,
      })
    );
  } catch (error) {}
}
function* handleAuthToken({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    const userObject = response.data.data.data;
    yield put(
      authUpdateUserToken({
        user: userObject.name,
        email: userObject.email,
        photo: userObject.photo,
        accessToken: payload,
      })
    );
  } catch (error) {
    console.log("Token không hợp lệ");
    singout();
  }
}
function* handleAuthSignout({ payload }) {
  yield put(
    authUpdateUserToken({
      user: null,
    })
  );
  singout();
}
function* handleAuthUpdatePassword({ payload }) {
  try {
    const response = yield call(
      requestAuthUpdatePassword,
      payload.token,
      payload
    );
    if (response.status === 200) {
      toast.success("Bạn đã đổi mật khẩu thành công!!");
    }
    const newToken = response.data.token;
    saveToken(newToken);
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthUpdateAccount({ payload }) {
  console.log("run handleAuthUpdateAccount");
  console.log(payload);
  try {
    const response = yield call(
      requestAuthUpdateAccount,
      payload.token,
      payload
    );
    yield 1;
    if (response.status === 200) {
      toast.success("Bạn đã cập nhật thông tin thành công!!");
    }
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthResetPassword({ payload }) {
  console.log("run handleAuthResetPassword");
  try {
    const response = yield call(
      requestAuthResetPassword,
      payload.resetToken,
      payload
    );
    yield 1;
    if (response.status === 200) {
      toast.success("Bạn đã đổi mật khẩu thành công!!");
    }
    saveToken(response.data.token);
  } catch (error) {
    console.log(error);
  }
}
function* handleAuthForgetPassword({ payload }) {
  try {
    const response = yield call(requestAuthForgetPassword, payload.email);
    console.log(response);
    if (response.status === 200) {
      toast.success("Bạn hãy kiểm tra hòm thư của mình nhé!!");
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  handleAuthSignin,
  handleAuthToken,
  handleAuthSignout,
  handleAuthUpdatePassword,
  handleAuthUpdateAccount,
  handleAuthResetPassword,
  handleAuthForgetPassword,
};
