"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <footer
        className={`py-10 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-gray-100 text-gray-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Content</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/About"}>About</Link>
              </li>

              <li>
                <Link href={"/Project"}>Projects</Link>
              </li>
              <li>
                <Link href={"/Services"}>Services</Link>
              </li>
              <li>
                <Link href={"/Contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">My Projects</h3>
            <ul className="space-y-1.5">
              <li>
                <a href="#project1" className={`${theme==='dark' ? 'hover:text-white':'hover:text-black'}`}>
                  Portfolio Website
                </a>
              </li>
              <li>
                <a href="#project2" className={`${theme==='dark' ? 'hover:text-white':'hover:text-black'}`}>
                  Complaint Management System
                </a>
              </li>
              <li>
                <a href="#project3" className={`${theme==='dark' ? 'hover:text-white':'hover:text-black'}`}>
                  News App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>Garvebhavi Palya, Hosur Main</p>
            <p> Road, Bengaluru, Karnataka</p>
            <p>India - 560068</p>
            <a
              href="https://www.google.com/maps/place/Garvebhavi+Palya,+Bengaluru,+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold hover:text-blue-500 transition-colors mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c4.97-5.48 8-9.25 8-13a8 8 0 10-16 0c0 3.75 3.03 7.52 8 13z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11a3 3 0 110-6 3 3 0 010 6z"
                />
              </svg>
              Google Maps
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://github.com/ShashankSP1"
                target="_blank"
                rel="noopener noreferrer"
                className={` ${theme==="dark" ? 'hover:text-white':'hover:text-black'}`}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shashankshiva6361"
                target="_blank"
                rel="noopener noreferrer"
                className={` ${theme==="dark" ? 'hover:text-white':'hover:text-blue-600'}`}
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:shashankshiva6361@gmail.com"
                className={` ${theme==="dark" ? 'hover:text-white':'hover:text-red-600'}`}
              >
                <FaEnvelope />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={` ${theme==="dark" ? 'hover:text-white':'hover:text-blue-500'}`}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Shashank S P. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
