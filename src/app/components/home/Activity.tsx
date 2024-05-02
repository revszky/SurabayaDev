"use client";

import { IconChevronsRight } from "@tabler/icons-react";
import React, { useState } from "react";

const activities = [
  {
    title: "Workshop & Pelatihan IT",
    description:
      "Belajar bersama dengan para programmer, designer, product manager, maupun QA Engineer.",
    image: "/community/pict2.jpeg",
  },
  {
    title: "Gathering",
    description:
      "Ngopi bareng dan WFC (Work From Cafe) bersama dengan sesama anggota & pengurus Surabayadev.",
    image: "/community/pict3.jpeg",
  },
  {
    title: "Pengabdian Sosial",
    description:
      "Berbagi bersama dengan yang lebih membutuhkan ketika di momen bulan Ramadhan seperti berbagi takjil.",
    image: "/community/pict4.jpeg",
  },
];

const Activity = () => {
  const [selectedImage, setSelectedImage] = useState(activities[0].image);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);

  const handleActivityClick = (image: string, index: number) => {
    setSelectedImage(image);
    setActiveIndex(index);
    setAnimationActive(true);

    setTimeout(() => {
      setAnimationActive(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold">
          Kegiatan di <span>SurabayaDev</span>
        </h1>
        <p className="p-2 md:p-4">
          Kami telah mengadakan lebih dari 50+ kegiatan di Kota Surabaya.
        </p>
      </div>

      <div className="flex items-start justify-between py-8">
        <div className="max-w-xl">
          <div className="lg:pr-16 text-center lg:text-left py-4">
            <h1 className="text-2xl font-semibold">Kolaborasi</h1>
            <p className="py-2">
              adalah salah satu core values dari komunitas kami. Dimana setiap
              kegiatan kami selalu melibatkan berbagai pihak mulai dari
              komunitas lain, pemerintah Kota Surabaya, sponsor dan lainnya.
            </p>
          </div>

          <div className="p-4 block lg:hidden">
            <img
              src={selectedImage}
              alt="community"
              className={`rounded-2xl ${
                animationActive
                  ? "-translate-y-10 opacity-0 duration-500"
                  : "translate-y-0 duration-500"
              }`}
            />
          </div>

          <div className="py-4 lg:py-8 px-2 lg:px-0">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`max-w-lg border border-green-500 p-2 cursor-pointer rounded-lg ${
                    activeIndex === index ? "bg-green-50" : ""
                  }`}
                  onClick={() => handleActivityClick(activity.image, index)}
                >
                  <div className="flex items-center">
                    <div className="p-2">
                      <h1 className="text-xl font-semibold">
                        {activity.title}
                      </h1>
                      <p className="py-2 pr-2">{activity.description}</p>
                    </div>
                    <div className="p-2">
                      <IconChevronsRight className="text-green-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 hidden lg:block">
          <img
            src={selectedImage}
            alt="community"
            className={`rounded-2xl ${
              animationActive
                ? "-translate-y-10 opacity-0 duration-500"
                : "translate-y-0 duration-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Activity;
