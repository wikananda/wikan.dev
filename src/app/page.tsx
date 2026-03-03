import Image from "next/image";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main-page";
import ProjectsPage from "@/pages/projects-page";

export default function Home() {
  return (
    <main className="w-full max-w-xl sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl 4k:max-w-400 mx-auto overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      {/* <MainPage /> */}
      <ProjectsPage />
    </main>
  );
}
