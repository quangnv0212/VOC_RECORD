import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";
import Main from "./components/Layout/Main";
import AlbumDetailPage from "./pages/AlbumDetailPage";
import ProfilePage from "./pages/ProfilePage";
import AlbumPage from "./pages/ShopPage/AlbumPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { authToken } from "./store/auth/auth-slice";
import { getToken } from "./utils/auth";
import { useDispatch, useSelector } from "react-redux";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ResetPasswordChange from "./pages/ResetPasswordChange";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import AddAlbumPage from "./pages/AddAlbumPage";
import BlogPage from "./pages/BlogPage";
import UpdateAlbumPage from "./pages/UpdateAlbumPage";
import CartPage from "./pages/CartPage";

function App() {
  const currentUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = getToken();
  useEffect(() => {
    if (!token) {
      return;
    } else {
      dispatch(authToken(token));
    }
  }, [token, dispatch]);

  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Intro></Intro>
              </>
            }
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/albums" element={<AlbumPage></AlbumPage>}></Route>
          <Route
            path="/albums/addnew"
            element={<AddAlbumPage></AddAlbumPage>}
          ></Route>
          <Route
            path="/albums/update/:albumId"
            element={<UpdateAlbumPage></UpdateAlbumPage>}
          ></Route>

          <Route
            path="/albums/:albumId"
            element={<AlbumDetailPage></AlbumDetailPage>}
          ></Route>
          <Route path="/login" element={<SignInPage></SignInPage>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route
            path="/forgetPassword"
            element={<ForgetPasswordPage></ForgetPasswordPage>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route
            path="profile/changePassword"
            element={<ChangePasswordPage></ChangePasswordPage>}
          ></Route>
          <Route
            path="profile/resetPassword/:resetToken"
            element={<ResetPasswordChange></ResetPasswordChange>}
          ></Route>
          <Route path="blog" element={<BlogPage></BlogPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
