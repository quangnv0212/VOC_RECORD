import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: "",
  albums: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    addnew: (state, { payload }) => {
      return { ...state };
    },
    update: (state, { payload }) => {
      return { ...state, ...payload };
    },

    updateAlbumId: (state, { payload }) => {
      console.log(payload);
      return { ...state, id: payload };
    },

    request: (state, { payload }) => {
      return { ...state, loading: true };
    },
    success: (state, { payload }) => {
      return { ...state, loading: false, albums: payload };
    },
    fail: (state, { payload }) => {
      return { ...state, error: payload, loading: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { request, success, fail, addnew, updateAlbumId, update } =
  albumSlice.actions;

export default albumSlice.reducer;
