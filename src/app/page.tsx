import Navbar from "./components/navigation/Navbar";
import Introduce from "./components/home/Introduce";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Navbar />

      <div>
        <Introduce />
      </div>
    </main>
  );
}
