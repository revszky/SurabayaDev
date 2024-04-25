import { IconCircleCaretRight } from "@tabler/icons-react";
import React from "react";

const Introduce = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Komunitas IT Arek Suroboyo, <span>SurabayaDev</span>
          </h1>
        </div>

        <div className="max-w-3xl p-4">
          <p className="text-center">
            SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya
            yang memiliki agenda kegiatan bertema edukasi teknologi saling
            bersinergi berkolaborasi.
          </p>
        </div>

        <button className="btn btn-secondary">Join Telegram</button>
      </div>

      <div className="p-4 relative flex flex-col items-center justify-center">
        <img
          src="/community/pict1.jpeg"
          alt="community"
          className="rounded-2xl md:w-[600px] md:h-[400px]"
        />

        <button className="absolute top-full -translate-y-10 flex items-center p-4 bg-gray-300 gap-2 rounded-full shadow-lg">
          <IconCircleCaretRight />
          Video Kegiatan Kami
        </button>
      </div>
    </div>
  );
};

export default Introduce;
