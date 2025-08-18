"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBirthdayCake,
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
const about = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    { src: "/favicon.png", alt: "React" },
    { src: "/favicon.png", alt: "Java" },
    { src: "/favicon.png", alt: "Node.js" },
    { src: "/favicon.png", alt: "JavaScript" },
    { src: "/favicon.png", alt: "CSS" },
    { src: "/favicon.png", alt: "HTML" },
    { src: "/favicon.png", alt: "Express.js" },
    { src: "/favicon.png", alt: "MongoDB" },
    { src: "/favicon.png", alt: "Tailwind" },
    { src: "/favicon.png", alt: "Git" },
  ];

  const repeatedLogos = [...skills, ...skills, ...skills, ...skills];

  return (
    <>
      <div className="flex flex-col z-10 md:flex-row justify-center min-h-screen px-4 py-36 gap-8">
        {/* Left - Education */}
        <div className="md:w-1/2 flex flex-col items-center">
          <h1
            className={`${
              theme === "dark" ? "text-blue-700" : "text-blue-700"
            } text-4xl font-bold mb-8 border-b-2`}
          >
            Education Details
          </h1>

          <div className="space-y-6 w-[90%]">
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
          </ul>
        </div>
      </div>
      <div className=" max-w-7xl justify-center ml-14">
        <h1
          className={`${
            theme === "dark" ? "text-blue-700" : "text-blue-700"
          } text-4xl font-bold mb-8 border-b-2`}
        >
          Technologies I work with
        </h1>

        <div className="w-full overflow-hidden mx-4 gap-20 py-10">
          <div className="marquee flex items-center">
            <ul className='flex items-center gap-8 lg:gap-20 [&_li]:mx-16 [&_img]:max-w-none'>
              <li><img src='img/WeSupport_visa.png' alt='Visa' /></li>
              <li><img src='img/WeSupport_mc.png' alt='Mastercard' /></li>
              <li><img src='img/WeSupport_rupay.png' alt='Rupay' /></li>
              <li><img src='img/WeSupport_upi.png' alt='UPI' /></li>
              <li><img src='img/weSupport_Bp.png' alt='BharathPe' /></li>
              <li><img src='img/WeSupport_visa.png' alt='Visa' /></li>
              <li><img src='img/WeSupport_mc.png' alt='Mastercard' /></li>
              <li><img src='img/WeSupport_rupay.png' alt='Rupay' /></li>
              <li><img src='img/WeSupport_upi.png' alt='UPI' /></li>
              <li><img src='img/weSupport_Bp.png' alt='BharathPe' /></li>
            </ul>
            <ul className='flex items-center gap-8 lg:gap-20 [&_li]:mx-16 [&_img]:max-w-none'>
              <li><img src='img/WeSupport_visa.png' alt='Visa' /></li>
              <li><img src='img/WeSupport_mc.png' alt='Mastercard' /></li>
              <li><img src='img/WeSupport_rupay.png' alt='Rupay' /></li>
              <li><img src='img/WeSupport_upi.png' alt='UPI' /></li>
              <li><img src='img/weSupport_Bp.png' alt='BharathPe' /></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default about;
