import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useClickOutSide from "../../hooks/useClickOutside";
import SidebarMenu from "./SideBarMenu";

const HeaderSmallDevice = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  //   const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex h-11 relative justify-between lg:hidden">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src="/assets/img/logo_ngang.png"
              alt=""
              className="max-w-[151px]"
            />
          </Link>
        </div>
        <div className="flex">
          <div className="flex items-center flex-row gap-4">
            <i class="fa fa-search text-xl"></i>
            <div className="cart relative">
              <Link to="/cart">
                <i class="fa fa-shopping-cart text-xl hover:text-yellow-300"></i>
              </Link>
            </div>
            <button
              onClick={() => {
                setShow(!show);
              }}
              ref={nodeRef}
            >
              <i class="fa fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex flex-col gap-3 py-7 px-4 absolute h-[300px] bg-black top-11 right-0 bottom-0 z-10 transition-all ${
          show ? "" : "translate-x-full"
        }`}
      >
        <Link to={"/albums"} className="1">
          ĐĨA THAN
        </Link>
        <Link to={"/mam-dia"} className="1">
          MÂM ĐĨA
        </Link>
        <Link to={"/newbie"} className="1">
          CHO NGƯỜI MỚI
        </Link>
        <hr />
        <div className=" bg-black text-white flex flex-col gap-2">
          <div className="">
            <i class="fa fa-heart mr-3  "></i>
            Wishlist
          </div>
          <div className="">
            <i class="fa fa-truck mr-3 "></i>
            Theo dõi đơn hàng
          </div>
          <div className="">
            <Link to="/login">
              <i class="fa fa-user-circle mr-3"></i>
              Đăng nhập/ Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSmallDevice;
