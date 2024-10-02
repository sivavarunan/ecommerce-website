"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { LinkProps } from "next/link"; // Import LinkProps type

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-cyan-300 bg-opacity-30 dark:bg-gradient-to-b from-cyan-700 via-cyan-800 to-cyan-950 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Menu Component with Logo and Login Button
export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center justify-between px-4 py-3 rounded-full shadow-xl shadow-cyan-950 backdrop-blur-lg"
      style={{
        background:
          'linear-gradient(to top left, rgba(0, 139, 139, 0.4), rgba(0, 255, 255, 0.4))',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        title="Logo"
        className="flex items-center space-x-2 bg-neutral-500 hover:bg-cyan-800 bg-opacity-60 shadow-lg rounded-2xl transform hover:scale-105 transition-transform px-2"
      >
        <div className="flex-shrink-0">
          <Image
            src="/screw.png"
            width={32}
            height={32}
            alt="Logo"
            className="rounded-full py-1"
          />
        </div>
        <span className="text-black text-sm font-medium">Logo</span>
      </Link>

      {/* Menu items for larger screens */}
      <div
        className={`hidden lg:flex flex-grow items-center ml-20 justify-center space-x-4 transition-transform duration-300`}
      >
        {children}
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 mr-20  text-gray-700 dark:text-gray-300 hover:text-cyan-400"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Search Bar and Cart Icon Container */}
      <div className="relative flex items-center space-x-2">
        {/* Search Bar */}
        <div className="relative">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-cyan-400"
          >
            <FaSearch />
          </button>
          <motion.div
            className={`absolute right-0 top-full mt-2 transition-transform ${isSearchOpen ? 'w-96 opacity-100' : 'w-0 opacity-0'
              }`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isSearchOpen ? '24rem' : '0', opacity: isSearchOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search..."
              className="md:w-full w-24 p-2 right-8 bg-white bg-opacity-10 absolute bottom-1 rounded-full border-transparent focus:border-cyan-600 shadow-lg"
            />
          </motion.div>
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 p-2">
          <FaShoppingCart />
        </Link>

        {/* Login Button */}
        <Link
          href="/pages/Login"
          className="px-4 py-1 bg-neutral-300 text-black rounded-full hover:bg-cyan-800 transition-all"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Options */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 mt-20 z-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg  lg:hidden">
          {/* Mobile Menu Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-400"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-2">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {});
              }
              return null;
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

// ProductItem Component
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// Updated HoveredLink Component with proper typing
export const HoveredLink = ({
  children,
  ...rest
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
