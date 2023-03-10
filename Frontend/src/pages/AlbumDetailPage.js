import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";
import { formatMoney } from "../utils";
import BreadCum from "./BreadCum";
import { useDispatch } from "react-redux";
import { addCart } from "../store/cart/cartSlice";

const AlbumDetailPage = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const [album, setAlbum] = useState([]);
  const count = album?.countInStock;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAlbumDetail = async (albumId) => {
      const response = await axios.get(
        `http://localhost:3100/api/v1/album/${albumId}`
      );
      setAlbum(response.data.data.data);
    };
    fetchAlbumDetail(albumId);
  }, [albumId]);
  console.log(album);
  return (
    <>
      <BreadCum></BreadCum>
      <section className="pb-10 pt-5 px-4 md:p-6 lg:px-[100px]">
        <div className="sm:flex md:flex md:flex-row md:gap-6 sm:flex-col">
          <div className="left md:w-1/2 flex items-center justify-center">
            <div className="flex flex-col items-start justify-center">
              <div>
                <div className="">
                  <img src={album.image} alt="" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="right flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex">
                <Helmet>
                  <title>{album.name}</title>
                </Helmet>
                <p className="text-3xl font-bold">{album.name}</p>
                <p className="text-2xl mx-2 text-slate-400">({album.year})</p>
              </div>
              <p>{album.artist}</p>
              <p>{album.format}</p>
              <div className="flex flex-row gap-3">
                <p className="font-bold">{`${formatMoney(album.price)}??`} </p>
                <div>
                  {count != 0 ? (
                    <p className="bg-green-200 p-1 font-bold text-green-600 text-xs">
                      C??N H??NG
                    </p>
                  ) : (
                    <p className="bg-red-200 p-1 font-bold text-red-600 text-xs">
                      H??T H??NG
                    </p>
                  )}
                </div>
              </div>
              {count != 0 ? (
                <p>
                  Ng??y d??? ki???n c?? ????a:
                  <br />- D??? ki???n 2-4 tu???n t??nh t??? ng??y thanh to??n ho???c ng??y
                  ph??t h??nh.
                </p>
              ) : (
                <p>
                  - ????a hi???n ??ang h???t stock ??? h??ng, b???n c?? th??? li??n h??? tr???c ti???p
                  V???c ????? ?????t ri??ng nh??.
                </p>
              )}

              <div className="button flex flex-row gap-4">
                <Button
                  onClick={() => {
                    dispatch(addCart(album));
                  }}
                  className="bg-yellow-200"
                >
                  ADD TO CART
                </Button>
                <Button
                  onClick={() => {
                    navigate(`/albums/update/${albumId}`);
                  }}
                  className="bg-yellow-200"
                >
                  Edit
                </Button>
              </div>
            </div>

            <div className="info">
              <h1>TH??NG TIN ????A</h1>
              <hr />
              <table className="w-full">
                <tbody className="w-full">
                  <tr className="w-full">
                    <th className="text-start w-1/2">N??m Ph??t H??nh</th>
                    <th className="text-start w-1/2">{album.year}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Th??? Lo???i</th>
                    <th className="text-start w-1/2">{album.genre}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">M??u ????a</th>
                    <th className="text-start w-1/2">{album.color}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">H??ng Ph??t H??nh</th>
                    <th className="text-start w-1/2">{album.record}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">T??nh Tr???ng ????a</th>
                    <th className="text-start w-1/2">{album.vinylStatus}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">T??nh Tr???ng V???</th>
                    <th className="text-start w-1/2"> {album.caseStatus}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Qu???c gia</th>
                    <th className="text-start w-1/2"> {album.country}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-200 p-3 my-3">
              <p className="font-bold">L??U ?? KHI MUA H??NG</p>
              <ul className="my-2">
                <li>
                  Vui l??ng thanh to??n tr?????c 100% gi?? tr??? ?????i v???i ????n h??ng c??{" "}
                  <strong>s???n ph???m order</strong> (bao g???m c??? ph?? ship).
                </li>
                <li>
                  Thanh to??n COD ch??? ??p d???ng v???i ????a <strong>c?? s???n.</strong>
                </li>
              </ul>
              <p className="font-bold">QUY ?????NH ?????I TR???</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDetailPage;
