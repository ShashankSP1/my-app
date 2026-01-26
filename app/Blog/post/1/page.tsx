"use client";
import React, { useState, useEffect } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";

// Note: metadata needs to be in a separate file for client components
// or you can create a layout.tsx for this route with the metadata

export default function FirstBlog() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

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

  const techBadge = (name: string, bgColorClass: string, textColorClass: string) => (
    <span
      className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium ${bgColorClass} ${textColorClass} transition-transform hover:scale-105 cursor-default`}
    >
      {name}
    </span>
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div
        className={`min-h-screen bg-gradient-to-br ${theme === "dark" ? "from-slate-950 via-violet-950/30 to-slate-900" : "from-slate-50 via-violet-50 to-pink-50"}`}
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden">

          <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
            {/* Back Button */}
            <div className="flex flex-row gap-4">
              <Link
              href="/Blogs"
              className={`inline-flex items-center gap-2 mb-8 group transition-colors ${theme === "dark" ? "text-violet-400 hover:text-violet-300" : "text-violet-600 hover:text-violet-800"}`}
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
              Back to Blogs
            </Link>

            {/* Category Badge */}
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${theme === "dark" ? "bg-violet-900/50 text-violet-300" : "bg-violet-100 text-violet-700"}`}
            >
              Tech Stack
            </span>
            </div>
            

            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              My 2025 Tech Stack as a{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>

            {/* Author Card */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <div>
                <p
                  className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                >
                  Shashank S P
                </p>
                <p
                  className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
                >
                  September 24, 2025 · 4 min read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro Card */}
          <section
            className={`backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-violet-500/5 mb-10 -mt-6 relative z-10 ${theme === "dark" ? "bg-slate-800/50 border border-violet-900/30" : "bg-white/70 border border-violet-100"}`}
          >
            <p
              className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
            >
              As a frontend developer, my tech stack has evolved a lot over the
              past year. In 2025, my focus is on building{" "}
              <span
                className={`font-medium ${theme === "dark" ? "text-violet-400" : "text-violet-600"}`}
              >
                clean
              </span>
              ,{" "}
              <span
                className={`font-medium ${theme === "dark" ? "text-fuchsia-400" : "text-fuchsia-600"}`}
              >
                scalable
              </span>
              , and{" "}
              <span
                className={`font-medium ${theme === "dark" ? "text-pink-400" : "text-pink-600"}`}
              >
                performance-friendly
              </span>{" "}
              user interfaces.
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
            >
              In this post, I'm sharing the tools and technologies I actively
              use, along with what I'm currently learning.
            </p>
          </section>

          {/* Tech Sections Grid */}
          <div className="grid gap-8">
            {/* Core Technologies */}
            <section className="group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
                  🧱
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Core Technologies
                </h2>
              </div>
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50 group-hover:border-orange-700" : "bg-white/60 border border-slate-200 group-hover:border-orange-300"}`}
              >
                <div className="flex flex-wrap gap-3">
                  {techBadge(
                    "HTML5",
                    theme === "dark" ? "bg-orange-900/40" : "bg-orange-100",
                    theme === "dark" ? "text-orange-300" : "text-orange-700"
                  )}
                  {techBadge(
                    "CSS3",
                    theme === "dark" ? "bg-blue-900/40" : "bg-blue-100",
                    theme === "dark" ? "text-blue-300" : "text-blue-700"
                  )}
                  {techBadge(
                    "JavaScript (ES6+)",
                    theme === "dark" ? "bg-yellow-900/40" : "bg-yellow-100",
                    theme === "dark" ? "text-yellow-300" : "text-yellow-700"
                  )}
                </div>
                <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <p>→ Semantic and accessible markup with HTML5</p>
                  <p>→ Modern layouts with Flexbox & Grid</p>
                  <p>→ The backbone of frontend logic</p>
                </div>
              </div>
            </section>

            {/* Frameworks & Libraries */}
            <section className="group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">
                  ⚛️
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Frameworks & Libraries
                </h2>
              </div>
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50 group-hover:border-blue-700" : "bg-white/60 border border-slate-200 group-hover:border-blue-300"}`}
              >
                <div className="flex flex-wrap gap-3">
                  {techBadge(
                    "React.js",
                    theme === "dark" ? "bg-cyan-900/40" : "bg-cyan-100",
                    theme === "dark" ? "text-cyan-300" : "text-cyan-700"
                  )}
                  {techBadge(
                    "Next.js",
                    theme === "dark" ? "bg-slate-700" : "bg-slate-200",
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                </div>
                <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <p>→ Component-based UI with hooks</p>
                  <p>→ Routing, SSR, and performance optimization</p>
                </div>
              </div>
            </section>

            {/* Styling */}
            <section className="group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-xl shadow-lg shadow-rose-500/30">
                  🎨
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Styling
                </h2>
              </div>
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50 group-hover:border-pink-700" : "bg-white/60 border border-slate-200 group-hover:border-pink-300"}`}
              >
                <div className="flex flex-wrap gap-3">
                  {techBadge(
                    "Tailwind CSS",
                    theme === "dark" ? "bg-teal-900/40" : "bg-teal-100",
                    theme === "dark" ? "text-teal-300" : "text-teal-700"
                  )}
                  {techBadge(
                    "ShadCN UI",
                    theme === "dark" ? "bg-slate-700" : "bg-slate-200",
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                  {techBadge(
                    "Material Tailwind",
                    theme === "dark" ? "bg-indigo-900/40" : "bg-indigo-100",
                    theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                  )}
                </div>
                <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <p>→ Utility-first styling for rapid development</p>
                  <p>→ Reusable UI components</p>
                </div>
              </div>
            </section>

            {/* State & Forms */}
            <section className="group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30">
                  🔄
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  State & Forms
                </h2>
              </div>
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50 group-hover:border-emerald-700" : "bg-white/60 border border-slate-200 group-hover:border-emerald-300"}`}
              >
                <div className="flex flex-wrap gap-3">
                  {techBadge(
                    "React Hooks",
                    theme === "dark" ? "bg-cyan-900/40" : "bg-cyan-100",
                    theme === "dark" ? "text-cyan-300" : "text-cyan-700"
                  )}
                  {techBadge(
                    "Context API",
                    theme === "dark" ? "bg-purple-900/40" : "bg-purple-100",
                    theme === "dark" ? "text-purple-300" : "text-purple-700"
                  )}
                  {techBadge(
                    "Formik + Yup",
                    theme === "dark" ? "bg-blue-900/40" : "bg-blue-100",
                    theme === "dark" ? "text-blue-300" : "text-blue-700"
                  )}
                </div>
                <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <p>→ Local state & side effects</p>
                  <p>→ Lightweight global state management</p>
                  <p>→ Form handling & validation</p>
                </div>
              </div>
            </section>

            {/* Developer Tools */}
            <section className="group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30">
                  🛠
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Developer Tools
                </h2>
              </div>
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 transition-colors ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50 group-hover:border-violet-700" : "bg-white/60 border border-slate-200 group-hover:border-violet-300"}`}
              >
                <div className="flex flex-wrap gap-3">
                  {techBadge(
                    "Git & GitHub",
                    theme === "dark" ? "bg-slate-700" : "bg-slate-200",
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  )}
                  {techBadge(
                    "Vite",
                    theme === "dark" ? "bg-yellow-900/40" : "bg-yellow-100",
                    theme === "dark" ? "text-yellow-300" : "text-yellow-700"
                  )}
                  {techBadge(
                    "ESLint",
                    theme === "dark" ? "bg-indigo-900/40" : "bg-indigo-100",
                    theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                  )}
                  {techBadge(
                    "Prettier",
                    theme === "dark" ? "bg-pink-900/40" : "bg-pink-100",
                    theme === "dark" ? "text-pink-300" : "text-pink-700"
                  )}
                </div>
                <div className="mt-4 space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <p>→ Version control & collaboration</p>
                  <p>→ Fast development builds</p>
                  <p>→ Code quality & formatting</p>
                </div>
              </div>
            </section>

            {/* What I'm Learning */}
            <section className="group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-pink-500/30 animate-pulse">
                  🚀
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  What I'm Learning Next
                </h2>
              </div>
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 border-2 border-dashed group-hover:border-solid transition-all ${theme === "dark" ? "from-violet-900/20 to-pink-900/20 border-violet-700" : "from-violet-50 to-pink-50 border-violet-300"}`}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl">
                    <span className="text-2xl">📚</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Advanced React patterns
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl">
                    <span className="text-2xl">⚡</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Performance optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl">
                    <span className="text-2xl">♿</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Accessibility (ARIA, WCAG)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl">
                    <span className="text-2xl">📘</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      TypeScript (deep dive)
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Closing Section */}
          <section className="mt-16 text-center">
            <div
              className={`inline-block p-8 rounded-3xl ${theme === "dark" ? "bg-gradient-to-br from-violet-900/30 to-pink-900/30" : "bg-gradient-to-br from-violet-100 to-pink-100"}`}
            >
              <p
                className={`text-lg max-w-2xl ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
              >
                This stack reflects how I build real-world applications today.
                Tools will change, but{" "}
                <span
                  className={`font-semibold ${theme === "dark" ? "text-violet-400" : "text-violet-600"}`}
                >
                  strong fundamentals
                </span>{" "}
                will always matter.
              </p>
              <p
                className={`mt-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
              >
                I'll keep updating this post as my skills and priorities
                evolve. ✨
              </p>
            </div>
          </section>

          {/* Share & Navigation */}
          <div
            className={`mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
              >
                Share this:
              </span>
              <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${theme === "dark" ? "bg-slate-800 hover:bg-blue-900/50" : "bg-slate-100 hover:bg-blue-100"}`}>
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${theme === "dark" ? "bg-slate-800 hover:bg-blue-900/50" : "bg-slate-100 hover:bg-blue-100"}`}>
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
            <Link
              href="/Blogs"
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-0.5"
            >
              View More Posts →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
