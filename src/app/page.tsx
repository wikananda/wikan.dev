"use client";
import React, { useState, useEffect } from "react";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import MainPage from "@/pages/main-page";
import ProjectsPage from "@/pages/projects-page";
import AboutPage from "@/pages/about-page";
import Footer from "@/components/footer";

function renderPage(page: string) {
  switch (page) {
    case "main":
      return <MainPage />;
    case "projects":
      return <ProjectsPage />;
    case "about":
      return <AboutPage />;
    default:
      return <MainPage />;
  }
}

export default function Home() {
  const [activePage, setActivePage] = useState("main");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <main className="w-full">
      <AnimatedBackground />
      <Navbar onNavigate={setActivePage} />
      <div className="container-main">
        {renderPage(activePage)}
      </div>
      <Footer onNavigate={setActivePage} />
    </main>
  );
}
