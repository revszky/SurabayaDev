import EventDetail from "@/app/components/event/DetailEvent";
import React from "react";

interface DetailType {
  detail: string;
}

const Page: React.FC<{ params: DetailType }> = ({ params }) => {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-r bg-green-50 to-slate-50">
        <div className="max-w-6xl py-20 mx-auto px-4 flex items-center justify-center">
          <EventDetail eventId={params.detail} />
        </div>
      </section>
    </main>
  );
};

export default Page;
