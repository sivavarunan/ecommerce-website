'use client'
import React from "react";
import Link from "next/link";
import { NavbarComponent } from "@/app/components/ui/NavBar";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";

const HomePage = () => {
    return (
        <div>
            <div className="">
                <NavbarComponent />
            </div>
            <LampContainer className="mt-20">
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="top-10 dark:bg-gradient-to-br bg-cyan-900 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Welcome <br /> to the website <br />
                    <Link href="/shop">
                            <button className="mt-6 px-6 py-2 text-base font-semibold text-white bg-cyan-600 rounded-full shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Shop
                            </button>
                        </Link>
                </motion.div>
            </LampContainer>
        </div >
    );
}

export default HomePage;
