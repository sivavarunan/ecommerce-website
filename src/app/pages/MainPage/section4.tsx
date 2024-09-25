import React from "react";

const Section4 = () => {
  return (
    <div className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800 text-white py-16 px-8 h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Column: Image */}
        <div className="relative lg:w-1/2 w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/photo7.png"
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Column: About Us Text with Title */}
        <div className="lg:w-1/2 text-left flex flex-col space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-5xl font-bold font-sans tracking-tight">
              About Us
            </h1>
          </div>

          {/* About Us Text */}
          <p className="text-lg leading-relaxed text-slate-300">
            We are dedicated to delivering the best products and services to
            our customers. Our mission is to provide high-quality, innovative
            products while ensuring excellent customer support and fast
            delivery. With years of experience in the industry, we strive to
            meet and exceed your expectations.
          </p>
          <p className="text-lg leading-relaxed text-slate-300">
            Our team works hard to stay ahead of industry trends and offer the
            latest and greatest products to our customers. We value trust,
            transparency, and customer satisfaction above all else.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
