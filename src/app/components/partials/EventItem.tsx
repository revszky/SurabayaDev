import React from "react";
import Image from "next/image";
import { IconCoin, IconMapPin } from "@tabler/icons-react";

interface EventItemType {
  image: string;
  title: string;
  date: string;
  description: string;
  map: string;
  price: string;
}

const EventItem: React.FC<{ event: EventItemType }> = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-4 rounded-2xl bg-gray-200 overflow-hidden">
      <div className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl self-stretch md:w-1/2">
        <Image
          src={event.image}
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
  );
};

export default EventItem;
