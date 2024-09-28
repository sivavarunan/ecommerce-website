import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="dark:bg-gradient-to-t from-slate-950 via-900 to-slate-900 text-white py-12 px-6 md:py-16 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Column: Text Content */}
        <motion.div
          className="lg:w-1/2 w-full text-left space-y-6"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight dark:text-white text-black">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg dark:text-slate-400 text-slate-700 max-w-md leading-relaxed">
            We are here to assist you. Whether you have questions, suggestions,
            or feedback, feel free to reach out to us. Our team is always happy
            to help, and we&apos;ll get back to you as soon as we can.
          </p>
          <p className="text-base md:text-lg dark:text-slate-400 text-slate-700 max-w-md leading-relaxed">
            You can also email us directly at{" "}
            <span className="text-cyan-500">support@company.com</span> or give
            us a call at <span className="text-cyan-500">+123 456 7890</span>.
          </p>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="lg:w-1/2 w-full bg-slate-800 p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl shadow-cyan-700/50"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className="space-y-6 md:space-y-8">
            {/* Name Field */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-400 tracking-wide"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full p-3 md:p-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:ring-4 focus:ring-cyan-500 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-400 tracking-wide"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full p-3 md:p-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:ring-4 focus:ring-cyan-500 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 tracking-wide"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full p-3 md:p-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:ring-4 focus:ring-cyan-500 transition-all"
                placeholder="Write your message here..."
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Section5;
