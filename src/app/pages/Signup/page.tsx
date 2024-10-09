'use client'
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 bg-gray-50">
      <div className="w-96 h-5/6 p-6 space-y-6 bg-slate-300 bg-opacity-20 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium dark:text-slate-300 text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-1 mt-1 text-gray-900 bg-cyan-300 bg-opacity-10 border-0 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium dark:text-slate-300 text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-1 mt-1 text-gray-900 bg-cyan-300 bg-opacity-10 border-0 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium dark:text-slate-300 text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-3 py-1 mt-1 text-gray-900 bg-cyan-300 bg-opacity-10 border-0 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <Link href="/pages/Login" className="text-cyan-500 hover:text-cyan-700">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
