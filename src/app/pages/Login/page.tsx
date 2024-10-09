'use client'
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 bg-gray-50">
      <div className="w-96 h-5/6 p-6 space-y-6 bg-slate-300 dark:bg-opacity-20 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
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
              className="block w-full px-3 py-1 mt-1 text-gray-900 bg-cyan-300 bg-opacity-10 border-0 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-600"
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
              className="block w-full px-3 py-1 mt-1 text-gray-900 bg-cyan-300 bg-opacity-10 border-0 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <Link href="/pages/Signup" className="text-cyan-600 hover:text-cyan-700">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
