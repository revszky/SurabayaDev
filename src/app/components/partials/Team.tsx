import Image from "next/image";
import React from "react";

const Team = () => {
  const teams = [
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Achmad Fatoni",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/achmadfatoni/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Antoni Putra",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/antoniputra/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Arryangga Aliev Pratamaputra",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/arryanggaputra/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Sawitry Dyah Kusuma Wardhani",
      role: "Community Manager",
      linkedin: "https://www.linkedin.com/in/sawitry/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Putra Wahyu Utama Istianto",
      role: "Community Lead",
      linkedin:
        "https://www.linkedin.com/in/putra-wahyu-utama-istianto-5a9966171/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Puspa Rinjeni",
      role: "Event Division",
      linkedin: "https://www.linkedin.com/in/puspa-rinjeni-31186411a/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Yusup Maulana",
      role: "Logistic Division",
      linkedin: "https://www.linkedin.com/in/yusupmaulana/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Miftahul Huda",
      role: "R&D Division",
      linkedin: "https://www.linkedin.com/in/iniakunhuda/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Mulia Hartawan Negara",
      role: "Event Manager",
      linkedin: "https://www.linkedin.com/in/muliahartawan/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Aprilian Lisa",
      role: "Design Division",
      linkedin: "https://www.linkedin.com/in/aprilianlisam/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Musa Al Farid",
      role: "Design Division",
      linkedin: "https://www.linkedin.com/in/musaalfarid77/",
    },
    {
      image:
        "https://fastly.picsum.photos/id/531/500/500.jpg?hmac=eaduedF4dw0jS6AeDrrxNJIxAlsmWfdZWEPdEG84WRw",
      name: "Achmada Fiqri A Rasyad",
      role: "Member",
      linkedin: "https://www.linkedin.com/in/fiqriachmada/",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">Team Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team, index) => (
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
                className="object-cover w-full h-full rounded-2xl "
              />
            </div>

            <h2 className="pt-2 flex-grow text-center text-lg font-medium line-clamp-1">
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
