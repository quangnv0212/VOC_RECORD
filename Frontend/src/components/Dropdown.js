import React from "react";
import useClickOutSide from "../hooks/useClickOutside";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] z-50" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Chọn thể loại
      </div>
      {show && (
        <div
          className={`border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white ${
            show ? "" : "opacity-0 invisible"
          }`}
        >
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
