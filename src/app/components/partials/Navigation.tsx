"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Slide from "./Slide";
import Logo from "./Logo";

const Navigation = () => {
  const [closeSlide, setCloseSlide] = useState(false);
  const openSlide = () => {
    setCloseSlide(!closeSlide);
  };
  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-10 bg-white bg-opacity-80">
      <div className="max-w-7xl relative mx-auto flex justify-center items-center">
        <div className="hidden lg:block w-full">
          <div className="flex items-center justify-between">
            <Logo />

            <div>
              <Menu closeDrawer={() => false} />
            </div>
          </div>
        </div>

        <div className="block lg:hidden w-full">
          <div className="flex items-center justify-between">
            <Logo />

            <div>
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
