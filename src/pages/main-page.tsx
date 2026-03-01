"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ShineButton from "@/components/download-icon";

export default function MainPage() {
    return (
        <section className="flex flex-col gap-5 max-w-full h-[80vh] justify-center">
            <div className="flex flex-col">
                <h1 className="text-display font-extralight">Hello, I'm <span className="font-semibold text-highlight">Wikananda</span></h1>
                <p className="-mt-3 text-heading font-semibold">an AI Developer</p>
            </div>
            <div className="max-w-xl">
                <p className="text-body font-light">I specialized in LLM pipelines, deep learning applications and data science. Experienced in  training/fine-tuning transformers models, predictive modeling, data analytics.</p>
            </div>

            {/* Social Media & Resume */}
            <div className="flex flex-row gap-15 items-center">
                {/* Social Media */}
                <div className="flex flex-row gap-10">
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                            <path d="M8.00024 19C3.00024 20.5 3.00024 16.5 1.00024 16M15.0002 22V18.13C15.0378 17.6532 14.9733 17.1738 14.8113 16.7238C14.6492 16.2738 14.3932 15.8634 14.0602 15.52C17.2002 15.17 20.5002 13.98 20.5002 8.52C20.5 7.12383 19.9629 5.7812 19.0002 4.77C19.4561 3.54851 19.4239 2.19835 18.9102 0.999999C18.9102 0.999999 17.7302 0.649999 15.0002 2.48C12.7083 1.85882 10.2922 1.85882 8.00024 2.48C5.27024 0.649999 4.09024 0.999999 4.09024 0.999999C3.57662 2.19835 3.54439 3.54851 4.00024 4.77C3.03037 5.7887 2.49277 7.14346 2.50024 8.55C2.50024 13.97 5.80024 15.16 8.94024 15.55C8.61124 15.89 8.35751 16.2954 8.19555 16.7399C8.0336 17.1844 7.96705 17.6581 8.00024 18.13V22" stroke="#9EC5AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#9EC5AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 9H2V21H6V9Z" stroke="#9EC5AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#9EC5AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#9EC5AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="#9EC5AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="47" viewBox="0 0 2 47" fill="none">
                    <path d="M1 1V46" stroke="#32746D" strokeWidth="2" strokeLinecap="round" />
                </svg>

                {/* Resume */}
                <ShineButton
                    href="https://drive.google.com/file/d/1PDiXc6aaLOuUVC30Qh0plwimiEx2Dnnf/view?usp=sharing"
                    label="Resume"
                />
            </div>
        </section>
    )
}
