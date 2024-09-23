'use client'
import React from "react";
import { NavbarComponent } from "@/app/components/ui/NavBar";
import Section2 from "./section2";
import Section3 from "./Section3";
import { ImageSliderComp } from "./heroSection";
// import Section1 from "./section1";
import MainSection from "./MainSection";
import Section4 from "./section4";
import Section5 from "./section5";
import Footer from "@/app/footer";

const HomePage = () => {
    return (
        <div>
            <div>
                <NavbarComponent />
            </div>
            <div id="main-section">
                <MainSection />
            </div>
            <div id="shop-section">
                <Section2 />
            </div>
            <div id="services-section">
                <Section3 />
            </div>
            <div id="about-us-section">
                <Section4 />
            </div>
            <div id="contact-section">
                <Section5 />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
