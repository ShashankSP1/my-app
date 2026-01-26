"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { projects, Project } from "../projectsData";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const { theme } = useTheme();
  const [project, setProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const id = parseInt(params.id as string);
    
    // Redirect if trying to access project 6 (Coming Soon)
    if (id === 6) {
      router.push("/Project");
      return;
    }
    
    const foundProject = projects.find((p) => p.id === id);
    setProject(foundProject || null);
  }, [params.id, router]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/Project"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="relative min-h-screen mt-14 overflow-hidden">
        {/* Background Video */}
        <video
          key={theme}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 dark:opacity-20"
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
      ${theme === "dark" ? "bg-black/70" : "bg-white/80"} 
      backdrop-blur-sm`}
        ></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-8">
          {/* Back Button */}
          <Link
            href="/Project"
            className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left: Image */}
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-2xl w-full h-80 object-cover shadow-2xl border-4 border-white dark:border-gray-800"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      project.status === "completed"
                        ? "bg-green-500 text-white"
                        : project.status === "ongoing"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {project.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Right: Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h1>
                  <p className={`text-lg ${theme ==="dark" ? "text-gray-200" : "text-gray-800"}  leading-relaxed`}>
                    {project.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 ${theme === "dark" ? "bg-gray-900/80 border-gray-700 hover:border-amber-600": "bg-white/90 border-gray-400 hover:border-amber-400"} rounded-xl backdrop-blur-sm border`}>
                    <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                      Duration
                    </div>
                    <div className={`text-xl font-bold ${theme === "dark" ? "text-gray-300": "text-gray-800"}`}>
                      {project.duration}
                    </div>
                  </div>
                  <div className={`p-4 ${theme === "dark" ? "bg-gray-900/80 border-gray-600 hover:border-amber-600": "bg-white/90 border-gray-400 hover:border-amber-400"} rounded-xl backdrop-blur-sm border`}>
                    <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                      Role
                    </div>
                    <div className={`text-xl font-bold ${theme === "dark" ? "text-gray-300": "text-gray-800"}`}>
                      {project.role}
                    </div>
                  </div>
                  {project.teamSize && (
                    <div className={`p-4 ${theme === "dark" ? "bg-gray-900/80 border-gray-600 hover:border-amber-600": "bg-white/90 border-gray-400 hover:border-amber-400"} rounded-xl backdrop-blur-sm border`}>
                      <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                        Team Size
                      </div>
                      <div className={`text-xl font-bold ${theme === "dark" ? "text-gray-300": "text-gray-800"}`}>
                        {project.teamSize}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span>🛠️</span> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 ${theme === "dark" ? "bg-blue-900/50 text-blue-300" : "bg-blue-200 text-blue-700"} rounded-full font-semibold shadow-md hover:scale-105 transition-transform`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span>✨</span> Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4 ${theme === "dark" ? "bg-gray-900/80 dark:border-gray-700 hover:border-blue-600": "bg-white/90 border-gray-400 hover:border-blue-400"} rounded-lg backdrop-blur-sm border transition-colors`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`${theme === "dark" ? "text-blue-500": "text-blue-700"} font-bold`}>
                        ✓
                      </span>
                      <span className={`${theme === "dark" ? "text-gray-300": "text-gray-800"}`}>
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Structure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span>🏗️</span> Project Structure
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.projectStructure.frontend && (
                  <div className={`p-5 ${theme === "dark" ? "bg-gradient-to-br from-blue-950/50 to-cyan-900/50 border-blue-700": "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-500"} rounded-xl border`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-blue-200": "text-blue-800"} mb-3`}>
                      Frontend
                    </h3>
                    <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                      {project.projectStructure.frontend.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.projectStructure.backend && (
                  <div className={`p-5 ${theme === "dark" ? "bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-green-700": "bg-gradient-to-br from-green-50 to-emerald-50 border-green-500"} rounded-xl border`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-green-200": "text-green-800"} mb-3`}>
                      Backend
                    </h3>
                    <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                      {project.projectStructure.backend.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.projectStructure.database && (
                  <div className={`p-5 ${theme === "dark" ? "bg-gradient-to-br from-purple-950/50 to-pink-950/50 border-purple-700": "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-500"} rounded-xl border`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-purple-200": "text-purple-800"} mb-3`}>
                      Database
                    </h3>
                    <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                      {project.projectStructure.database.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.projectStructure.deployment && (
                  <div className={`p-5 ${theme === "dark" ? "bg-gradient-to-br from-amber-950/50 to-orange-950/50 border-amber-700": "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-500"} rounded-xl border`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-amber-200": "text-amber-800"} mb-3`}>
                      Deployment
                    </h3>
                    <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                      {project.projectStructure.deployment.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.projectStructure.apis && (
                  <div className={`p-5 ${theme === "dark" ? "bg-gradient-to-br from-indigo-950/50 to-violet-950/50 border-indigo-700": "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-500"} rounded-xl border`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-indigo-200": "text-indigo-800"} mb-3`}>
                      APIs & Integrations
                    </h3>
                    <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                      {project.projectStructure.apis.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-indigo-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.projectStructure.integrations && (
                  <div className={`p-5 ${theme === "dark" ? "bg-gradient-to-br from-teal-950/50 to-cyan-950/50 border-teal-700": "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-500"} rounded-xl border`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-teal-200": "text-teal-800"} mb-3`}>
                      Integrations
                    </h3>
                    <ul className={`space-y-2 text-sm ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                      {project.projectStructure.integrations.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-600 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Challenges & Solutions */}
            {project.challenges.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span>💡</span> Challenges & Solutions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-6 ${theme === "dark" ? "bg-red-950/30": "bg-red-50"} rounded-xl border border-red-200 dark:border-red-800`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-red-200": "text-red-900"} mb-4`}>
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-3 ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}
                        >
                          <span className="text-red-600 mt-1">⚠️</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`p-6 ${theme === "dark" ? "bg-green-950/30": "bg-green-50"} rounded-xl border border-green-200 dark:border-green-800`}>
                    <h3 className={`font-bold ${theme === "dark" ? "text-green-200": "text-green-900"} mb-4`}>
                      Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-3 ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}
                        >
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Navigation */}
            <div className={`flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700`}>
              <Link
                href="/Project"
                className={`px-6 py-3 ${theme === "dark" ? "bg-gray-800 text-gray-100 hover:bg-gray-700": "bg-gray-200 text-gray-900 hover:bg-gray-300"} rounded-l transition-colors font-semibold`}
              >
                ← All Projects
              </Link>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 ${theme === "dark" ? "bg-blue-700 text-white hover:bg-blue-600": "bg-blue-600 text-white hover:bg-blue-700"} rounded-lg transition-colors font-semibold`}
                >
                  Visit Live Site →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}