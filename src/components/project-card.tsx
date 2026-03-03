"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import ClickableIcon from "./clickable-icon";


interface ProjectCardProps {
    title: string
    description: string
    image: string
    github?: string
    link?: string
    tags: string[]
}

export default function ProjectCard({ title, description, image, github, link, tags }: ProjectCardProps) {
    const iconClass = "w-5 h-5 3xl:w-8 3xl:h-8";

    const githubIcon =
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none" className={iconClass}>
            <path d="M8.00024 19C3.00024 20.5 3.00024 16.5 1.00024 16M15.0002 22V18.13C15.0378 17.6532 14.9733 17.1738 14.8113 16.7238C14.6492 16.2738 14.3932 15.8634 14.0602 15.52C17.2002 15.17 20.5002 13.98 20.5002 8.52C20.5 7.12383 19.9629 5.7812 19.0002 4.77C19.4561 3.54851 19.4239 2.19835 18.9102 0.999999C18.9102 0.999999 17.7302 0.649999 15.0002 2.48C12.7083 1.85882 10.2922 1.85882 8.00024 2.48C5.27024 0.649999 4.09024 0.999999 4.09024 0.999999C3.57662 2.19835 3.54439 3.54851 4.00024 4.77C3.03037 5.7887 2.49277 7.14346 2.50024 8.55C2.50024 13.97 5.80024 15.16 8.94024 15.55C8.61124 15.89 8.35751 16.2954 8.19555 16.7399C8.0336 17.1844 7.96705 17.6581 8.00024 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    return (
        <motion.div
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex flex-col gap-5 max-w-90 sm:max-w-90 md:max-w-70 lg:max-w-90 3xl:max-w-2xl h-125 xl:h-130 3xl:h-240 bg-dark/25 backdrop-blur-sm border 3xl:border-2 border-primary hover:border-highlight transition-all duration-200 rounded-sm 3xl:rounded-lg px-3 py-3 3xl:px-6 3xl:py-6"
        >
            <div className="bg-dark w-full h-1/2 rounded-sm 3xl:rounded-lg border 3xl:border-2 border-primary/50 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover object-center" />
            </div>

            <div className="flex flex-col gap-3 3xl:gap-8">
                <div className="flex flex-row justify-between items-center">
                    <h3 className="text-highlight font-semibold text-subheading">{title}</h3>
                    <div className="flex flex-row gap-5 3xl:gap-10 4k:gap-14">
                        {link && (
                            <ClickableIcon href={link} icon={<ExternalLink className={iconClass} />} />
                        )}
                        {github && (
                            <ClickableIcon href={github} icon={githubIcon} />
                        )}
                    </div>
                </div>

                <p className="text-body text-primary">{description}</p>

                <div className="flex flex-wrap gap-2 3xl:gap-4 w-full">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-green-shade px-2 py-1 rounded-sm text-caption text-primary font-medium">{tag}</span>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}