import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTelegram,
  IconCircleCaretRight,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4 mb-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-center mb-4">
          <p className="mb-2 bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
            Komunitas IT Arek Suroboyo,
          </p>
          <p>
            <span className="text-primary">se-INDONESIA</span>
            <span> 🇮🇩</span>
          </p>
        </h1>

        <div className="max-w-2xl p-4 mb-4">
          <p className="text-center md:text-lg tracking-wide font-medium">
            SurabayaDev merupakan komunitas IT yang berdomisili di Kota Surabaya
            yang memiliki agenda kegiatan bertema edukasi teknologi saling
            bersinergi berkolaborasi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://t.me/surabayadev"
            target="_blank"
            className="btn btn-secondary text-white tracking-wider"
          >
            <IconBrandTelegram />
            <span>Join Telegram</span>
          </a>
          <a
            href="https://github.com/surabayadev"
            target="_blank"
            className="btn btn-secondary text-white tracking-wider"
          >
            <IconBrandGithub />
            <span>Join Github</span>
          </a>
          <a
            href="https://facebook.com/surabayadev"
            target="_blank"
            className="btn btn-secondary text-white tracking-wider"
          >
            <IconBrandFacebook />
            <span>Join Facebook</span>
          </a>
        </div>
      </div>

      <div className="p-4 relative flex flex-col items-center justify-center">
        <Image
          src="/community/pict1.jpeg"
          width={640}
          height={480}
          alt="Surabaya Dev - Anniversary 3th"
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

export default Introduction;
