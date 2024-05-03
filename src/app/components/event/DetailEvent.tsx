import React from "react";
import events from "@/app/data/Events";
import { IconCoin, IconMapPin } from "@tabler/icons-react";
import NotFoundEvent from "./NotFoundEvent";

interface EventDetailProps {
  eventId: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const eventDetail = events.find((event) => event.id === eventId);

  if (!eventDetail) {
    return (
      <main className="flex items-center justify-center">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <NotFoundEvent />
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Detail Event, SurabayaDev.</h1>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="p-2.5 border-l border-r border-green-500">
            <img src={eventDetail.image} alt="event" />
          </div>

          <div className="flex items-center justify-between gap-6 p-4">
            <div className="flex items-center gap-1">
              <IconMapPin />
              <p>{eventDetail.map}</p>
            </div>

            <div className="flex items-center gap-1">
              <IconCoin />
              <p>{eventDetail.price}</p>
            </div>
          </div>

          <div className="p-2 text-center">
            <h1 className="text-2xl font-bold p-2">{eventDetail.title}</h1>

            <p className="p-2 text-lg">{eventDetail.description}</p>
          </div>

          <div className="p-4 text-center">
            <p>{eventDetail.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
