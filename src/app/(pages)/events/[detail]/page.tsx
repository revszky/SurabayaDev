import EventDetail from "@/app/components/event/DetailEvent";
import React from "react";

interface DetailType {
  detail: string;
}

const Page: React.FC<{ params: DetailType }> = ({ params }) => {
  return (
    <main>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <EventDetail eventId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
