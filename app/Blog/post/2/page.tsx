"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function PortfolioBlog() {
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

  const codeBlock = (code: string, language: string) => (
    <pre className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 overflow-x-auto my-4 border border-slate-700">
      <code className="text-sm text-emerald-400 font-mono">{code}</code>
    </pre>
  );

  const stepCard = (
    number: string,
    title: string,
    description: string,
    icon: string,
    bgColorClass: string,
    borderColorClass: string
  ) => (
    <div className={`flex gap-4 p-5 backdrop-blur-sm rounded-2xl hover:shadow-lg group ${bgColorClass} ${borderColorClass} transition-all`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div>
        <h3 className={`text-lg font-bold flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
          <span>{icon}</span> {title}
        </h3>
        <p className={`mt-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{description}</p>
      </div>
    </div>
  );

  const techPill = (name: string, bgColorClass: string, textColorClass: string) => (
    <span
      className={`inline-block px-3 py-1.5 rounded-full text-sm font-medium ${bgColorClass} ${textColorClass} transition-transform hover:scale-105`}
    >
      {name}
    </span>
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div
        className={`min-h-screen bg-gradient-to-br ${theme === "dark" ? "from-slate-950 via-emerald-950/20 to-slate-900" : "from-slate-50 via-emerald-50 to-cyan-50"}`}
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden">

          <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/Blogs"
                className={`inline-flex items-center gap-2 mb-8 group transition-colors ${theme === "dark" ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-600 hover:text-emerald-800"}`}
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${theme === "dark" ? "bg-emerald-900/50 text-emerald-300" : "bg-emerald-100 text-emerald-700"}`}
              >
                Portfolio Project
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              How I Built My{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Portfolio Website
              </span>{" "}
              from Scratch
      </h1>

            {/* Subtitle */}
            <p
              className={`text-xl max-w-2xl mb-8 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
            >
              A deep dive into the design decisions, tech stack, and lessons
              learned while creating my personal developer portfolio.
            </p>

            {/* Author Card */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <div>
                <p className={`font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  Shashank S P
                </p>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                  September 22, 2025 · 8 min read
                </p>
              </div>
            </div>
          </div>
      </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro Section */}
          <section
            className={`backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-emerald-500/5 mb-10 -mt-6 relative z-10 ${theme === "dark" ? "bg-slate-800/50 border border-emerald-900/30" : "bg-white/70 border border-emerald-100"}`}
          >
            <p
              className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
            >
              Creating my portfolio was more than just a project—it was my way
              of showing who I am as a developer. Every color, animation, and
              component was carefully chosen to represent my journey from a
              mechanical engineering background to becoming a{" "}
              <span
                className={`font-medium ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
              >
                Full Stack Developer
              </span>
              .
            </p>
            <p
              className={`text-lg leading-relaxed mt-4 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
            >
              In this post, I'll walk you through the entire process—from
              initial planning to deployment.
            </p>
          </section>

          {/* Tech Stack Used */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">
                ⚡
              </div>
              <h2
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Tech Stack Used
              </h2>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50">
              <div className="flex flex-wrap gap-3">
                {techPill(
                  "Next.js 15",
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200",
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                )}
                {techPill(
                  "React 19",
                  theme === "dark" ? "bg-blue-900/40" : "bg-blue-100",
                  theme === "dark" ? "text-blue-300" : "text-blue-700"
                )}
                {techPill(
                  "TypeScript",
                  theme === "dark" ? "bg-blue-900/40" : "bg-blue-100",
                  theme === "dark" ? "text-blue-300" : "text-blue-700"
                )}
                {techPill(
                  "Tailwind CSS",
                  theme === "dark" ? "bg-teal-900/40" : "bg-teal-100",
                  theme === "dark" ? "text-teal-300" : "text-teal-700"
                )}
                {techPill(
                  "Framer Motion",
                  theme === "dark" ? "bg-purple-900/40" : "bg-purple-100",
                  theme === "dark" ? "text-purple-300" : "text-purple-700"
                )}
                {techPill(
                  "next-themes",
                  theme === "dark" ? "bg-amber-900/40" : "bg-amber-100",
                  theme === "dark" ? "text-amber-300" : "text-amber-700"
                )}
              </div>
              <p
                className={`mt-4 text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                This combination gives me server-side rendering, excellent
                developer experience, and smooth animations.
        </p>
      </div>
          </section>

          {/* Planning Phase */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30">
                📋
              </div>
              <h2
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Phase 1: Planning & Design
              </h2>
      </div>

            <div className="space-y-4">
              <div
                className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50" : "bg-white/60 border border-slate-200"}`}
              >
                <h3 className={`text-lg font-bold mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  🎯 Goals I Set
                </h3>
                <ul
                  className={`space-y-2 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Showcase my projects with live demos and source code
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Create a blog section to share my learning journey
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Dark/Light mode for better user experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Fully responsive design (mobile-first approach)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Clean, modern UI that reflects my personality
              </li>
          </ul>
        </div>

              <div
                className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-700/50" : "bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200"}`}
              >
                <h3 className={`text-lg font-bold mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  🎨 Design Inspiration
                </h3>
                <p
                  className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  I browsed Dribbble, Behance, and other developer portfolios
                  for inspiration. I was drawn to glassmorphism effects, subtle
                  gradients, and smooth micro-interactions. I sketched wireframes
                  on paper before touching any code.
                </p>
              </div>
            </div>
          </section>

          {/* Development Steps */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-xl shadow-lg shadow-teal-500/30">
                🛠️
              </div>
              <h2
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Phase 2: Development Journey
              </h2>
            </div>

            <div className="space-y-4">
              {stepCard(
                "1",
                "Project Setup",
                "Started with create-next-app using the App Router. Configured TypeScript, ESLint, and Tailwind CSS from the beginning.",
                "🚀",
                theme === "dark" ? "bg-slate-800/40" : "bg-white/60",
                theme === "dark" ? "border border-slate-700/50 hover:border-emerald-700" : "border border-slate-200 hover:border-emerald-300"
              )}
              {stepCard(
                "2",
                "Component Architecture",
                "Created reusable components like Navbar, Footer, ProjectCard, and BlogCard. Kept everything modular for easy maintenance.",
                "🧩",
                theme === "dark" ? "bg-slate-800/40" : "bg-white/60",
                theme === "dark" ? "border border-slate-700/50 hover:border-emerald-700" : "border border-slate-200 hover:border-emerald-300"
              )}
              {stepCard(
                "3",
                "Theme Implementation",
                "Integrated next-themes for dark/light mode. Used CSS variables and Tailwind's dark: modifier for seamless switching.",
                "🌓",
                theme === "dark" ? "bg-slate-800/40" : "bg-white/60",
                theme === "dark" ? "border border-slate-700/50 hover:border-emerald-700" : "border border-slate-200 hover:border-emerald-300"
              )}
              {stepCard(
                "4",
                "Animations",
                "Added Framer Motion for page transitions and scroll-triggered animations. The typed.js effect on the hero section adds personality.",
                "✨",
                theme === "dark" ? "bg-slate-800/40" : "bg-white/60",
                theme === "dark" ? "border border-slate-700/50 hover:border-emerald-700" : "border border-slate-200 hover:border-emerald-300"
              )}
              {stepCard(
                "5",
                "Blog System",
                "Built a markdown-based blog using gray-matter for frontmatter parsing. Each post has its own route with dynamic rendering.",
                "📝",
                theme === "dark" ? "bg-slate-800/40" : "bg-white/60",
                theme === "dark" ? "border border-slate-700/50 hover:border-emerald-700" : "border border-slate-200 hover:border-emerald-300"
              )}
              {stepCard(
                "6",
                "Performance Optimization",
                "Optimized images with Next.js Image component, implemented lazy loading, and ensured Core Web Vitals are green.",
                "⚡",
                theme === "dark" ? "bg-slate-800/40" : "bg-white/60",
                theme === "dark" ? "border border-slate-700/50 hover:border-emerald-700" : "border border-slate-200 hover:border-emerald-300"
              )}
            </div>
          </section>

          {/* Code Snippet Example */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
                💻
              </div>
              <h2
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Code Highlight: Theme Toggle
              </h2>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50">
              <p
                className={`mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                Here's how I implemented the theme toggle using next-themes:
              </p>
              {codeBlock(
                `import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};`,
                "tsx"
              )}
            </div>
          </section>

          {/* Challenges Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-pink-500/30">
                🧗
              </div>
              <h2
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Challenges I Faced
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}
              >
                <h3
                  className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}
                >
                  Hydration Errors
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  Fixed by using useEffect for theme detection and adding 'use
                  client' directive properly.
                </p>
              </div>
              <div
                className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}
              >
                <h3
                  className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}
                >
                  Responsive Design
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  Used Tailwind's responsive prefixes (sm:, md:, lg:) extensively
                  and tested on multiple devices.
                </p>
              </div>
              <div
                className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}
              >
                <h3
                  className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}
                >
                  Animation Performance
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  Kept animations subtle and used transform/opacity for 60fps
                  smoothness.
                </p>
              </div>
              <div
                className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}
              >
                <h3
                  className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}
                >
                  SEO Optimization
                </h3>
                <p
                  className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                >
                  Added proper meta tags, Open Graph images, and structured data
                  for better visibility.
        </p>
      </div>
    </div>
          </section>

          {/* Results & Lessons */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30">
                🎉
              </div>
              <h2
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Results & Key Takeaways
              </h2>
            </div>

            <div
              className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-700/50" : "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200"}`}
            >
              <div className="grid gap-6 sm:grid-cols-3 mb-6">
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
                  >
                    98+
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Lighthouse Score
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
                  >
                    &lt;2s
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Load Time
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
                  >
                    100%
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Responsive
                  </div>
                </div>
              </div>

              <h3
                className={`font-bold mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                💡 What I Learned
              </h3>
              <ul
                className={`space-y-2 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                <li>→ Start with a clear plan and wireframes</li>
                <li>→ Mobile-first design saves time in the long run</li>
                <li>→ Small animations make a big difference in UX</li>
                <li>→ Test early, test often, test on real devices</li>
                <li>→ Your portfolio is never "done"—keep iterating!</li>
              </ul>
            </div>
          </section>

          {/* Closing */}
          <section className="text-center">
            <div
              className={`inline-block p-8 rounded-3xl ${theme === "dark" ? "bg-gradient-to-br from-emerald-900/30 to-teal-900/30" : "bg-gradient-to-br from-emerald-100 to-teal-100"}`}
            >
              <p
                className={`text-lg max-w-2xl ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
              >
                Building this portfolio taught me more than any tutorial ever
                could. If you're thinking about creating your own—
                <span
                  className={`font-semibold ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
                >
                  just start
                </span>
                . You'll learn along the way.
              </p>
              <p
                className={`mt-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
              >
                Feel free to check out the source code on my GitHub! 🚀
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
              {/* Twitter Share Button */}
              <button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=Check out this blog post: How I Built My Portfolio Website from Scratch by Shashank S P!&url=${window.location.href}`,
                    "_blank"
                  )
                }
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 hover:bg-emerald-900/50" : "bg-slate-100 hover:bg-emerald-100"}`}
                aria-label="Share on Twitter"
              >
                <svg
                  className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>

              {/* LinkedIn Share Button */}
              <button
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=How I Built My Portfolio Website from Scratch&summary=A deep dive into the design decisions, tech stack, and lessons learned while creating my personal developer portfolio.&source=`,
                    "_blank"
                  )
                }
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 hover:bg-emerald-900/50" : "bg-slate-100 hover:bg-emerald-100"}`}
                aria-label="Share on LinkedIn"
              >
                <svg
                  className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>

              {/* Copy Link Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 hover:bg-emerald-900/50" : "bg-slate-100 hover:bg-emerald-100"}`}
                aria-label="Copy link"
              >
                <svg
                  className={`w-5 h-5 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.879a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
                  />
                </svg>
              </button>
            </div>
            <Link
              href="/Blogs"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
            >
              View More Posts →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
