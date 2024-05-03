import React from "react";

const Bg = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center relative">
        <div className="absolute -top-10 right-0 w-10 h-48 border-r border-b border-green-500"></div>

        <div className="absolute top-0 right-2 w-10 h-96 border-r border-green-500"></div>

        <div className="absolute top-40 right-0 w-10 h-36 border-r border-t border-green-500"></div>
      </div>
    </div>
  );
};

export default Bg;
