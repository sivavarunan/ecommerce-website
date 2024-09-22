import React from "react";

const Section5 = () => {
  return (
    <div className="bg-gradient-to-t from-slate-950 via-900 to-slate-900 text-white py-16 px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold font-mono">Contact Us</h1>
        <p className="text-lg text-slate-300 mt-4">
          We'd love to hear from you! Fill out the form below or reach out to us directly.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-xl shadow-lg">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-slate-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-slate-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-slate-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full mt-2 p-3 rounded-md bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section5;
