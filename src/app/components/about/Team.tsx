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
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-12 text-center">Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <a
            href={team.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="border p-4 rounded-2xl shadow-md flex flex-col items-center justify-center"
          >
            <div className="w-70 h-70">
              <img
                src={team.image}
                alt={team.name}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>

            <div className="text-center p-2">
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
