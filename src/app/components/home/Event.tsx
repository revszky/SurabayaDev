import { IconCoin, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const eventsData = [
  {
    imageSrc: "/event/event1.jpeg",
    title:
      "Designing for Success: UI/UX Freelance and the Business Landscape (2023)",
    date: "05 Agustus 2023",
    description: "Surabaya Dev Tech Community Revolution!",
    map: "Offline Event",
    price: "Gratis",
  },
  {
    imageSrc: "/event/event2.jpeg",
    title:
      "Breaking the Barrier: Unleashing the Power of Frontend & FullStack Web Dev",
    date: "24 Juni 2023",
    description:
      "Bersiap untuk hadir di SurabayaDev Offline Meetup! Breaking the Barrier: Unleashing the Power of Frontend and FullStack Web Development",
    map: "Offline Event",
    price: "Gratis",
  },
  {
    imageSrc: "/event/event3.jpeg",
    title: "Web Automation Testing with Puppeteer",
    date: "01 April 2023",
    description:
      "Learn the basics of web automation testing using Puppeteer, an open-source Node library, in this webinar. Boost your testing efficiency!",
    map: "Offline Event",
    price: "Gratis",
  },
];

const Event = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold">Event Terbaru</h1>
        <p className="p-2 md:p-4">
          Lihat dan ikuti event terbaru dari SurabayaDev.
        </p>
      </div>

      <div className="space-y-8">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:gap-4 rounded-2xl bg-gray-200 overflow-hidden"
          >
            <div className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:aspect-square lg:aspect-video self-stretch">
              <img
                src={event.imageSrc}
                alt="event"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col items-start p-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 border-2 border-black p-1.5 rounded-2xl">
                  <IconMapPin className="w-5 h-5" />
                  <p className="text-sm">{event.map}</p>
                </div>

                <div className="flex items-center gap-1 border-2 border-black p-1.5 rounded-2xl">
                  <IconCoin className="w-5 h-5" />
                  <p className="text-sm">{event.price}</p>
                </div>
              </div>

              <div className="max-w-3xl py-4">
                <div className="py-2">
                  <h1 className="font-semibold text-xl">{event.title}</h1>
                  <p className="text-sm">{event.date}</p>
                </div>

                <p>{event.description}</p>
              </div>

              <button className="px-4 py-1 bg-gray-300 rounded-full">
                Detail Event
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-16">
        <Link href="/event" className="px-4 py-2 rounded-lg bg-gray-300">
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Event;
