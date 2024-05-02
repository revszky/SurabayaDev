import React from "react";

const BgRight = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center relative gap-2">
        <div className="absolute top-16 -right-8 md:-right-5 w-52 h-52 border-t border-r border-green-500"></div>

        <div className="absolute top-0 md:top-10 lg:-top-16 -left-5 h-32 w-16 md:w-32 lg:w-52 lg:h-52 border-b border-l border-green-500"></div>
      </div>
    </div>
  );
};

export default BgRight;
