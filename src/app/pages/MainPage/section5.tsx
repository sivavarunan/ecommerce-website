import React from "react";

const Section5 = () => {
  return (
    <div className="bg-gradient-to-t from-slate-950 via-900 to-slate-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0">
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 text-left space-y-6">
          <h1 className="text-5xl font-bold font-sans tracking-tight">Get In Touch</h1>
          <p className="text-lg text-slate-400 max-w-md leading-relaxed">
            We are here to assist you. Whether you have questions, suggestions, or feedback, feel free to reach out to us.
            Our team is always happy to help, and we'll get back to you as soon as we can.
          </p>
          <p className="text-lg text-slate-400 max-w-md leading-relaxed">
            You can also email us directly at <span className="text-cyan-500">support@company.com</span> or give us a call at <span className="text-cyan-500">+123 456 7890</span>.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2 bg-slate-800 p-10 rounded-3xl shadow-2xl shadow-cyan-700/50">
          <form className="space-y-8">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full p-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:ring-4 focus:ring-cyan-500 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 tracking-wide">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full p-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:ring-4 focus:ring-cyan-500 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full p-4 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:ring-4 focus:ring-cyan-500 transition-all"
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
        </div>
      </div>
    </div>
  );
};

export default Section5;
