import Image from "next/image";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main-page";

export default function Home() {
  return (
    <main className="w-full max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4k:max-w-400 mx-auto overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <MainPage />
    </main>
  );
}
