import React from "react";
import EventItem from "../partials/EventItem";
import events from "@/app/data/Events";
import { IconArrowsUpDown } from "@tabler/icons-react";

interface EventProps {
  limit: number | null;
}

const Event = ({ limit = null }: EventProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h1 className="text-4xl font-semibold">Event</h1>
          <p className="p-2 md:p-4">List event terbaru Surabayadev</p>
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between py-8">
            <div className="space-y-8">
              {(limit ? events.slice(0, limit) : events).map((event, index) => (
                <EventItem key={index} event={event} />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-40">
            <IconArrowsUpDown className="w-12 h-12 stroke-1 text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
