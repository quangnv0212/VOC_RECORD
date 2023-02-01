import { call, put } from "redux-saga/effects";
import {
  requestAddNewAlbum,
  requestAlbumList,
  requestUpdateAlbum,
} from "./album-request";
import { success, updateAlbumId } from "./albumSlice";
import { toast } from "react-toastify";
function* handleRequest({ payload }) {
  try {
    const response = yield call(requestAlbumList);
    const albumList = response.data.data.data;
    yield put(success(albumList));
  } catch (error) {}
}
function* handleAddNew({ payload }) {
  try {
    const response = yield call(requestAddNewAlbum, payload);
    const id = response.data.data.data.id;
    yield put(updateAlbumId(id));
    if (response.status == 200) {
      toast.success("Bạn đã tạo album mới thành công");
    }
    yield 1;
  } catch (error) {
    console.log(error);
  }
}
function* handleUpdate({ payload }) {
  try {
    console.log("run handleUpdate");
    const response = yield call(requestUpdateAlbum, payload);
    if (response.status == 200) {
      toast.success("Bạn đã cập nhật album thành công");
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleRequest, handleAddNew, handleUpdate };
