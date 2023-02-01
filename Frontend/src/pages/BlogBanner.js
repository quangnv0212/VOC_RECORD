import React from "react";
import Button from "../components/Button/Button";

const BlogBanner = () => {
  return (
    <div className="w-full bg-slate-800 min-h-[250px] flex items-center justify-center text-white ">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-center text-6xl">VOC’S BLOG</h1>
          <p className="text-center">
            CÂU CHUYỆN VỀ ĐĨA THAN, VIẾT BỞI NHỮNG NGƯỜI YÊU ĐĨA THAN
          </p>
        </div>
        <div className="categories flex flex-row gap-2">
          <p>Danh mục</p>
          <Button className="bg-white">KIẾN THỨC</Button>
          <Button className="bg-white">KIẾN THỨC</Button>
          <Button className="bg-white">KIẾN THỨC</Button>
          <Button className="bg-white">KIẾN THỨC</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
