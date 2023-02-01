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
                <p className="font-bold">{`${formatMoney(album.price)}đ`} </p>
                <div>
                  {count != 0 ? (
                    <p className="bg-green-200 p-1 font-bold text-green-600 text-xs">
                      CÒN HÀNG
                    </p>
                  ) : (
                    <p className="bg-red-200 p-1 font-bold text-red-600 text-xs">
                      HÊT HÀNG
                    </p>
                  )}
                </div>
              </div>
              {count != 0 ? (
                <p>
                  Ngày dự kiến có đĩa:
                  <br />- Dự kiến 2-4 tuần tính từ ngày thanh toán hoặc ngày
                  phát hành.
                </p>
              ) : (
                <p>
                  - Đĩa hiện đang hết stock ở hãng, bạn có thể liên hệ trực tiếp
                  Vọc để đặt riêng nhé.
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
              <h1>THÔNG TIN ĐĨA</h1>
              <hr />
              <table className="w-full">
                <tbody className="w-full">
                  <tr className="w-full">
                    <th className="text-start w-1/2">Năm Phát Hành</th>
                    <th className="text-start w-1/2">{album.year}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Thể Loại</th>
                    <th className="text-start w-1/2">{album.genre}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Màu Đĩa</th>
                    <th className="text-start w-1/2">{album.color}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Hãng Phát Hành</th>
                    <th className="text-start w-1/2">{album.record}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Tình Trạng Đĩa</th>
                    <th className="text-start w-1/2">{album.vinylStatus}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Tình Trạng Vỏ</th>
                    <th className="text-start w-1/2"> {album.caseStatus}</th>
                  </tr>
                  <tr className="w-full">
                    <th className="text-start w-1/2">Quốc gia</th>
                    <th className="text-start w-1/2"> {album.country}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-200 p-3 my-3">
              <p className="font-bold">LƯU Ý KHI MUA HÀNG</p>
              <ul className="my-2">
                <li>
                  Vui lòng thanh toán trước 100% giá trị đối với đơn hàng có{" "}
                  <strong>sản phẩm order</strong> (bao gồm cả phí ship).
                </li>
                <li>
                  Thanh toán COD chỉ áp dụng với đĩa <strong>có sẵn.</strong>
                </li>
              </ul>
              <p className="font-bold">QUY ĐỊNH ĐỔI TRẢ</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlbumDetailPage;
