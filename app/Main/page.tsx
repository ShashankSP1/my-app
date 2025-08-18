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
      <div className="flex flex-col z-10 md:flex-row items-center justify-center min-h-screen px-4 py-10">
        {/* Left Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/professional_image.png"
            alt="Profile"
            className="rounded-[40px] w-[300px] md:w-[400px] object-cover mt-10"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left px-4">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-cyan-400" : "text-cyan-800"
            }`}
          >
            Shashank S P
          </h1>

          <p className="text-lg leading-relaxed mb-6 max-w-xl">
            I am a passionate and results-driven{" "}
            <span
              id="element"
              className={`${
                theme === "dark" ? "text-blue-400" : "text-blue-800"
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
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer transition-all text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-blue-400"
            >
              My Resume
            </button>

            {/* Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg shadow-lg w-[80%] max-w-xl">
                  {/* Close Button */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Resume Preview</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 cursor-pointer hover:text-gray-900 text-lg font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {/* PDF Preview */}
                  <iframe
                    src="/Shashank_SP_Resume.pdf"
                    title="Resume Preview"
                    className="w-full h-[400px] border rounded"
                  ></iframe>

                  {/* Download Button */}
                  <div className="mt-4 flex justify-end">
                    <a
                      href="/Shashank_SP_Resume.pdf"
                      download
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
