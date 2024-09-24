import React from "react";
import { FiTruck, FiCreditCard, FiHeadphones } from "react-icons/fi";

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
  return (
    <div className="bg-slate-800 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold font-sans tracking-tighte">
          Our Services
        </h1>
        <p className="text-slate-400 mt-4 text-lg">
          Discover what we can do for you.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col items-center justify-center space-y-8 px-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              } justify-between w-full max-w-6xl p-8 bg-slate-900 bg-opacity-60 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out`}
          >
            {/* Icon */}
            <div className="mb-4 md:mb-0 flex-shrink-0">
              {service.icon}
            </div>

            {/* Text content */}
            <div className={`text-center md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-slate-400 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
