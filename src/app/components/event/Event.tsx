import { IconCoin, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const events = [
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

  {
    imageSrc: "/event/event4.jpeg",
    title: "QA Career Preparation | MQA x SurabayaDev",
    date: "25 Februari 2023",
    description:
      "Mempersiapkan untuk menjadi sebagai seorang Quality Assurance",
    map: "Offline Event",
    price: "Gratis",
  },

  {
    imageSrc: "/event/event5.jpeg",
    title: "Front End Web Development with React JS | PatriaDev x SurabayaDev",
    date: "17 Desember 2022",
    description:
      "Mengetahui bagaimana kerja seorang front end dev dalam proses web development menggunakan library javascript React JS",
    map: "Offline Event",
    price: "Gratis",
  },

  {
    imageSrc: "/event/event6.jpeg",
    title: "Evaluating User Experience to Build Better Products",
    date: "27 November 2022",
    description:
      "Heuristic Usability merupakan Metode untuk menganalisa agar memberikan kemudahan dalam penggunaan.",
    map: "Offline Event",
    price: "Gratis",
  },

  {
    imageSrc: "/event/event7.jpeg",
    title: "Memulai Karir sebagai Product Manager",
    date: "29 Oktober 2022",
    description: 'Meet Up Surabaya dev "Memulai Karir sebagai Product Manager"',
    map: "Offline Event",
    price: "Gratis",
  },
];

const Event = ({ limit = null }: { limit?: number | null }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h1 className="text-4xl font-semibold">Event</h1>
          <p className="p-2 md:p-4">List event terbaru Surabayadev</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="space-y-8">
            {(limit ? events.slice(0, limit) : events).map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:gap-4 rounded-2xl bg-gray-200 overflow-hidden"
              >
                <div className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl self-stretch md:w-1/2">
                  <Image
                    src={event.imageSrc}
                    width={640}
                    height={320}
                    alt="event"
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col items-start p-6 md:w-1/2">
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
        </div>
      </div>
    </div>
  );
};

export default Event;
