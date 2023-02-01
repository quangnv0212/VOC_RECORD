import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import "./Banner.scss";

const Banner = () => {
  return (
    <Fragment>
      <div className="">
        <div className="flex">
          <div className="dia-moi w-1/2 flex flex-col gap-3 relative">
            <h1 className="text-end mx-4 mt-10">Đĩa mới</h1>
            <div className="flex justify-end">
              <text className=" mx-4">
                Đĩa than nguyên seal mới toanh của bạn và chỉ riêng bạn
              </text>
            </div>
            <div className="flex justify-end">
              <div className="mx-4">
                <Button>🎵 ĐĨA MỚI CÓ SẴN</Button>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mx-4">
                <Button className="bg-yellow-200">XEM TOÀN BỘ KHO ĐĨA</Button>
              </div>
            </div>
            <div className="flex justify-end mt-7">
              <img
                src="https://vocrecords.vn/wp-content/uploads/2022/07/Photo-New-disc.png"
                alt=""
                srcset=""
                className="w-[276px] h-[226px]"
              />
            </div>
          </div>
          <div className="dia-moi w-1/2 flex flex-col gap-3 bg-yellow-100 relative">
            <h1 className="mx-4 mt-10"> ĐĨA VINTAGE</h1>
            <div>
              <p className="mx-4">
                Đĩa than nguyên seal mới toanh của bạn và chỉ riêng bạn
              </p>
            </div>
            <div className="mx-4">
              <Button> 🇻🇳 ĐĨA THAN VIỆT NAM</Button>
            </div>
            <div className="mx-4">
              <Button className="bg-red-500">💿 ĐĨA VINTAGE CÓ SẴN</Button>
            </div>
            <div className="mt-7">
              <img
                src="https://vocrecords.vn/wp-content/uploads/2022/07/Photo-Vintage-disc.png"
                alt=""
                className="w-[276px] h-[226px]"
              />
            </div>
          </div>
        </div>
        <div className="md:flex sm:flex sm:flex-row">
          <div className="md:w-1/2 sm:w-full">
            <div className=" flex flex-col gap-3 bg-purple-50 relative">
              <h1 className="text-end mx-4 mt-10">TẠO MIXTAPE</h1>
              <div className="flex justify-end">
                <text className=" mx-4">
                  Biến âm thanh yêu thích của bạn trở thành vĩnh cửu trên băng
                  cát-xét
                </text>
              </div>
              <div className="flex justify-end h-[100px]">
                <div className="mx-4">
                  <Button className="bg-white z-100">KHÁM PHÁ MIXTAPE</Button>
                </div>
              </div>
              <img
                src="https://vocrecords.vn/wp-content/uploads/2022/07/Mask-group.png"
                alt=""
                className="w-[159px] h-[102px] absolute left-4 bottom-0 z-10"
              />
            </div>
          </div>
          <div className="relative md:w-1/4 sm:w-full">
            <div className=" flex flex-col gap-3">
              <h1 className="mx-4 mt-10">MÂM ĐĨA</h1>
              <div className="">
                <text className=" mx-4">Khám phá ngay</text>
              </div>
              <div className="flex justify-end h-[100px]"></div>
            </div>
            <img
              src="https://vocrecords.vn/wp-content/uploads/2022/07/Img-1-1.png"
              alt=""
              className="w-[210px] h-[130px] absolute right-0 bottom-0"
            />
          </div>
          <div className="relative md:w-1/4 sm:w-full bg-pink-100">
            <div className=" flex flex-col gap-3">
              <h1 className="mx-4 mt-10">PHỤ KIỆN</h1>
              <div className="">
                <text className=" mx-4">Khám phá ngay</text>
              </div>
              <div className="flex justify-end h-[100px]"></div>
            </div>
            <img
              src="https://vocrecords.vn/wp-content/uploads/2022/07/Img-3.png"
              alt=""
              className="w-[210px] h-[130px] absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>
      <div className="container"></div>
    </Fragment>
  );
};

export default Banner;
