'use client';
import React from "react";
import { NavbarComponent } from "@/app/components/ui/NavBar";
import Section2 from "./section2";
import Section3 from "./Section3";
import { ImageSliderComp } from "./heroSection";
import MainSection from "./MainSection";
import Section4 from "./section4";
import Section5 from "./section5";
import Footer from "@/app/footer";
import { motion } from 'framer-motion';

const HomePage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
       
        <div >
            <NavbarComponent />
            <motion.div
                id="main-section"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <MainSection />
            </motion.div>
            <motion.div
                id=""
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <ImageSliderComp />
            </motion.div>
            <Section2 />
            <div id="services-section">
                <Section3 />
            </div>
            <div id="about-us-section">
                <Section4 />
            </div>
            <div id="contact-section">
                <Section5 />
            </div>
            <Footer />
        </div>
    
    );
};

export default HomePage;
