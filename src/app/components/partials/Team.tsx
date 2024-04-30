import Image from "next/image";
import React from "react";
import Teams from "@/app/data/Teams";

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">Team Members</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Teams.map((team, index) => (
          <a
            href={team.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex flex-col border rounded-2xl shadow-md"
          >
            <div className="h-60">
              <Image
                src={team.image}
                alt={team.name}
                width={240}
                height={240}
                priority={true}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <h2 className="pt-2 px-2 flex-grow text-center text-lg font-medium line-clamp-1">
              {team.name}
            </h2>
            <p className="p-1 pb-2 text-center text-gray-600">{team.role}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
