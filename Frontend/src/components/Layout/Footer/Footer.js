import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="bg-black md:flex md:items-center md:justify-center py-10 flex flex-row justify-center ">
      <div className="md:flex md:flex-row md:gap-5 footer text-white text-sm ">
        <div className="md:flex md:justify-center md: items-center px-4">
          <div>
            <div className="logo">
              <img
                src="assets/img/logo_ngang.png"
                alt=""
                className="w-[250px]"
              />
            </div>
            <p className="my-3 text-center">TRẢI NGHIỆM ÂM NHẠC TỐT HƠN</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <h1 className="py-2 text-center text-sm">THÔNG TIN</h1>
          <hr />
          <ul className="md:grid md:grid-cols-2 py-2 text-center">
            <li>About us</li>
            <li>Newsletter</li>
            <li>Mixtape</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h1 className="py-2 text-center text-sm">TRỢ GIÚP</h1>
          <hr />
          <ul className="md:grid md:grid-cols-2 py-2 text-center">
            <li>Giao hàng</li>
            <li>Thanh toán</li>
            <li>Liên hệ</li>
            <li>HD Mua hàng</li>
            <li>Bảo mật</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
