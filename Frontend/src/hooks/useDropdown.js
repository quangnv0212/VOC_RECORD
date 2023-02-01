import React from "react";
import useClickOutSide from "./useClickOutside";

const useDropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div className="relative" ref={nodeRef}>
      <div className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer">
        <span>Select your job</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
        onClick={() => setShow(!show)}
      >
        <div className="p-5">Teacher</div>
        <div className="p-5">Developer</div>
        <div className="p-5">Doctor</div>
        <div className="p-5">Developer</div>
      </div>
    </div>
  );
};

export default useDropdown;
