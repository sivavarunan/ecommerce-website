'use client'
import React from "react";
import { NavbarComponent } from "@/app/components/ui/NavBar";
import Section2 from "./section2";
import Section3 from "./Section3";
import { ImageSliderComp } from "./heroSection";
// import Section1 from "./section1";
import MainSection from "./MainSection";

const HomePage = () => {
    return (
        <div>
            <div className="">
                <NavbarComponent />
            </div>
            <div>
                <MainSection />
            </div>
            <div>
                <ImageSliderComp />
            </div>
            <div>
                <Section2 />
            </div>
            <div>
                <Section3 />
            </div>
        </div >
    );
}

export default HomePage;
