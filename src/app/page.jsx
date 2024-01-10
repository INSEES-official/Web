import Landing from "@/components/Landing/Landing";
import Timeline from "@/components/Landing/Timeline";
import Contact from "@/components/Landing/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <Landing />
      <Timeline />
      <Contact />
    </main>
  );
}
