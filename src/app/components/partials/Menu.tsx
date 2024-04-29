import Link from "next/link";
import React from "react";

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

const Menu = () => {
  return (
    <ul className="flex md:items-center flex-col md:flex-row gap-4 font-medium tracking-wider text-lg">
      {menus.map((item, index) => (
        <li key={index}>
          <Link
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
