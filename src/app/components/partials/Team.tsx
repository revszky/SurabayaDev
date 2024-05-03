import teamData from "@/app/data/Teams";
import React from "react";
import BgLeft from "../background/BgLeft";
import Bg from "../background/Bg";

const Team = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center relative">
        <div className="p-4">
          <h1 className="text-4xl font-semibold mb-12 text-center">
            Team Members
          </h1>
        </div>

        <div className="absolute -top-36 left-0 md:left-28">
          <BgLeft />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {teamData.map((teamMember, index) => (
            <a
              href={teamMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex flex-col border rounded-2xl shadow-md"
            >
              <div className="h-60">
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <h2 className="pt-2 px-2 flex-grow text-center text-lg font-medium line-clamp-1">
                {teamMember.name}
              </h2>
              <p className="p-1 pb-2 text-center text-gray-600">
                {teamMember.role}
              </p>
            </a>
          ))}
        </div>

        <div className="absolute bottom-[835px] -right-3 md:right-[2px] lg:-right-3 xl:-right-10">
          <Bg />
        </div>
      </div>
    </div>
  );
};

export default Team;
