import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <ul className="flex md:items-center flex-col md:flex-row gap-4 md:gap-6 font-medium tracking-wider text-lg">
      <li>
        <Link
          href="/about-us"
          className="py-2 px-4 hover:bg-primary rounded-lg transition duration-100 hover:text-white"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/event"
          className="py-2 px-4 hover:bg-primary rounded-lg transition duration-100 hover:text-white"
        >
          Event
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="py-2 px-4 hover:bg-primary rounded-lg transition duration-100 hover:text-white"
        >
          Blog
        </Link>
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
