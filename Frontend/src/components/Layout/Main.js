import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <Fragment>
      <div className="h-screen flex flex-col">
        <Header></Header>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </Fragment>
  );
};

export default Main;
