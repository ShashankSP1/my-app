"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-500">
        <img src="/developer.png" alt="icon" className="w-12 h-10 cursor-pointer " />
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="hidden md:flex gap-2 text-white font-medium mr-10">
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <a className="" href="/">
              <li className="cursor-pointer">Home</li>
            </a>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <a href="/about">
            <li className="cursor-pointer">About</li>
          </a>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <a href="/projects">
            <li className="cursor-pointer">Projects</li>
          </a>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <a href="/collaboration">
            <li className="cursor-pointer">Collaboration</li>
          </a>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <a href="/contact">
            <li className="cursor-pointer">Contact</li>
          </a>
          </button>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-3 bg-white text-black md:hidden">
          <a className="hover:text-gray-300 text-start" href="/">
            <li className="cursor-pointer ml-5 mt-3">Home</li>
          </a>
          <a href="/about">
            <li className="cursor-pointer ml-5">About</li>
          </a>
          <a href="/projects">
            <li className="cursor-pointer ml-5">Projects</li>
          </a>
          <a href="/collaboration">
            <li className="cursor-pointer ml-5">Collaboration</li>
          </a>
          <a href="/contact">
            <li className="cursor-pointer ml-5 mb-3">Contact</li>
          </a>
        </ul>
      )}
    </nav>
  );
}
