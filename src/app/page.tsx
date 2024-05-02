import Introduction from "./components/home/Introduction";
import Activity from "./components/home/Activity";
import Partner from "./components/home/Partner";
import Event from "./components/event/Event";

export default function Home() {
  return (
    <main>
      <section className="pt-2 md:pt-4 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <Introduction />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <Activity />
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <Event limit={3} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <Partner />
        </div>
      </section>
    </main>
  );
}
