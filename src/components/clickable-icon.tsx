"use client";
import { motion } from "framer-motion";
import React from "react";

interface ClickableIconProps {
    href: string;
    icon: React.ReactNode;
}

export default function ClickableIcon({ href, icon }: ClickableIconProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-highlight"
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.15 },
            }}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
        >
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
        </motion.a>
    );
}