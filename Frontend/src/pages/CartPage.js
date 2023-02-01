import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils";
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const cartList = cart.cartItem;

  const total_price = cart.cart.cartItems.reduce((total, currentValue) => {
    return total + currentValue.quantity * currentValue.price;
  }, 0);
  const total_cartItem = cart.cart.cartItems.reduce((total, currentValue) => {
    return total + currentValue.quantity;
  }, 0);
  return (
    <div className="container mx-auto lg:mt-10">
      <div className="lg:flex shadow-md my-10">
        <div className="lg:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">GIỎ HÀNG</h1>
            <h2 className="font-semibold text-2xl">
              {total_cartItem} SẢN PHẨM
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Chi tiết sản phẩm
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Số lượng
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Giá
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Tổng tiền
            </h3>
          </div>
          {cart.cart.cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id}></CartItem>
          ))}
          <Link
            to="/albums"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp tục mua hàng
          </Link>
        </div>
        <div id="summary" className="lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold uppercase text-2xl border-b pb-8">
            Đơn hàng
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Sản phẩm: {total_cartItem}
            </span>
            <span className="font-semibold text-sm">
              {formatMoney(total_price)}
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Vận chuyển
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Vận chuyển thông thường - 0đ</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              MÃ giảm giá
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Áp dụng
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Tổng giá trị đơn hàng</span>
              <span>{formatMoney(total_price) + "đ"}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Đi tới trang thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
