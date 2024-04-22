import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img src="/sbydev/sbydev.png" alt="surabaya" />
        </Link>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="px-4">
              About Us
            </Link>

            <Link href="/" className="px-4">
              Event
            </Link>

            <Link href="/" className="px-4">
              Blog
            </Link>
          </div>

          <button className="px-4 py-2 bg-gray-300 rounded-lg">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
