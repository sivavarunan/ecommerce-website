import React from "react";

const Section4 = () => {
  return (
    <div className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800 text-white py-16 px-8">
      {/* Title */}
      <div className="text-4xl  font-semibold font-mono text-white p-4 ml-24">
        <h1 className="mb-10">About Us</h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/photo3.png"
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>

        {/* About Us Text */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-lg leading-relaxed">
            We are dedicated to delivering the best products and services to
            our customers. Our mission is to provide high-quality, innovative
            products while ensuring excellent customer support and fast
            delivery. With years of experience in the industry, we strive to
            meet and exceed your expectations.
          </p>
          <p className="text-lg leading-relaxed">
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
