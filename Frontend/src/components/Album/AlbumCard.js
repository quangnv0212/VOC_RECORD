import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../store/cart/cartSlice";
import { formatMoney } from "../../utils";
import Button from "../Button/Button";
const AlbumCard = ({ album }) => {
  let count = Number(album.countInStock);
  const dispatch = useDispatch();
  const handleLike = () => {
    console.log("like");
  };
  const handleAddToCart = (album) => {
    dispatch(addCart(album));
  };
  return (
    <div className="text-center flex flex-col group/item">
      <Link to={`${album._id}`}>
        <div className=" relative">
          <img
            src={album.image}
            alt=""
            className="w-full lg:h-[350px] object-cover mb-5"
          />
          <div className="flex absolute top-1/2 left-1/2 center flex-row gap-5 group/edit invisible group-hover/item:visible">
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleLike();
              }}
              className="bg-red-400 text-xs group-hover/item:animate-bounce    "
            >
              Tim
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart(album);
              }}
              className="bg-yellow-200 text-xs group-hover/item:animate-bounce "
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
      <div className="">
        <Link className="text-xl font-bold uppercase" to={`${album._id}`}>
          {album.name}
        </Link>
        <p className="uppercase text-red-600 font-bold">{album.artist}</p>
        <p className="font-bold">{`${formatMoney(album.price)}đ`}</p>
      </div>
      <div className="flex justify-between">
        {count == 0 ? (
          <p className="bg-red-100 p-1 font-bold text-red-600 text-xs">
            HẾT HÀNG
          </p>
        ) : (
          <p className="bg-green-200 p-1 font-bold text-green-600 text-xs">
            CÒN HÀNG
          </p>
        )}
        <p className="font-bold uppercase">{album.vinylStatus}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
