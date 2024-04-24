import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Slide from "./Slide";

const Navigation = () => {
  return (
    <header className="p-4 sticky top-0 left-0 right-0 z-10 bg-white bg-opacity-80">
      <div className="max-w-7xl relative mx-auto flex justify-center items-center">
        <div className="hidden md:block w-full">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/sbydev/sbydev.png" alt="Surabaya" />
            </Link>

            <div>
              <Menu />
            </div>
          </div>
        </div>

        <div className="block md:hidden w-full">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/sbydev/sbydev.png" alt="Surabaya" />
            </Link>

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
