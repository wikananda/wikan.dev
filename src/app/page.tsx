import Image from "next/image";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main-page";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <AnimatedBackground />
      <Navbar />
      <MainPage />
    </main>
  );
}
