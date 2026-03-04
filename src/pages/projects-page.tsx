"use client";
import { motion, type Variants } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function ProjectsPage() {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col gap-6 min-h-[85vh] justify-center xl:justify-start items-center xl:items-start"
        >
            <motion.div
                variants={itemVariants}
                className="w-full h-50 3xl:h-100 flex flex-row justify-center md:justify-start items-center"
            >
                <h1 className="text-display font-semibold text-primary text-center md:text-left">
                    Featured <span className="block md:inline text-highlight">Projects</span>
                </h1>
            </motion.div>

            <motion.div
                variants={containerVariants}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-15 3xl:gap-25 4k:gap-30 justify-items-center"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants} className="w-full flex justify-center">
                        <ProjectCard
                            {...project}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
