import Event from "@/app/components/event/Event";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <Event limit={null} />
        </div>
      </section>
    </main>
  );
};

export default page;
