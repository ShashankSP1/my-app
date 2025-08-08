"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="fixed-top flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-500">
        <img src="/developer.png" alt="icon" className="w-12 h-10 cursor-pointer " />
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="hidden md:flex gap-2 text-white font-medium mr-10">
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <Link href="/">Home</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/About">About</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/Project">Projects</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/Collaboration">Collaboration</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/Contact">Contact</Link>
          </button>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-3 bg-white text-black md:hidden">
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
            <Link href="/About">Home</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/About">About</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/Project">Projects</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/Collaboration">Collaboration</Link>
          </button>
          <button className="cursor-pointer hover:bg-purple-400 rounded-3xl px-4 py-2">
          <Link href="/Contact">Contact</Link>
          </button>
        </ul>
      )}
    </nav>
  );
}
