import teamData from "@/app/data/Teams";
import React from "react";

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">Team Members</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default Team;
