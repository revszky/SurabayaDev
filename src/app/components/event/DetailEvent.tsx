import React from "react";
import events from "@/app/data/Events";
import { IconCoin, IconMapPin } from "@tabler/icons-react";
import NotFoundEvent from "./NotFoundEvent";

interface EventDetailProps {
  eventId: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId }) => {
  const eventDetail = events.find((event) => event.id === parseInt(eventId));

  if (!eventDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <NotFoundEvent />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="p-2">
          <img src={eventDetail.image} alt="event" />
        </div>

        <div className="flex items-center justify-between space-x-4 p-2">
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
          <h1>{eventDetail.title}</h1>
          <p>{eventDetail.description}</p>

          <div className="p-4">
            <p>{eventDetail.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
