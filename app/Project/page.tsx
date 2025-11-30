"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FiCopy } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Villagepepro",
    description:
      "A fintech platform for seamless payments, wallet integration, and transaction management.",
    img: "/gmax-fintech.jpg",
    link: "https://villagepepro.com/",
  },
  {
    id: 2,
    title: "Neuva Life Sciences",
    description:
      "Website for a baby care products company, showcasing their product range and e-commerce features.",
    img: "/baby_image.jpg",
    link: "https://www.neuvalifesciences.com/",
  },
  {
    id: 3,
    title: "CCIE Labs",
    description:
      "Training center website for networking certifications with course details and enrollment features.",
    img: "/training-center.jpeg",
    link: "https://ccielab.net/",
  },
  {
    id: 4,
    title: "Home Pitara",
    description:
      "A real estate project that helps users discover, compare, and connect with property listings.",
    img: "/Home-image.jpeg",
    link: "https://homepitara.com/",
  },
  {
    id: 5,
    title: "Samgamam Banking Solutions",
    description:
      "A cooperative banking web platform enabling digital account, deposit, and fund management.",
    img: "cooperative_bank.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Coming Soon",
    description:
      "Another upcoming project in progress. Details will be revealed shortly.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&w=1000&q=80",
    link: "https://www.pexels.com/search/website%20background/",
  },
];

export default function Project() {
  const { theme, setTheme } = useTheme();
  const [isPaused, setIsPaused] = useState(false);
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
        <source src={theme === "dark" ? "project-bg.mp4" : "project-bg-light.mp4"} type="video/mp4" />
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
                key={p.title}
                className="bg-white/70 dark:bg-black/40 backdrop-blur-lg 
            rounded-2xl shadow-lg p-4 border 
            border-gray-200 dark:border-gray-700 
            hover:scale-105 transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-xl w-full h-48 object-cover"
                />
                <h2 className="text-xl font-semibold mt-4">{p.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-4">
                  {p.description}
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={p.link}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Live Demo
                  </a>

                  <button
                    onClick={() => handleCopy(p.link, i)}
                    className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition"
                  >
                    {copied === i ? "✔" : <FiCopy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
