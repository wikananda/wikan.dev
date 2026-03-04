"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <section className="w-full flex flex-col gap-6 min-h-[85vh] justify-center xl:justify-start items-center xl:items-start">
            <div className="w-full h-50 3xl:h-100 flex flex-row justify-center md:justify-start items-center">
                <h1 className="text-display font-semibold text-primary text-center md:text-left">Featured <span className="block md:inline text-highlight">Projects</span></h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-15 3xl:gap-25 4k:gap-30 justify-items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

