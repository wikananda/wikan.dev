"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="py-5">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-subheading font-semibold">Wikananda.</Link>

                <div className="flex gap-32">
                    <Link href="/" className="text-subheading font-light">Projects</Link>
                    <Link href="/" className="text-subheading font-light">About</Link>
                </div>
            </div>
        </nav>
    )
}