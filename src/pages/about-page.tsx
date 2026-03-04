"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Mail, Download } from "lucide-react";
import ClickableIcon from "@/components/clickable-icon";
import ShineButton from "@/components/shine-button";
import ExperienceItem from "@/components/experience-item";
import { experiences } from "@/data/experiences";

const github = {
    href: "https://github.com/wikananda",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-standard" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <path d="M8.00024 19C3.00024 20.5 3.00024 16.5 1.00024 16M15.0002 22V18.13C15.0378 17.6532 14.9733 17.1738 14.8113 16.7238C14.6492 16.2738 14.3932 15.8634 14.0602 15.52C17.2002 15.17 20.5002 13.98 20.5002 8.52C20.5 7.12383 19.9629 5.7812 19.0002 4.77C19.4561 3.54851 19.4239 2.19835 18.9102 0.999999C18.9102 0.999999 17.7302 0.649999 15.0002 2.48C12.7083 1.85882 10.2922 1.85882 8.00024 2.48C5.27024 0.649999 4.09024 0.999999 4.09024 0.999999C3.57662 2.19835 3.54439 3.54851 4.00024 4.77C3.03037 5.7887 2.49277 7.14346 2.50024 8.55C2.50024 13.97 5.80024 15.16 8.94024 15.55C8.61124 15.89 8.35751 16.2954 8.19555 16.7399C8.0336 17.1844 7.96705 17.6581 8.00024 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

const linkedin = {
    href: "https://www.linkedin.com/in/wikananda-s/",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon-standard" viewBox="0 0 24 24" fill="none">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

const email = {
    href: "mailto:nandasantana276@gmail.com",
    icon: <Mail className="icon-standard" />,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
    return (
        <motion.section
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* About me Title */}
            <div className="w-full h-75 3xl:h-100 flex flex-row justify-center items-center">
                <h1 className="text-display font-semibold text-primary text-center md:text-left">About <span className="text-highlight">Me</span></h1>
            </div>

            {/* About Me */}
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 xl:gap-16 items-start">

                {/* ── Left column: bio ── */}
                <div className="xl:col-span-3 flex flex-col gap-6 order-2 xl:order-1">

                    {/* Name + title */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
                        <h1 className="text-display font-semibold text-highlight leading-tight text-center md:text-left">
                            Nyoman Wikananda Santana
                        </h1>
                        <p className="text-heading font-normal text-primary mt-1 text-center md:text-left">
                            AI Engineer and Data Scientist.
                        </p>
                    </motion.div>

                    {/* Intro paragraph */}
                    <div className="flex flex-col gap-5 text-center md:text-left">
                        <motion.p variants={itemVariants} className="text-body font-light text-primary leading-relaxed">
                            Hello! You can call me{" "}
                            <span className="font-semibold text-highlight">Wikan</span>
                            . I am a mathematics graduate with passion in technology, AI and video games.
                        </motion.p>

                        {/* Origin paragraph */}
                        <motion.p variants={itemVariants} className="text-body font-light text-primary leading-relaxed">
                            I was born in 2002 in Bali, Indonesia. I grew up surrounded by video games, which is one of the
                            reason I was very accustomed with computer. My first programming language is C# due to my desire
                            to make games. But, I can say my school life was less “techy” compared to the stigma people have
                            around me for tech bros. I stumbled upon AI by pure accident during the time I got bored by my university
                            math classes and decided to look for AI short program in 2022.
                        </motion.p>

                        {/* Short program paragraph */}
                        <motion.p variants={itemVariants} className="text-body font-light text-primary leading-relaxed">
                            The AI short program I joined wasn't the best. But, it is good enough to introduce me into AI. My
                            imagination wanders with whatever the AI can do. After the short program, suddenly AI became my
                            strongest point. It is just make sense to pursue AI for my thesis (where I learned a lot due to my
                            super strict and scary professor). To be fair, I was a little traumatized with AI and academic due to
                            that :&#39;D.
                        </motion.p>

                        {/* Academy paragraph */}
                        <motion.p variants={itemVariants} className="text-body font-light text-primary leading-relaxed">
                            Later, I joined the Apple Developer Academy program in Bali. The first few months got me nervous since
                            most of the people came from IT background. Thankfully, later I found out that my AI skills is one of
                            the strongest in the academy. I took the chance during my time in the academy to revisit and play
                            around with different kinds of AI (GAN, LLM, computer vision). They reminded me how fascinated I am
                            with this technology. It is just still unbelievable that all of our AI technology could become reality
                            due to some silly—obviously not—matrix operations (and of course statistics, calculus and many more).
                        </motion.p>

                        {/* Final paragrapgh */}
                        <motion.p variants={itemVariants} className="text-body font-light text-primary leading-relaxed">
                            I decided to continue pursuing AI (I still make games as a hobby!). As part of my journey, I started
                            some projects to strengthen my understanding, skills and portfolio. I deliberately picky about my
                            projects because I hope the projects will also be something that is useful to people (Apple Academy mindset lol).
                            I hope my project will be useful to you as well.
                        </motion.p>
                    </div>
                </div>

                {/* ── Right column: photo + links ── */}
                <motion.div
                    variants={itemVariants}
                    className="xl:col-span-2 flex flex-col items-center xl:items-end gap-6 order-1 xl:order-2"
                >
                    {/* Profile photo */}
                    <div className="relative w-[256px] h-[256px] 3xl:w-[350px] 3xl:h-[350px] 4k:w-[512px] 4k:h-[512px] rounded-sm 3xl:rounded-md overflow-hidden border 3xl:border-2 border-primary">
                        <Image
                            src="/profile.png"
                            alt="Nyoman Wikananda Santana"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>

                    {/* Social icons */}
                    <div className="flex flex-row gap-10 3xl:gap-15">
                        <ClickableIcon href={github.href} icon={github.icon} />
                        <ClickableIcon href={linkedin.href} icon={linkedin.icon} />
                        <ClickableIcon href={email.href} icon={email.icon} />
                    </div>

                    {/* Resume button */}
                    <ShineButton
                        href="https://drive.google.com/file/d/1PDiXc6aaLOuUVC30Qh0plwimiEx2Dnnf/view?usp=sharing"
                        label="Resume"
                        icon={<Download className="icon-standard" />}
                    />
                </motion.div>
            </div>

            {/* Experiences Title */}
            <div className="w-full h-75 3xl:h-100 flex flex-row justify-center items-center">
                <h1 className="text-display font-semibold text-primary text-center md:text-left">My <span className="text-highlight">Experiences</span></h1>
            </div>

            {/* Experiences */}
            <div className="w-full flex flex-col gap-5">
                {experiences.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        experience={experience}
                    />
                ))}
            </div>

        </motion.section>
    );
}
