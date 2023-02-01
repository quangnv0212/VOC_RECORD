import React from "react";
import { Link } from "react-router-dom";

const AuthenticationLayout = ({ children, heading = "" }) => {
  return (
    <div className="relative w-full min-h-screen p-10 bg-slate-400 isolate flex items-center justify-center">
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthenticationLayout;
