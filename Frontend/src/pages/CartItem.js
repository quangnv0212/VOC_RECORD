import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button/Button";
import {
  addCart,
  decreaseCart,
  deleteCart,
  removeCart,
} from "../store/cart/cartSlice";
import { formatMoney } from "../utils";
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveCart = (cartItem) => {
    console.log("remove");
    dispatch(removeCart(cartItem));
  };
  const handleDecreaseItemCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseItemCart = (cartItem) => {
    dispatch(addCart(cartItem));
    console.log(cartItem);
  };
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={cartItem.image} alt />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{cartItem.name}</span>
          <span className="text-red-500 text-xs">{cartItem.artist}</span>
          <Button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={() => handleRemoveCart(cartItem)}
          >
            Remove
          </Button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          onClick={() => handleDecreaseItemCart(cartItem)}
          viewBox="0 0 448 512"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <p className="mx-2 border text-center w-8">{cartItem.quantity}</p>
        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          onClick={() => handleIncreaseItemCart(cartItem)}
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {formatMoney(cartItem.price) + "đ"}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {formatMoney(cartItem.price * cartItem.quantity) + "đ"}
      </span>
    </div>
  );
};

export default CartItem;
