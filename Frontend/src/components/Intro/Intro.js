import React from "react";
import "./Intro.scss";
const Intro = () => {
  return (
    <div className="intro">
      <div className="p-14">
        <h1 className="text-white text-center text-4xl">VÌ SAO CHỌN</h1>
        <div className="flex justify-center">
          <img
            src="/assets/img/logo_ngang.png"
            alt=""
            srcset=""
            className="py-4"
          />
        </div>
      </div>
      <div className="flex justify-center my-5">
        <p className="text-white text-lg leading-8 text-center">
          VÌ HAI THỨ: ÂM NHẠC HAY VÀ CHẤT LƯỢNG
          <br /> PHỤC VỤ TỐT NHẤT.
          <br /> VỌC RECORDS Ở ĐÂY LÀ ĐỂ:
        </p>
      </div>
      <div className="flex">
        <div className="w-1/2 p-8 text-white flex justify-end">
          <ul>
            <li className="my-2">Chữa chán cho đôi tai tinh tường của bạn</li>
            <li className="my-2">Hàn gắn tâm hồn vụn vỡ của bạn</li>
          </ul>
        </div>
        <div className="w-1/2 p-8 text-white">
          <ul>
            <li className="my-2">Chữa chán cho đôi tai tinh của bạn</li>
            <li className="my-2">Hàn gắn tâm hồn vụn vỡ của bạn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
