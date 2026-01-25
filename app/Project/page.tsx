"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FiCopy } from "react-icons/fi";
import Link from "next/link";
import { projects } from "./projectsData";

export default function Project() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (link: string, index: number) => {
    navigator.clipboard.writeText(link);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="relative min-h-screen mt-14 overflow-hidden">
      {/* Background Video */}
      <video
        key={theme}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source
          src={
            theme === "dark" ? "/videoproject1.mp4" : "/videoproject1.mp4"
          }
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div
        className={`absolute inset-0 
      ${theme === "dark" ? "bg-black/50" : "bg-white/50"} 
      backdrop-blur-sm`}
      ></div>

      {/* Actual Page Content */}
      <div className="relative z-10 px-2 sm:px-4 md:px-8 flex flex-col items-center">
        {/* Section Title */}
        <section className="text-center my-8 sm:my-10 w-full max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">
            My Projects
          </h2>
          <p
            className={`mt-2 max-w-2xl mx-auto text-sm sm:text-base md:text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Explore a showcase of projects I have worked on — including fintech
            applications, e-commerce platforms, training center websites, and
            real estate solutions.
          </p>
        </section>

        {/* Project Cards */}
        <section className="px-4 md:px-10 pb-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="bg-white/70 dark:bg-black/40 backdrop-blur-lg 
            rounded-2xl shadow-lg p-4 border 
            border-gray-200 dark:border-gray-700 
            hover:scale-105 transition cursor-pointer group"
              >
                <Link href={`/Project/${p.id}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-xl w-full h-48 object-cover group-hover:opacity-90 transition"
                  />
                  <h2 className="text-xl font-semibold mt-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {p.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {p.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        +{p.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </Link>

                <div className="flex gap-3 mt-4">
                  <Link
                    href={`/Project/${p.id}`}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center transition"
                  >
                    View Details
                  </Link>
                  {p.link !== "#" && (
                    <>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(p.link, i);
                        }}
                        className="w-10 h-10 cursor-pointer flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                      >
                        {copied === i ? "✔" : <FiCopy size={16} />}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
