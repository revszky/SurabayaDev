import Introduction from "./components/home/Introduction";
import Activity from "./components/home/Activity";
import Partner from "./components/home/Partner";
import Event from "./components/event/Event";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <div className="py-16">
        <Introduction />
      </div>

      <div className="py-16">
        <Activity />
      </div>

      <div className="py-16">
        <Event limit={3} />
      </div>

      <div className="py-16">
        <Partner />
      </div>
    </main>
  );
}
