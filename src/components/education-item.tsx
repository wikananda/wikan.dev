"use client";
import { motion } from "framer-motion";
import { Education } from "@/data/educations";

export default function EducationItem({ education }: { education: Education }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10 py-8"
        >
            <div className="md:col-span-2">
                <p className="text-body font-medium text-green-shade">{education.period}</p>
            </div>

            <div className="md:col-span-3 flex flex-col gap-2">
                <h3 className="text-subheading font-semibold text-highlight">{education.institution}</h3>
                <p className="text-body font-normal text-highlight">{education.degree} <span className="text-body font-normal text-primary">— {education.location}</span></p>
                <ul className="list-disc list-inside">
                    {education.points.map((point, index) => (
                        <li key={index} className="text-body font-light text-primary">{point}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}