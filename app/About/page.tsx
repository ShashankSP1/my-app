"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBirthdayCake,
  FaClock,
  FaLanguage,
  FaLaptopHouse,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";

const date = () => {
  const birthDate = new Date("2001-12-04");
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years ${months} months ${days} days`;
};

const exp = () => {
  const startDate = new Date("2025-03-04");
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years ${months} months`;
};
const about = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    { src: "/java.webp", alt: "Java" },
    { src: "/mongodb.webp", alt: "MongoDB" },
    { src: "/my_sql.webp", alt: "MySQL" },
    { src: "/react.webp", alt: "React.js" },
    { src: "/node.js.png", alt: "Node.js" },
    { src: "/postgres.webp", alt: "PostGreSQL" },
    { src: "/javascript.png", alt: "JavaScript" },
    { src: `${theme === "dark" ? "/github.svg" : "/github.png"}`, alt: "Git" },
    {
      src: `${theme === "dark" ? "/express.js.png" : "/expressjs.png"}`,
      alt: "Express.js",
    },
    { src: "/IntelliJ_IDEA.png", alt: "Intellij_IDEA" },
    { src: "/vscode.png", alt: "VS Code" },
    {
      src: `${theme === "dark" ? "/jQuery-dark.png" : "/jQuery.png"}`,
      alt: "Express.js",
    },
    { src: "/postman-logo.png", alt: "Postman" },
    { src: "/gitlab.png", alt: "GitLab" },
  ];

  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Zeksta Technology Pvt Ltd",
      duration: "March 2025 - Present",
      description: [
        "Building scalable web apps using React, Node.js, Express, and MongoDB.",
        "Worked on complaint management system, recipient form, and UI responsiveness.",
        "Collaborated with team in an Agile environment to deliver features.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "FreeLancer",
      duration: "September 2025 - Present",
      description: [
        "Developed and customized websites for small businesses.",
        "Ensured responsive design and SEO optimization.",
      ],
    },
    {
      role: "Java Full Stack Trainee",
      company: "Training Program",
      duration: "June 2023 - September 2023",
      description:
        "Completed 4-month Java Full Stack course (Core Java, HTML, CSS, JavaScript and MySQL) and built simple projects.",
    },
  ];

  const repeatedLogos = [...skills, ...skills];

  return (
    <>
      <div className="flex flex-col max-w-[95%] mx-auto z-10 md:flex-row justify-center min-h-screen px-4 py-36 gap-8">
        {/* Left - Education */}
        <div className="md:w-1/2 flex flex-col">
          <h1
            className={`${
              theme === "dark" ? "text-blue-700" : "text-blue-700"
            } text-4xl font-bold mb-8 border-b-2`}
          >
            Education
          </h1>

          <div className="space-y-6 w-[90%] items-center">
            {/* Degree */}
            <div
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-blue-950"
              } shadow-lg rounded-lg p-5 border-l-4 border-red-500 hover:scale-105 hover:shadow-xl transition-transform duration-300`}
            >
              <h2 className="text-lg font-semibold text-yellow-300">
                UBDT College of Engineering, Davanagere, Karnataka
              </h2>
              <p className="text-white">Bachelor of Engineering</p>
              <p className="text-gray-500 dark:text-gray-300">
                7.63 CGPA | Aug 2019 - May 2023
              </p>
            </div>

            {/* 12th */}
            <div
              className={`${
                theme === "dark" ? "bg-gray-800" : "bg-blue-950"
              } shadow-lg rounded-lg p-5 border-l-4 border-green-500 hover:scale-105 hover:shadow-xl transition-transform duration-300`}
            >
              <h2 className="text-lg font-semibold text-yellow-300">
                Government PU College, Anavatti, Karnataka
              </h2>
              <p
                className={` ${
                  theme === "dark" ? "text-amber-50" : "text-white"
                }`}
              >
                Pre University Education
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                Percentage: 81% | 2017 - 2019
              </p>
            </div>

            {/* 10th */}
            <div
              className={` ${
                theme === "dark" ? "bg-gray-800" : "bg-blue-950"
              } shadow-lg rounded-lg p-5 border-l-4 border-yellow-500 hover:scale-105 hover:shadow-xl transition-transform duration-300`}
            >
              <h2 className="text-lg font-semibold text-yellow-300">
                Morarji Desai Residential School, Churchigundi, Karnataka
              </h2>
              <p className="text-white">SSLC</p>
              <p className="text-gray-500 dark:text-gray-300">
                Percentage: 92% | 2016 - 2017
              </p>
            </div>
          </div>
        </div>

        {/* Right - Personal Details */}
        <div className="md:w-1/2 flex flex-col px-4">
          <h1
            className={`${
              theme === "dark" ? "text-blue-700" : "text-blue-700"
            } text-4xl font-bold mb-8 border-b-2`}
          >
            Personal Details
          </h1>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2">
              <FaUser className="text-blue-500" />{" "}
              <span className="font-semibold">Name:</span> Shashank S P
            </li>
            <li className="flex items-center gap-2">
              <FaBriefcase className="text-green-500" />{" "}
              <span className="font-semibold">Role:</span> Software Engineer
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />{" "}
              <span className="font-semibold">Location:</span> Bengaluru,
              Karnataka
            </li>
            <li className="flex items-center gap-2">
              <FaGraduationCap className="text-purple-500" />{" "}
              <span className="font-semibold">Education:</span> Bachelor of
              Engineering
            </li>
            <li className="flex items-center gap-2">
              <FaBirthdayCake className="text-pink-500" />{" "}
              <span className="font-semibold">Age:</span> {date()}
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-yellow-500" />{" "}
              <span className="font-semibold">Year of Experience:</span> {exp()}
            </li>
            <li className="flex items-center gap-2">
              <FaLanguage className="text-blue-600" />{" "}
              <span className="font-semibold">Languages:</span>Kannada, English,
              and Hindi
            </li>
            <li className="flex items-center gap-2">
              <FaLaptopHouse className="text-green-600" />{" "}
              <span className="font-semibold">Open to:</span>Remote roles and
              freelance projects
            </li>
            <li className="flex items-center gap-2">
              <FaLightbulb className="text-yellow-400" />{" "}
              <span className="font-semibold">Interests:</span>Web Development,
              Coding, DevOps
            </li>
          </ul>
        </div>
      </div>
      <div className=" max-w-[90%] mx-auto px-4">
        <h1
          className={`${
            theme === "dark" ? "text-blue-700" : "text-blue-700"
          } text-4xl font-bold mb-8 border-b-2`}
        >
          Technologies I work with
        </h1>

        <div className="relative overflow-hidden w-full h-20">
          <div className="absolute animate-marquee flex gap-14 whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <img
                key={index}
                src={skill.src}
                alt={skill.alt}
                className="h-12 w-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className={`text-3xl font-bold mb-12 text-center drop-shadow-lg ${
              theme === "dark" ? "text-fuchsia-100" : "text-blue-900"
            }`}
          >
            Experience
          </h2>

          <div
            className={`relative border-l-8 pl-8 space-y-12 ${
              theme === "dark" ? "border-fuchsia-700" : "border-green-400"
            }`}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-12 -top-0.5 w-6 h-6 rounded-full border-4 ${
                    theme === "dark"
                      ? "bg-fuchsia-700 border-fuchsia-300"
                      : "bg-green-400 border-green-100"
                  }`}
                ></div>

                {/* Content */}
                <div
                  className={`p-8 rounded-2xl shadow-xl border transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-900/90 border-purple-900"
                      : "bg-white/90 border-blue-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold group-hover:text-blue-600 transition-colors duration-200 ${
                      theme === "dark"
                        ? "group-hover:text-fuchsia-400 text-fuchsia-100"
                        : "text-blue-900"
                    }`}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className={`mb-2 font-semibold ${
                      theme === "dark" ? "text-fuchsia-100" : "text-blue-900"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 shadow ${
                      theme === "dark"
                        ? "bg-fuchsia-900/60 text-fuchsia-200"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {exp.duration}
                  </span>
                  {Array.isArray(exp.description) ? (
                    <ul
                      className={`list-disc ml-5 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className={`${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
