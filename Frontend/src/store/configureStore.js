import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
import cartSlice from "./cart/cartSlice";
import authSlice from "./auth/auth-slice";
import albumSlice from "./album/albumSlice";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
  album: albumSlice,
});
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
