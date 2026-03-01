"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedBackground() {
    const angle = useMotionValue(25);

    const background = useTransform(
        angle,
        (a) => `linear-gradient(${a}deg, #524444, #04393D)`
    );

    useEffect(() => {
        const controls = animate(angle, [25, 32, 15, 25], {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
        });
        return controls.stop;
    }, [angle]);

    return (
        <motion.div
            style={{ background }}
            className="fixed inset-0 -z-10 h-full w-full"
        />
    );
}