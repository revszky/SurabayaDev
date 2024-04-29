"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Menu from "./Menu";
import Logo from "./Logo";

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
      <input id="main-navigation" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="main-navigation">
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
          htmlFor="main-navigation"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={closeDrawer}
        ></label>

        <ul className="menu p-2 w-10/12 min-h-full flex bg-base-200 text-base-content">
          <li className="mb-4">
            <Logo />
          </li>
          <Menu />
        </ul>
      </div>
    </div>
  );
};

export default Slide;
