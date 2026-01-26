"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
    src?: string;
  };
}

interface BlogListClientProps {
  posts: Post[];
}

export default function BlogListClient({ posts: allPosts }: BlogListClientProps) {
  const [sortBy, setSortBy] = useState("newest");

  const { theme, setTheme } = useTheme();

  const sortedPosts = useMemo(() => {
    if (!allPosts || allPosts.length === 0) {
      return [];
    }
    const posts = [...allPosts];

    switch (sortBy) {
      case "newest":
        return posts.sort((a, b) => {
          const dateA = new Date(a.frontmatter.date || 0).getTime();
          const dateB = new Date(b.frontmatter.date || 0).getTime();
          return dateB - dateA; // Newest first
        });

      case "oldest":
        return posts.sort((a, b) => {
          const dateA = new Date(a.frontmatter.date || 0).getTime();
          const dateB = new Date(b.frontmatter.date || 0).getTime();
          return dateA - dateB; // Oldest first
        });

      case "a-z":
        return posts.sort((a, b) => {
          const titleA = a.frontmatter.title?.toLowerCase() || "";
          const titleB = b.frontmatter.title?.toLowerCase() || "";
          return titleA.localeCompare(titleB);
        });

      case "z-a":
        return posts.sort((a, b) => {
          const titleA = a.frontmatter.title?.toLowerCase() || "";
          const titleB = b.frontmatter.title?.toLowerCase() || "";
          return titleB.localeCompare(titleA);
        });

      default:
        return posts;
    }
  }, [allPosts, sortBy]);

  return (
    <div className={`min-h-screen w-full pt-20 pb-10 px-2 sm:px-0 ${theme === "dark" ? "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" : "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50"} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto p-4 sm:p-8 rounded-3xl shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-blue-200 dark:border-purple-800 transition-colors duration-300">
        <h1 className={`text-4xl font-extrabold mb-10 ${theme === "dark" ? "text-purple-300" : "text-blue-900"} drop-shadow-lg flex items-center gap-3 transition-colors duration-300`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 ${theme === "dark" ? "text-purple-400" : "text-blue-600"} transition-colors duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          Blog
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-8">
            {sortedPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"} transition-colors duration-300`}>
                  No blog posts found.
                </p>
              </div>
            ) : (
              sortedPosts.map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className={`p-6 border ${theme === "dark" ? "border-purple-800 bg-slate-700/50 hover:shadow-purple-500/30 hover:border-purple-700" : "border-blue-200 bg-white/90 hover:shadow-blue-300/40"} rounded-2xl shadow-lg transition backdrop-blur-md group hover:scale-[1.02] active:scale-100 duration-200`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Side - Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      {/* Date */}
                      <span className={`text-xs font-semibold px-2 py-1 rounded shadow-sm transition-colors duration-300 ${theme === "dark" ? "text-green-200 bg-green-900/60" : "text-green-800 bg-green-100"}`}>
                        {frontmatter.date}
                      </span>

                      {/* Title */}
                      <h2 className={`text-2xl font-bold mt-2 transition-colors duration-300 ${theme === "dark" ? "text-purple-300 group-hover:text-purple-200" : "text-blue-700 group-hover:text-blue-900"}`}>
                        {frontmatter.title}
                      </h2>

                      {/* Description */}
                      <p className={`mt-3 line-clamp-3 transition-colors duration-300 ${theme === "dark" ? "text-gray-300": "text-gray-700"}`}>
                        {frontmatter.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {frontmatter.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded-md font-semibold shadow transition-colors duration-300 ${theme === "dark" ? "bg-purple-900/60 text-purple-200 hover:bg-purple-800/80" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More */}
                    <Link href={`/Blog/post/${slug}`}>
                      <span className={`mt-4 inline-block font-bold hover:underline transition-colors duration-300 ${theme === "dark" ? "text-purple-300 hover:text-purple-100" : "text-blue-600 hover:text-blue-800"}`}>
                        Read More →
                      </span>
                    </Link>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative">
                    <img
                      src={frontmatter.src || "/sample image.jpeg"}
                      alt="Blog"
                      className={`w-full h-44 object-cover rounded-xl shadow-md hover:scale-105 transition-all duration-300 border ${theme === "dark" ? "border-purple-900": "border-blue-100"}`}
                    />
                  </div>
                </div>
              </div>
              ))
            )}
          </div>

          {/* Sidebar */}
          <aside className={`w-full lg:w-72 space-y-6 p-6 rounded-3xl shadow-2xl border-4 backdrop-blur-xl transition-all duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-purple-800/50" : "bg-gradient-to-br from-white/90 to-blue-50/50 border-blue-300"}`}>
            {/* Sort Section */}
            <div className={`rounded-2xl shadow-lg p-5 border backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-slate-700/50 to-slate-600/50 border-purple-700/50" : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"}`}>
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${theme === "dark" ? "text-purple-400" : "text-blue-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                  />
                </svg>
                <label
                  htmlFor="sort"
                  className={`font-bold transition-colors duration-300 ${theme === "dark" ? "text-purple-200" : "text-blue-900"}`}
                >
                  Sort By
                </label>
              </div>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`w-full border-2 rounded-lg p-2.5 cursor-pointer transition-all focus:outline-none focus:ring-2 font-medium ${theme === "dark" ? "border-purple-700 bg-slate-700 text-purple-200 hover:border-purple-600 focus:ring-purple-500" : "border-blue-200 bg-white text-blue-900 hover:border-blue-400 focus:ring-blue-400"}`}
              >
                <option value="newest">📅 Newest First</option>
                <option value="oldest">📆 Oldest First</option>
                <option value="a-z">🔤 A-Z (Title)</option>
                <option value="z-a">🔠 Z-A (Title)</option>
              </select>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold transition-colors duration-300 ${theme === "dark" ? "bg-purple-900/50 text-purple-300" : "bg-blue-100 text-blue-700"}`}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {sortedPosts.length} post{sortedPosts.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Author Card */}
            <div className={`rounded-2xl shadow-lg p-5 border backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-700/50" : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  S
                </div>
                <div>
                  <h3 className={`font-bold transition-colors duration-300 ${theme === "dark" ? "text-purple-200" : "text-purple-900"}`}>
                    Shashank S P
                  </h3>
                  <p className={`text-xs transition-colors duration-300 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-3`}>
                Sharing my journey from Mechanical Engineering to Full Stack
                Development, real-world projects, and coding insights.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center px-3 py-2 ${theme === "dark" ? "bg-purple-900/50 text-purple-300 hover:bg-purple-800/80" : "bg-purple-100 text-purple-700 hover:bg-purple-200"} rounded-lg transition-colors font-semibold text-sm`}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/80 transition-colors font-semibold text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Topics Section */}
            <div className={`rounded-2xl shadow-lg p-5 border backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-cyan-900/30 to-slate-800/50 border-cyan-700/50" : "bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200"}`}>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <h2 className={`font-bold transition-colors duration-300 ${theme === "dark" ? "text-cyan-200" : "text-cyan-900"}`}>
                  Topics
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "react",
                  "nextjs",
                  "tailwindcss",
                  "typescript",
                  "javascript",
                  "css",
                  "nodejs",
                  "postgresql",
                ].map((topic) => (
                  <span
                    key={topic}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold shadow hover:scale-105 transition-all duration-300 cursor-pointer ${theme === "dark" ? "bg-cyan-900/60 text-cyan-300 hover:bg-cyan-800/80" : "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"}`}
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            {sortedPosts.length > 0 && (
              <div className={`rounded-2xl shadow-lg p-5 border backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-amber-900/30 to-slate-800/50 border-amber-700/50" : "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200"}`}>
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${theme === "dark" ? "text-amber-400" : "text-amber-600"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h2 className={`font-bold transition-colors duration-300 ${theme === "dark" ? "text-amber-200" : "text-amber-900"}`}>
                    Recent Posts
                  </h2>
                </div>
                <div className="space-y-3">
                  {sortedPosts.slice(0, 3).map(({ slug, frontmatter }) => (
                    <Link
                      key={slug}
                      href={`/Blog/post/${slug}`}
                      className={`block p-3 rounded-lg transition-all duration-300 border group ${theme === "dark" ? "bg-slate-700/60 border-amber-700/50 hover:border-amber-600 hover:bg-slate-700/80" : "bg-white/80 border-amber-200 hover:border-amber-300 hover:bg-white"}`}
                    >
                      <h3 className={`font-semibold text-sm group-hover:transition-colors duration-300 line-clamp-2 ${theme === "dark" ? "text-gray-200 group-hover:text-amber-400" : "text-gray-900 group-hover:text-amber-600"}`}>
                        {frontmatter.title}
                      </h3>
                      <p className={`text-xs mt-1 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {frontmatter.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter/Subscribe */}
            <div className={`rounded-2xl shadow-lg p-5 border backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-indigo-900/30 to-slate-800/50 border-indigo-700/50" : "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200"}`}>
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className={`font-bold transition-colors duration-300 ${theme === "dark" ? "text-indigo-200" : "text-indigo-900"}`}>
                  Stay Updated
                </h2>
              </div>
              <p className={`text-sm mb-3 transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Get notified when I publish new posts about development,
                projects, and career insights.
              </p>
              <a
                href="https://shashanks-newsletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full px-4 py-2.5 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg text-center ${theme === "dark" ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" : "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"}`}
              >
                Subscribe
              </a>
            </div>

            {/* Quick Stats */}
            <div className={`rounded-2xl shadow-lg p-5 border backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "bg-gradient-to-br from-emerald-900/30 to-slate-800/50 border-emerald-700/50" : "bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200"}`}>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h2 className={`font-bold transition-colors duration-300 ${theme === "dark" ? "text-emerald-200" : "text-emerald-900"}`}>
                  Blog Stats
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className={`text-center p-3 rounded-lg transition-colors duration-300 ${theme === "dark" ? "bg-slate-700/60" : "bg-white/80"}`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
                    {sortedPosts.length}
                  </div>
                  <div className={`text-xs transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Total Posts
                  </div>
                </div>
                <div className={`text-center p-3 rounded-lg transition-colors duration-300 ${theme === "dark" ? "bg-slate-700/60" : "bg-white/80"}`}>
                  <div className={`text-2xl font-bold transition-colors duration-300 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`}>
                    {new Set(sortedPosts.flatMap((p) => p.frontmatter.tags || [])).size}
                  </div>
                  <div className={`text-xs transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Categories
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

