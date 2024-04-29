import About from "@/app/components/partials/About";
import Team from "@/app/components/partials/Team";
import React from "react";

const page = () => {
  return (
    <main>
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <About />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <Team />
        </div>
      </section>
    </main>
  );
};

export default page;
