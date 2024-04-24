import Link from "next/link";
import React from "react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuNav = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };
  return (
    <>
      <ul className="flex items-center flex-col md:flex-row md:gap-[40px]">
        <li className="mb-4 md:mb-0 text-lg">
          <Link href="/" onClick={mengaturMenuKlik}>
            <img src="/sbydev/sbydev.png" alt="Surabaya" />
          </Link>
        </li>

        <div className="flex items-center flex-col md:flex-row md:gap-6">
          <li className="mb-4 md:mb-0 text-lg">
            <Link href="/about-us" onClick={mengaturMenuKlik}>
              About Us
            </Link>
          </li>

          <li className="mb-4 md:mb-0 text-lg">
            <Link href="/event" onClick={mengaturMenuKlik}>
              Event
            </Link>
          </li>

          <li className="mb-4 md:mb-0 text-lg">
            <Link href="/" onClick={mengaturMenuKlik}>
              Blog
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default MenuNav;
