import Navbar from "./components/navigation/Navbar";
import Introduce from "./components/home/Introduce";
import Activity from "./components/home/Activity";
import Event from "./components/home/Event";
import Partner from "./components/home/Partner";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Navbar />

      <div className="py-16">
        <Introduce />
      </div>

      <div className="py-16">
        <Activity />
      </div>

      <div className="py-16">
        <Event />
      </div>

      <div className="py-16">
        <Partner />
      </div>
    </main>
  );
}
