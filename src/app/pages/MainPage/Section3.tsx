import React from "react";
import { FiTruck, FiCreditCard, FiHeadphones } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "We provide swift and reliable delivery services to ensure your products reach you on time.",
    icon: <FiTruck className="w-12 h-12 text-cyan-500" />,
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "All transactions are encrypted and secure for your peace of mind.",
    icon: <FiCreditCard className="w-12 h-12 text-cyan-500" />,
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description: "Our support team is available around the clock to assist you with any issues or questions.",
    icon: <FiHeadphones className="w-12 h-12 text-cyan-500" />,
  },
];

const Section3 = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="dark:bg-slate-800 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl font-bold font-sans tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="dark:text-slate-400 text-slate-600 mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover what we can do for you.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col items-center justify-center space-y-8 px-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              } justify-between w-full max-w-6xl p-8 bg-slate-400 dark:bg-slate-900 bg-opacity-60 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Icon */}
            <div className="mb-4 md:mb-0 flex-shrink-0">
              {service.icon}
            </div>

            {/* Text content */}
            <div className={`text-center md:text-${index % 2 === 0 ? "right" : "left"}`}>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-slate-800 dark:text-slate-400 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
