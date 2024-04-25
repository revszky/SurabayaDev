import React from "react";

const Team = () => {
  const teams = [
    {
      image: "https://shorturl.at/crIU6",
      name: "Achmad Fatoni",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/achmadfatoni/",
    },
    {
      image: "https://shorturl.at/crzAT",
      name: "Antoni Putra",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/antoniputra/",
    },
    {
      image: "https://shorturl.at/oxyEN",
      name: "Arryangga Aliev Pratamaputra",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/arryanggaputra/",
    },
    {
      image: "https://shorturl.at/abNRT",
      name: "Sawitry Dyah Kusuma Wardhani",
      role: "Community Manager",
      linkedin: "https://www.linkedin.com/in/sawitry/",
    },
    {
      image: "https://shorturl.at/bjoAV",
      name: "Putra Wahyu Utama Istianto",
      role: "Community Lead",
      linkedin:
        "https://www.linkedin.com/in/putra-wahyu-utama-istianto-5a9966171/",
    },
    {
      image: "https://shorturl.at/cQSZ7",
      name: "Puspa Rinjeni",
      role: "Event Division",
      linkedin: "https://www.linkedin.com/in/puspa-rinjeni-31186411a/",
    },
    {
      image: "https://shorturl.at/uvUYZ",
      name: "Yusup Maulana",
      role: "Logistic Division",
      linkedin: "https://www.linkedin.com/in/yusupmaulana/",
    },
    {
      image: "https://shorturl.at/dyKWY",
      name: "Miftahul Huda",
      role: "R&D Division",
      linkedin: "https://www.linkedin.com/in/iniakunhuda/",
    },
    {
      image: "https://shorturl.at/AJYZ1",
      name: "Mulia Hartawan Negara",
      role: "Event Manager",
      linkedin: "https://www.linkedin.com/in/muliahartawan/",
    },
    {
      image: "https://shorturl.at/aioqt",
      name: "Aprilian Lisa",
      role: "Design Division",
      linkedin: "https://www.linkedin.com/in/aprilianlisam/",
    },
    {
      image: "https://shorturl.at/fiwE2",
      name: "Musa Al Farid",
      role: "Design Division",
      linkedin: "https://www.linkedin.com/in/musaalfarid77/",
    },
    {
      image: "https://shorturl.at/vIL13",
      name: "Achmada Fiqri A Rasyad",
      role: "Member",
      linkedin: "https://www.linkedin.com/in/fiqriachmada/",
    },
  ];
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <a
            href={team.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="border p-4 rounded-lg shadow-md"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-auto mb-4 rounded-full"
            />
            <div className="text-center p-4">
              <h2 className="text-xl font-semibold mb-2">{team.name}</h2>
              <p className="text-gray-600">{team.role}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
