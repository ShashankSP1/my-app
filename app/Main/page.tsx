"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.Typed) {
        // @ts-ignore
        new window.Typed("#element", {
          strings: [
            "Web Application Developer",
            "Software Development Engineer",
            "Java Developer",
            "Full Stack Developer",
          ],
          typeSpeed: 80,
          loop: true,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        className="flex flex-col z-10 md:flex-row items-center justify-center min-h-screen px-4 py-10"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(0,0,0,0.7))"
              : "linear-gradient(135deg, #dbeafe, #ddd6fe, #fbcfe8)",
        }}
      >
        {/* Left Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/professional_image.png"
            alt="Profile"
            className="rounded-[40px] w-[260px] sm:w-[300px] md:w-[400px] object-cover mt-10 border-2 border-blue-300 dark:border-fuchsia-700 shadow-xl hover:shadow-blue-400/40 dark:hover:shadow-fuchsia-400/40 transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left px-4">
          <h1 className="text-3xl md:text-4xl mb-4 font-medium">
            Hello I'm 
            <span
              className={`text-3xl md:text-4xl font-medium bg-clip-text ml-2 text-transparent drop-shadow-[0_0_10px_rgba(255,0,255,0.4)] ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500"
                  : "bg-gradient-to-r from-blue-700 via-yellow-500 to-red-500 "
              }`}
            >
              Shashank S P
            </span>
          </h1>
          <p
            className={`text-lg leading-relaxed mb-6 max-w-xl ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            I am a passionate and results-driven{" "}
            <span
              id="element"
              className={`font-bold ${
                theme === "dark" ? "text-amber-400" : "text-blue-700"
              }`}
            ></span>
            <br />
            with a strong foundation in Java, front-end technologies, and
            database management. I excel at solving complex problems through
            innovative technology solutions and specialize in designing robust,
            scalable, and user-focused applications. My work spans multiple
            real-world projects, transforming ideas into impactful web
            applications and driving success as a dedicated Software Engineer.
          </p>

          <div>
            {/* Preview Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer bg-green-600 hover:bg-green-700 text-white outline-orange-50`}
            >
              My Resume
            </button>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl w-[90%] max-w-xl border border-blue-200 dark:border-fuchsia-900">
                  {/* Close Button */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-extrabold text-blue-900 dark:text-fuchsia-200">
                      Resume Preview
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-red-500 text-2xl font-bold transition-colors"
                      aria-label="Close resume preview"
                    >
                      ✕
                    </button>
                  </div>

                  {/* PDF Preview */}
                  <iframe
                    src="/Shashank_SP_Resume.pdf"
                    title="Resume Preview"
                    className="w-full h-[400px] border rounded-lg shadow"
                  ></iframe>

                  {/* Download Button */}
                  <div className="mt-4 flex justify-end">
                    <a
                      href="/Shashank_SP_Resume.pdf"
                      download
                      className="bg-transparent backdrop:backdrop-blur-2xl hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
