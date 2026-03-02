"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import React from "react";

interface ShineButtonProps {
    href: string;
    label: string;
    icon?: React.ReactNode;  // pass any icon, or omit entirely
    download?: string;       // optional filename if it's a direct file download
    external?: boolean;      // opens in new tab (default: true)
}

export default function ShineButton({
    href,
    label,
    icon = <Download size={18} />,   // default icon, pass null to hide
    download,
    external = true,
}: ShineButtonProps) {
    return (
        <motion.a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            download={download}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border border-primary px-5 py-2 text-primary hover:border-highlight hover:text-highlight transition-all"
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 },
            }}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
        >
            {/* Icon — only rendered if provided */}
            {icon && (
                <motion.div
                    variants={{
                        initial: { y: 0 },
                        hover: {
                            y: [0, -5, 0, -5, 0, 0],
                            transition: {
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "loop",
                            },
                        },
                    }}
                >
                    {icon}
                </motion.div>
            )}

            {/* Label */}
            <span className="relative z-10 text-body font-medium tracking-wide">
                {label}
            </span>

            {/* Shine sweep */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                variants={{
                    initial: { x: "-100%" },
                    hover: {
                        x: ["-100%", "100%", "-100%", "-100%", "-100%"],
                        transition: {
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                        },
                    },
                }}
            />
        </motion.a>
    );
}