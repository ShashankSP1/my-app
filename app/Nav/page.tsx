"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="z-50">
      <div
        className={`
          fixed top-0 left-0 w-full flex justify-between items-center p-4
        `}
      >
        <img
          src="/developer.png"
          alt="icon"
          className="w-12 h-10 cursor-pointer"
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          <li>
            <button
              className={` cursor-pointer rounded-3xl px-4 py-2 ${theme === "dark" ? 'hover:bg-blue-950' : 'hover:bg-blue-500'}`}
            >
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button className={` cursor-pointer rounded-3xl px-4 py-2 ${theme === "dark" ? 'hover:bg-blue-950' : 'hover:bg-blue-500'}`}>
              <Link href="/About">About</Link>
            </button>
          </li>
          <li>
            <button className={` cursor-pointer rounded-3xl px-4 py-2 ${theme === "dark" ? 'hover:bg-blue-950' : 'hover:bg-blue-500'}`}>
              <Link href="/Project">Projects</Link>
            </button>
          </li>
          <li>
            <button className={` cursor-pointer rounded-3xl px-4 py-2 ${theme === "dark" ? 'hover:bg-blue-950' : 'hover:bg-blue-500'}`}>
              <Link href="/Collaboration">Collaboration</Link>
            </button>
          </li>
          <li>
            <button className={` cursor-pointer rounded-3xl px-4 py-2 ${theme === "dark" ? 'hover:bg-blue-950' : 'hover:bg-blue-500'}`}>
              <Link href="/Contact">Contact</Link>
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`ml-4 flex items-center w-14 h-7 rounded-full p-1 transition-colors duration-300
    ${theme === "dark" ? "bg-white" : "bg-gray-950"}`}
            >
              <span
                className={`w-5 h-5  rounded-full shadow-md transform transition-transform duration-300
      ${
        theme === "dark" ? "translate-x-7 bg-black" : "translate-x-0 bg-white"
      }`}
              />
            </button>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-3 bg-white dark:bg-gray-800 text-black dark:text-white p-4 fixed top-16 left-0 w-full z-40 md:hidden">
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className="hover:bg-purple-400 rounded-3xl px-4 py-2 block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              onClick={toggleMenu}
              className="hover:bg-purple-400 rounded-3xl px-4 py-2 block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Project"
              onClick={toggleMenu}
              className="hover:bg-purple-400 rounded-3xl px-4 py-2 block"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/Collaboration"
              onClick={toggleMenu}
              className="hover:bg-purple-400 rounded-3xl px-4 py-2 block"
            >
              Collaboration
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              onClick={toggleMenu}
              className="hover:bg-purple-400 rounded-3xl px-4 py-2 block"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mt-2 px-4 py-2 rounded-3xl transition"
            >
              Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
