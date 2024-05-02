"use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandTelegram,
  IconCircleCaretRight,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
import BgRight from "../background/BgRight";
import BgLeft from "../background/BgLeft";

const Introduction: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center p-2 md:p-6 mb-4">
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

        <div className="flex flex-wrap items-center justify-center gap-4">
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

      <div className="p-6 flex items-center justify-center relative">
        <div className="absolute -top-16 lg:-top-20 right-10 md:right-20 lg:right-5 xl:-right-10">
          <BgRight />
        </div>

        <div className="relative lg:z-10 flex flex-col items-center justify-center">
          <Image
            src="/community/pict1.jpeg"
            width={640}
            height={480}
            alt="Surabaya Dev - Anniversary 3th"
            className="rounded-2xl md:w-[600px] md:h-[400px]"
          />

          <button
            className="absolute top-full -translate-y-10 flex items-center p-4 bg-green-500 gap-2 rounded-full shadow-lg text-white font-semibold"
            onClick={handleModalOpen}
          >
            <IconCircleCaretRight />
            Video Kegiatan Kami
          </button>

          <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        </div>

        <div className="absolute bottom-24 lg:bottom-28 xl:bottom-24 left-0 lg:left-5 xl:-left-10">
          <BgLeft />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
