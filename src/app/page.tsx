"use client";
import React, { useState } from "react";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main-page";
import ProjectsPage from "@/pages/projects-page";
import Footer from "@/components/footer";

export default function Home() {
  const [activePage, setActivePage] = useState("main");

  return (
    <main className="w-full">
      <AnimatedBackground />
      <Navbar onNavigate={setActivePage} />
      <div className="container-main">
        {activePage === "main" ? <MainPage /> : <ProjectsPage />}
      </div>
      <Footer onNavigate={setActivePage} />
    </main>
  );
}
