"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const works = [
  {
    id: 1,
    title: "Villagepepro (Group Project)",
    description:
      "A fintech platform for seamless payments, wallet integration, and transaction management.",
    img: "/gmax-fintech.jpg",
    link: "https://villagepepro.com/",
  },
  {
    id: 2,
    title: "Neuva Life Sciences (Group Project)",
    description:
      "Website for a baby care products company, showcasing their product range and e-commerce features.",
    img: "/baby_image.jpg",
    link: "https://www.neuvalifesciences.com/",
  },
  {
    id: 3,
    title: "CCIE Labs (Group Project)",
    description:
      "Training center website for networking certifications with course details and enrollment features.",
    img: "/training-center.jpeg",
    link: "https://ccielab.net/",
  },
  {
    id: 4,
    title: "Home Pitara (Group Project)",
    description:
      "A real estate project that helps users discover, compare, and connect with property listings.",
    img: "/Home-image.jpeg",
    link: "https://homepitara.com/",
  },
  {
    id: 5,
    title: "Coming Soon",
    description:
      "Exciting new project under development. Stay tuned for updates.",
    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&w=1000&q=80",
    link: "https://www.pexels.com/search/website%20background/",
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
    <div
      className={`min-h-screen mt-14 bg-gradient-to-b flex flex-col items-center px-2 sm:px-4 md:px-8 ${
        theme === "dark"
          ? "from-purple-900 to-slate-950"
          : "from-sky-200 to-sky-400"
      } `}
    >
      {/* Section Title */}
      <section className="text-center my-8 sm:my-10 px-2 sm:px-6 w-full max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">My Projects</h2>
        <p
          className={`mt-2 max-w-2xl mx-auto text-sm sm:text-base md:text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Explore a showcase of projects I have worked on — including fintech
          applications, e-commerce platforms, training center websites, and real
          estate solutions. These works highlight my skills in React, Node.js,
          and full-stack development while solving real-world problems.
        </p>
      </section>

      <div
        className={`fixed z-20 top-4 right-4 sm:top-1/3 sm:right-4 sm:-translate-y-1/2 flex flex-col shadow-lg rounded-xl p-2 backdrop-blur-2xl ${
          theme === "dark" ? " bg-purple-700" : "bg-blue-500"
        }`}
      >
        {isPaused ? (
          <button
            onClick={() => setIsPaused(false)}
            className={`p-2 rounded-lg transition cursor-pointer ${
              theme === "dark"
                ? "bg-purple-700 hover:border-amber-50"
                : "bg-blue-500 hover:border-amber-50"
            }`}
          >
            <FaPlay className="text-gray-200" />
          </button>
        ) : (
          <button
            onClick={() => setIsPaused(true)}
            className={`p-2 rounded-lg transition cursor-pointer ${
              theme === "dark"
                ? "bg-purple-700 hover:border-amber-50"
                : "bg-blue-500 hover:border-amber-50"
            }`}
          >
            <FaPause className="text-gray-200" />
          </button>
        )}
      </div>

      <div className="relative w-full overflow-x-auto py-6 sm:py-10">
        <div className={`flex gap-4 sm:gap-6 w-max ${isPaused ? "" : "marquee"}`}>
          {[...works, ...works].map((work, i) => (
            <div
              key={i}
              className="relative min-w-[220px] sm:min-w-[280px] max-w-xs sm:max-w-sm flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-40 sm:h-60 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-amber-300">
                  {work.title}
                </h3>
                <p className="text-xs sm:text-sm mt-1 text-center">{work.description}</p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 w-full items-center justify-center">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition w-full sm:w-auto text-center"
                  >
                    View Project
                  </a>
                  <button
                    onClick={() => handleCopy(work.link, i)}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition"
                  >
                    {copied === i ? "✔" : <FiCopy size={16} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
