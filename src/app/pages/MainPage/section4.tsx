import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Section4 = () => {
  // Animation Variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="dark:bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800 text-white py-12 px-6 md:py-16 md:px-8 h-auto flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Column: Image */}
        <motion.div
          className="relative w-full h-48 sm:h-64 md:h-80 lg:w-1/2 lg:h-96 rounded-xl overflow-hidden shadow-lg"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            width={1200}
            height={800}
            src="/photo7.png"
            alt="About Us"
            className="object-cover w-full h-full"
          />

        </motion.div>

        {/* Right Column: About Us Text with Title */}
        <motion.div
          className="lg:w-1/2 w-full text-left flex flex-col space-y-6"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-black dark:text-white tracking-tight">
              About Us
            </h1>
          </div>

          {/* About Us Text */}
          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            We are dedicated to delivering the best products and services to
            our customers. Our mission is to provide high-quality, innovative
            products while ensuring excellent customer support and fast
            delivery. With years of experience in the industry, we strive to
            meet and exceed your expectations.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Our team works hard to stay ahead of industry trends and offer the
            latest and greatest products to our customers. We value trust,
            transparency, and customer satisfaction above all else.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
