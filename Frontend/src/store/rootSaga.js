import { all, fork } from "redux-saga/effects";
import albumSaga from "./album/album-saga";
import authSaga from "./auth/auth-saga";

export default function* rootSaga() {
  yield all([fork(albumSaga)]);
  yield all([fork(authSaga)]);
}
