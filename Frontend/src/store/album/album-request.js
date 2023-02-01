import axios from "../../api/axios";

export const requestAlbumList = () => {
  return axios.get("http://localhost:3100/api/v1/album");
};
export const requestAddNewAlbum = (data) => {
  return axios.post("http://localhost:3100/api/v1/album", { ...data });
};
export const requestUpdateAlbum = (data) => {
  return axios.put(`http://localhost:3100/api/v1/album/${data.albumId}`, {
    ...data,
  });
};
