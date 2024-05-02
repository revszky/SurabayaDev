import EventDetail from "@/app/components/event/DetailEvent";
import React from "react";

interface DetailType {
  detail: string;
}

const Page: React.FC<{ params: DetailType }> = ({ params }) => {
  return (
    <main>
      <section>
        <div>
          <EventDetail eventId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
