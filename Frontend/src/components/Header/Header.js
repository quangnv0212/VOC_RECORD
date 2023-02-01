import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useHover from "../../hooks/useHover";
import { authLogout, authToken } from "../../store/auth/auth-slice";
import SidebarMenu from "./SideBarMenu";
import HeaderSmallDevice from "./HeaderSmallDevice";
import { getToken } from "../../utils/auth";

function Header() {
  const NavBarList = [
    {
      name: "ĐĨA THAN",
      to: "/albums",
    },
    {
      name: "MÂM ĐĨA",
      to: "/mam-dia",
    },
    {
      name: "CHO NGƯỜI MỚI",
      to: "/newbie",
    },
    {
      name: "MIXTAPE",
      to: "/mixtape",
    },
    {
      name: "BLOG",
      to: "/blog",
    },
  ];
  const cart = useSelector((state) => state.cart);
  console.log(cart.cart.cartItems);
  const total_cartItem = cart.cart.cartItems.reduce((total, currentValue) => {
    return total + currentValue.quantity;
  }, 0);
  const currentUser = useSelector((state) => state.auth);
  const { hovered, nodeRef } = useHover();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <div className=" bg-black text-white z-20 px-16 lg:px-[100px]">
      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:justify-between w-full">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="leading-[5rem] text-4xl text-amber-300 font-bold text-shadow-xl shadow-yellow-400 flex justify-center items-center  "
          >
            <div className="flex justify-center items-center">
              <img
                src="/assets/img/logo_ngang.png"
                alt=""
                className="max-w-[200px] py-3"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-4 text-center">
          {NavBarList.map((item) => (
            <NavLink
              className="leading-[5rem] text-base font-semibold pb-1 hover:bg-slate-600 hover:text-yellow-300"
              to={item.to}
              key={item.name}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="bg-transparent w-48"
            placeholder="Nhập tên album bạn cần tìm"
          />
          <button>
            <i class="fa fa-search text-xl"></i>
          </button>
        </div>
        <div className="flex items-center flex-row gap-4">
          <div className="cart relative">
            <Link className="relative" to="/cart">
              <i class="fa fa-shopping-cart text-xl hover:text-yellow-300"></i>
              <p className="absolute -top-3 -right-2 rounded-full border bg-red-600 w-5 h-5 text-sm text-center">
                {total_cartItem}
              </p>
            </Link>
          </div>
          <div
            className="user cursor-pointer hover:text-yellow-300 relative"
            ref={nodeRef}
          >
            <i class="fa fa-user text-xl"></i>
            {hovered ? (
              <div className="absolute flex flex-col gap-3 right-0 bg-black p-2 w-[200px] text-white">
                <div className="hover:text-yellow-300 ">
                  <Link>
                    <i class="fa fa-heart mr-3"></i>
                    Wishlist
                  </Link>
                </div>
                <div className="hover:text-yellow-300">
                  <Link>
                    <i class="fa fa-truck mr-3 "></i>
                    Theo dõi đơn hàng
                  </Link>
                </div>
                {!currentUser.user ? (
                  <div className="hover:text-yellow-300">
                    <Link to="/login">
                      <i class="fa fa-user-circle mr-3"></i>
                      Đăng nhập/ Đăng ký
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="hover:text-yellow-300">
                      <Link to="/profile">
                        <i class="fa fa-user-circle mr-3"></i>
                        Thông tin cá nhân
                      </Link>
                    </div>
                    <div className="hover:text-yellow-300">
                      <button onClick={() => handleLogout()}>
                        <i class="fa fa-user-circle mr-3"></i>
                        Đăng xuất
                      </button>
                    </div>
                  </>
                )}
                <div className="hover:text-yellow-300">
                  <Link to={"/albums/addnew"}>
                    <i class="fa fa-truck mr-3 "></i>
                    Thêm sản phẩm
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
          {currentUser.user ? <p>Hello {currentUser.user}</p> : null}
        </div>
      </div>
      {/* small device header */}
      <HeaderSmallDevice></HeaderSmallDevice>
    </div>
  );
}

export default Header;
