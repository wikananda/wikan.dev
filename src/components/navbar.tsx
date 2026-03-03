"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="py-5 relative z-50">
            <div className="flex items-center justify-between container-main">
                <button onClick={() => onNavigate("main")} className="text-heading font-semibold text-highlight transition-transform cursor-pointer">Wikananda.</button>

                {/* Menu */}
                <div className="hidden md:flex gap-16">
                    <button onClick={() => onNavigate("projects")} className="text-subheading font-normal text-primary hover:text-highlight transition-all duration-200 cursor-pointer">Projects</button>
                    <button onClick={() => onNavigate("about")} className="text-subheading font-normal text-primary hover:text-highlight transition-all duration-200 cursor-pointer">About</button>
                </div>

                {/* Hamburger dropdown */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <motion.div
                        layout
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="bg-dark/25 backdrop-blur-sm border border-primary rounded-sm px-2 py-1 overflow-hidden flex items-end"
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            {menuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.15, ease: "easeInOut" }}
                                >
                                    <X size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.15, ease: "easeInOut" }}
                                    className="flex flex-row gap-1 items-center"
                                >
                                    <span className="text-body">Menu</span>
                                    <ChevronDown size={20} className="opacity-50 mt-0.5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </button>

                {/* Menu items */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-dark/25 backdrop-blur-sm absolute flex flex-col gap-5 items-end top-full right-6 w-35 bg-background border rounded-sm border-primary p-4"
                        >
                            <button onClick={() => { onNavigate("projects"); setMenuOpen(false); }} className="text-body font-light">Projects</button>
                            <button onClick={() => { onNavigate("about"); setMenuOpen(false); }} className="text-body font-light">About</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}