import { IconSend, IconShare, IconUsersGroup } from "@tabler/icons-react";
import React from "react";
import Team from "./Team";

const aboutItems = [
  {
    icon: <IconUsersGroup className="w-8 h-8" />,
    title: "Memperluas Koneksi",
    description:
      "Memperluas relasi melalui komunitas untuk menjalin kebermanfaatan.",
  },
  {
    icon: <IconShare className="w-8 h-8" />,
    title: "Berbagi Ilmu",
    description:
      "Menjadi wadah yang tepat untuk bisa saling berbagi ilmu, pengalaman maupun wawasan tentang update teknologi.",
  },
  {
    icon: <IconSend className="w-8 h-8" />,
    title: "Wadah Belajar",
    description:
      "Menjadi wadah belajar pegiat IT untuk bisa terus update mengenai tech industry saat ini.",
  },
];

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-semibold">Tentang Kami</h1>
          <p className="p-2 md:p-4">
            SurabayaDev merupakan komunitas teknologi yang dibentuk sejak tahun
            2014 dan merupakan wadah untuk belajar dan kolaborasi di Kota
            Surabaya
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="p-4">{item.icon}</div>

              <div className="text-center max-w-sm">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p className="p-2 md:p-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Team />
        </div>
      </div>
    </div>
  );
};

export default About;
