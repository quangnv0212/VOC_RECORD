import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fail, request } from "../../store/album/albumSlice";
import AlbumCard from "./AlbumCard";

const AlbumList = ({ filter, inputSearch }) => {
  const dispatch = useDispatch();
  let albumList = useSelector((state) => state.album.albums);
  if (filter === "All") {
  } else {
    albumList = albumList.filter((album) => album.genre === filter);
  }
  if (inputSearch) {
    console.log(inputSearch);
    albumList = albumList.filter((album) =>
      album.name.toLowerCase().includes(inputSearch)
    );
  }

  useEffect(() => {
    try {
      dispatch(request());
    } catch (error) {
      dispatch(fail(error.message));
    }
  }, []);
  return (
    <section className="md:px-32 px-7 z-0">
      <div className="md:flex md:justify-between">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-3 py-5 w-full">
          {albumList.map((album) => (
            <AlbumCard key={album._id} album={album}></AlbumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumList;
