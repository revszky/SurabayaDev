import Link from "next/link";
import React from "react";

interface CloseMenuProps {
  closeDrawer: () => void;
}

const menus = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Events",
    href: "/events",
  },
];

const Menu = ({ closeDrawer }: CloseMenuProps) => {
  const closeSlidebar = () => {
    closeDrawer();
    console.log("menutup slide menu jalan");
    console.log(closeDrawer);
  };
  return (
    <ul className="flex lg:items-center flex-col lg:flex-row gap-4 font-medium tracking-wider text-lg">
      {menus.map((item, index) => (
        <li key={index}>
          <Link
            onMouseUp={closeSlidebar}
            href={item.href}
            className="py-2 px-4 hover:bg-primary rounded-lg transition duration-100 hover:text-white"
          >
            {item.label}
          </Link>
        </li>
      ))}

      <li>
        <a
          href="https://medium.com/surabayadev"
          target="_blank"
          className="py-2 px-4 hover:bg-primary rounded-lg transition duration-100 hover:text-white"
        >
          Blogs &raquo;
        </a>
      </li>
      <li>
        <button className="btn btn-primary text-white font-semibold">
          Hubungi Kami
        </button>
      </li>
    </ul>
  );
};

export default Menu;
