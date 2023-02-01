import { takeLatest } from "redux-saga/effects";
import {
  handleAddNew,
  handleRequest,
  handleSucess,
  handleUpdate,
} from "./album-handler";
import { addnew, request, success, update } from "./albumSlice";

export default function* albumSaga() {
  yield takeLatest(request.type, handleRequest);
  yield takeLatest(addnew.type, handleAddNew);
  yield takeLatest(update.type, handleUpdate);
}
