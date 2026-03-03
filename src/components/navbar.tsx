"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="px-6 py-5 relative">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-subheading font-semibold text-highlight">Wikananda.</Link>

                {/* Menu */}
                <div className="hidden sm:flex gap-16">
                    <Link href="/" className="text-subheading font-light text-primary hover:text-highlight hover:font-semibold transition-all duration-200">Projects</Link>
                    <Link href="/" className="text-subheading font-light text-primary hover:text-highlight hover:font-semibold transition-all duration-200">About</Link>
                </div>

                {/* Hamburger dropdown */}
                <button
                    className="sm:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <motion.div
                        layout
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="border border-primary rounded-sm px-2 py-1 overflow-hidden flex items-end"
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
                            className="absolute flex flex-col gap-5 items-end top-full right-6 w-35 bg-background border rounded-sm border-primary p-4"
                        >
                            <Link href="/" className="text-body font-light">Projects</Link>
                            <Link href="/" className="text-body font-light">About</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}