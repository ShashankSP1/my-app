"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  const toggleMenu = () => setIsOpen(!isOpen);
  if (!mounted) return null;

  return (
    <nav>
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-3 sm:px-6 py-3 sm:py-4 z-50 shadow-lg backdrop-blur-md transition-all duration-300
  ${
    theme === "dark"
      ? "bg-transparent border-b border-white/10"
      : "bg-transparent border-b border-gray-300/20"
  }`}
      >
        <img
          src="nav-icon.png"
          alt="icon"
          className="w-36 sm:w-48 md:w-60 lg:w-72 h-10 sm:h-12 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 lg:gap-4 items-center">
          <li>
            <Link href="/">
              <button
                className={`text-sm lg:text-base cursor-pointer rounded-3xl px-3 py-1.5 lg:px-4 lg:py-2 transition-colors duration-200 ${
                  theme === "dark"
                    ? "hover:bg-blue-900/60 hover:text-white"
                    : "hover:bg-blue-100 hover:text-blue-700"
                } ${
                  pathname === "/"
                    ? "font-semibold text-rose-600"
                    : ""
                } `}
              >
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <button
                className={`text-sm lg:text-base cursor-pointer rounded-3xl px-3 py-1.5 lg:px-4 lg:py-2 transition-colors duration-200 ${
                  theme === "dark"
                    ? "hover:bg-blue-900/80"
                    : "hover:bg-gray-300/80"
                }
                ${
                  pathname === "/About"
                    ? "font-semibold text-rose-600"
                    : ""
                } `}
              >
                About
              </button>
            </Link>
          </li>
          <li>
            <Link href="/Project">
              <button
                className={`text-sm lg:text-base cursor-pointer rounded-3xl px-3 py-1.5 lg:px-4 lg:py-2 transition-colors duration-200 ${
                  theme === "dark"
                    ? "hover:bg-blue-900/80"
                    : "hover:bg-gray-300/80"
                }
                ${
                  pathname === "/Project"
                    ? "font-semibold text-rose-600"
                    : ""
                }`}
              >
                Projects
              </button>
            </Link>
          </li>
          <li>
            <Link href="/Blog">
              <button
                className={`text-sm lg:text-base cursor-pointer rounded-3xl px-3 py-1.5 lg:px-4 lg:py-2 transition-colors duration-200 ${
                  theme === "dark"
                    ? "hover:bg-blue-900/80"
                    : "hover:bg-gray-300/80"
                }
                ${
                  pathname === "/Blog"
                    ? "font-semibold text-rose-600"
                    : ""
                }`}
              >
                Blog
              </button>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <button
                className={`text-sm lg:text-base cursor-pointer rounded-3xl px-3 py-1.5 lg:px-4 lg:py-2 transition-colors duration-200 ${
                  theme === "dark"
                    ? "hover:bg-blue-900/80"
                    : "hover:bg-gray-300/80"
                }
                ${
                  pathname === "/Contact"
                    ? "font-semibold text-rose-600"
                    : ""
                }`}
              >
                Contact
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`ml-2 flex items-center w-10 h-5.5 rounded-full p-1 transition-colors duration-300 border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                theme === "dark" ? "bg-white" : "bg-gray-900"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  theme === "dark"
                    ? "translate-x-3.5 bg-amber-600"
                    : "translate-x-0 bg-white"
                }`}
              >
                {theme === "dark" ? (
                  <FaMoon
                    className="text-amber-50 transition-opacity duration-300 opacity-100"
                    size={12}
                  />
                ) : (
                  <FaSun
                    className="text-black transition-opacity duration-300 opacity-100"
                    size={12}
                  />
                )}
              </span>
            </button>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div
          className={`text-2xl cursor-pointer md:hidden p-2 rounded-full transition-colors duration-200 ${
            isOpen
              ? theme === "dark"
                ? "bg-blue-900/80"
                : "bg-gray-300/80"
              : ""
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FaTimes
              className={` ${
                theme === "dark" ? "text-gray-100" : "text-black"
              }`}
            />
          ) : (
            <FaBars
              className={`text-blue-900 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 h-full w-3/4 z-40 sm:w-1/2 md:hidden backdrop-blur-lg shadow-2xl transform transition-transform duration-500 ${
          isOpen
            ? "visible opacity-100 translate-x-0"
            : "invisible opacity-0 translate-x-full"
        }
        `}
      >
        <ul
          className={`flex flex-col gap-3 bg-white/80 dark:bg-gray-900/80 text-black dark:text-white p-6 pt-24 min-h-screen w-full shadow-2xl backdrop-blur-xl transition-all duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`ml-4 flex items-center w-12 h-6 rounded-full p-1 transition-colors duration-300 border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400 ${
                theme === "dark" ? "bg-white" : "bg-gray-950"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  theme === "dark"
                    ? "translate-x-5.5 bg-black"
                    : "translate-x-0 bg-white"
                }`}
              >
                {theme === "dark" ? (
                  <FaMoon
                    className="text-amber-50 transition-opacity duration-300 opacity-100"
                    size={10}
                  />
                ) : (
                  <FaSun
                    className="text-black transition-opacity duration-300 opacity-100"
                    size={14}
                  />
                )}
              </span>
            </button>
          </li>

          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className="hover:bg-purple-400/80 rounded-3xl px-4 py-2 block text-lg transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              onClick={toggleMenu}
              className="block text-lg font-medium px-5 py-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Project"
              onClick={toggleMenu}
              className="hover:bg-purple-400/80 rounded-3xl px-4 py-2 block text-lg transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/Blog"
              onClick={toggleMenu}
              className="hover:bg-purple-400/80 rounded-3xl px-4 py-2 block text-lg transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              onClick={toggleMenu}
              className="hover:bg-purple-400/80 rounded-3xl px-4 py-2 block text-lg transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
