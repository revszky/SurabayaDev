import React from "react";

const BgLeft = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center relative gap-2">
        <div className="absolute top-16 -right-5 w-6 md:w-16 lg:w-40 xl:w-52 h-52 border-t border-r border-green-500"></div>

        <div className="absolute -bottom-32 left-2 md:-left-5 w-40 h-40 border-b border-l border-green-500"></div>
      </div>
    </div>
  );
};

export default BgLeft;
