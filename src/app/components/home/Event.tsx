import { IconCoin, IconMapPin } from "@tabler/icons-react";
import React from "react";

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
        <div className="flex flex-col md:flex-row items-center md:gap-4 rounded-2xl bg-gray-200">
          <div className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl overflow-hidden">
            <img
              src="/event/event1.jpeg"
              alt="event"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start p-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 border-2 border-black p-1.5 rounded-2xl">
                <IconMapPin className="w-5 h-5" />
                <p className="text-sm">Offline Event</p>
              </div>

              <div className="flex items-center gap-1 border-2 border-black p-1.5 rounded-2xl">
                <IconCoin className="w-5 h-5" />
                <p className="text-sm">Gratis</p>
              </div>
            </div>

            <div className="max-w-3xl py-4">
              <div className="py-2">
                <h1 className="font-semibold text-xl">
                  Designing for Success: UI/UX Freelance and the Business
                  Landscape (2023)
                </h1>
                <p className="text-sm">05 Agustus 2023</p>
              </div>

              <p>Surabaya Dev Tech Community Revolution!</p>
            </div>

            <button className="px-4 py-1 bg-gray-300 rounded-full">
              Detail Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
