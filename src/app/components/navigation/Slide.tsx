"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Menu from "./Menu";

const Slide = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [spinIcon, setSpinIcon] = useState(false);

  const clickMenuIcon = () => {
    setOpenMenu(!openMenu);
    setSpinIcon(!spinIcon);
  };

  const closeDrawer = () => {
    setOpenMenu(false);
    setSpinIcon(false);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer">
          <button
            onClick={clickMenuIcon}
            className={`transform ${
              spinIcon ? "rotate-180" : ""
            } transition duration-300`}
          >
            {openMenu ? <IconX /> : <IconMenu2 />}
          </button>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={closeDrawer}
        ></label>

        <ul className="menu p-4 w-56 min-h-full flex items-center justify-center bg-base-200 text-base-content">
          <Menu />
        </ul>
      </div>
    </div>
  );
};

export default Slide;
