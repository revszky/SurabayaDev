import Introduction from "./components/home/Introduction";
import Activity from "./components/home/Activity";
import Partner from "./components/home/Partner";
import Event from "./components/event/Event";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="pt-2 md:pt-4 pb-16 bg-gradient-to-t bg-green-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <Introduction />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <Activity />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-t bg-green-50 to-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4">
          <Event limit={3} />

          <div className="p-6">
            <Link
              href="/events"
              className="px-4 py-2 bg-green-500 rounded-2xl text-white font-semibold"
            >
              Lihat Selengkapnya
            </Link>
          </div>
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
