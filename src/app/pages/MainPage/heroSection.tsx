"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/app/components/ui/image-slider";

export function ImageSliderComp() {
    const images = ["/photo1.png",
        "/photo2.png",
        "/photo3.png",
        "/photo4.png",
        "/photo5.png",
        "/photo6.png",
        "/photo7.png",
    ]


return (
    <div className="bg-transparent h-screen flex items-center justify-center p-16">
        <ImagesSlider className="rounded-3xl border-4 border-cyan-950 w-5/6" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    All the  <br /> Games
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>Shop →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    </div>
);

}

