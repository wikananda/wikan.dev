"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
    return (
        <section className="w-full flex flex-col gap-6 min-h-[85vh] justify-center xl:justify-start items-center xl:items-start px-6">
            <div className="w-full h-50 flex flex-row justify-center md:justify-start items-center">
                <h1 className="text-display font-semibold text-primary text-center md:text-left">Featured <span className="block md:inline text-highlight">Projects</span></h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-15 justify-items-center">
                <ProjectCard
                    title="sona.ai"
                    description="Interview focused voice transcription and summarization based on WhisperX and Llama."
                    image="/sona-ai.png"
                    github="https://github.com/wikananda/sona-ai"
                    link="https://github.com/wikananda/sona-ai"
                    tags={["Speech", "ASR", "LLM", "Next.js", "Whisper", "Llama"]}
                />
                <ProjectCard
                    title="sona.ai"
                    description="Interview focused voice transcription and summarization based on WhisperX and Llama."
                    image="/sona-ai.png"
                    github="https://github.com/wikananda/sona-ai"
                    link="https://github.com/wikananda/sona-ai"
                    tags={["Speech", "ASR", "LLM", "Next.js", "Whisper", "Llama"]}
                />
                <ProjectCard
                    title="sona.ai"
                    description="Interview focused voice transcription and summarization based on WhisperX and Llama."
                    image="/sona-ai.png"
                    github="https://github.com/wikananda/sona-ai"
                    link="https://github.com/wikananda/sona-ai"
                    tags={["Speech", "ASR", "LLM", "Next.js", "Whisper", "Llama"]}
                />
            </div>
        </section>
    );
}

