import Link from "next/link";
import React from "react";

const NotFoundEvent = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 text-center">
          <h1 className="text-5xl font-bold p-2">
            Tidak ada acara yang ditemukan
          </h1>

          <p className="text-2xl p-2">Silahkan kembali</p>
        </div>

        <div className="p-4">
          <Link
            href="/"
            className="px-4 py-2 bg-green-500 text-white text-xl font-semibold rounded-xl"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundEvent;
