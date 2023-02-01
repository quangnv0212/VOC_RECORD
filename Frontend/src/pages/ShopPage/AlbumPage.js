import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import AlbumList from "../../components/Album/AlbumList";
import Dropdown from "../../components/Dropdown";
import BreadCum from "../BreadCum";

const AlbumPage = () => {
  const albums = useSelector((state) => state.album.albums);
  const [inputsearch, setInputsearch] = useState("");
  const [filter, setFilter] = useState("All");
  const handleInputSearch = () => {};
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Rock",
    },
    {
      id: 3,
      name: "Pop",
    },
    {
      id: 4,
      name: "Jazz",
    },
  ];

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     setInputsearch(inputsearch);
  //   }
  // };
  return (
    <Fragment>
      <BreadCum></BreadCum>
      <div className="banner-album min-h-[200px] bg-gray-500 flex justify-center items-center md:mx-32 ">
        <p className="font-extrabold text-white text-4xl">ĐĨA THAN</p>
      </div>
      <div className="flex items-center bg-slate-200 justify-between border px-4 mx-2 my-5 md:mx-32">
        <input
          type="text"
          className="bg-transparent w-full px-2 py-3"
          placeholder="Nhập tên album bạn cần tìm"
          onChange={(e) => setInputsearch(e.target.value.toLowerCase())}
          // onKeyPress={handleKeyPress}
        />
        <button>
          <i class="fa fa-search text-xl"></i>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg flex flex-row gap-5">
          {categories.map((x) => (
            <div
              key={x.id}
              onClick={() => setFilter(x.name)}
              className={`border rounded-lg px-2 border-black text-xl cursor-pointer hover:text-white hover:bg-black ${
                x.name == filter ? "text-white bg-black" : ""
              }`}
            >
              {x.name}
            </div>
          ))}
        </div>
      </div>
      <AlbumList filter={filter} inputSearch={inputsearch}></AlbumList>
    </Fragment>
  );
};

export default AlbumPage;
