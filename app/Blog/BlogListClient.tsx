"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

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
    <div className="min-h-screen w-full pt-20 pb-10 px-2 sm:px-0 bg-gradient-to-br from-blue-100 via-cyan-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-fuchsia-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto p-4 sm:p-8 rounded-3xl shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-blue-200 dark:border-purple-900">
        <h1 className="text-4xl font-extrabold mb-10 text-blue-900 dark:text-fuchsia-200 drop-shadow-lg flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-600 dark:text-fuchsia-400"
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
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No blog posts found.
                </p>
              </div>
            ) : (
              sortedPosts.map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className="p-6 border border-blue-200 dark:border-purple-900 rounded-2xl shadow-lg hover:shadow-blue-300/40 dark:hover:shadow-fuchsia-400/40 transition bg-white/90 dark:bg-gray-950/90 backdrop-blur-md group hover:scale-[1.02] active:scale-100 duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Side - Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      {/* Date */}
                      <span className="text-xs font-semibold text-green-800 dark:text-green-200 bg-green-100 dark:bg-green-900/60 px-2 py-1 rounded shadow-sm">
                        {frontmatter.date}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold mt-2 text-amber-400 group-hover:text-blue-600 dark:text-white dark:group-hover:text-fuchsia-400 transition">
                        {frontmatter.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
                        {frontmatter.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {frontmatter.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-fuchsia-900/60 rounded-md text-blue-700 dark:text-fuchsia-200 font-semibold shadow hover:bg-blue-200 dark:hover:bg-fuchsia-800/80 transition-colors duration-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More */}
                    <Link href={`/Blog/post/${slug}`}>
                      <span className="mt-4 inline-block text-blue-600 dark:text-fuchsia-300 font-bold hover:underline hover:text-fuchsia-600 dark:hover:text-blue-300 transition">
                        Read More →
                      </span>
                    </Link>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative">
                    <img
                      src={frontmatter.src || "/sample image.jpeg"}
                      alt="Blog"
                      className="w-full h-44 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-200 border border-blue-100 dark:border-fuchsia-900"
                    />
                  </div>
                </div>
              </div>
              ))
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-6 p-6 bg-gradient-to-br from-white/90 to-blue-50/50 dark:from-gray-950/90 dark:to-blue-950/30 rounded-3xl shadow-2xl border-4 border-blue-300 dark:border-blue-700/50 backdrop-blur-xl">
            {/* Sort Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-2xl shadow-lg p-5 border border-blue-200 dark:border-blue-800/50 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
                  className="font-bold text-blue-900 dark:text-blue-200"
                >
                  Sort By
                </label>
              </div>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border-2 border-blue-200 dark:border-blue-800 rounded-lg p-2.5 bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-200 cursor-pointer hover:border-blue-400 dark:hover:border-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 font-medium"
              >
                <option value="newest">📅 Newest First</option>
                <option value="oldest">📆 Oldest First</option>
                <option value="a-z">🔤 A-Z (Title)</option>
                <option value="z-a">🔠 Z-A (Title)</option>
              </select>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-2xl shadow-lg p-5 border border-purple-200 dark:border-purple-800/50 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-purple-900 dark:text-purple-200">
                    Shashank S P
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Sharing my journey from Mechanical Engineering to Full Stack
                Development, real-world projects, and coding insights.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/80 transition-colors font-semibold text-sm"
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
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/50 dark:to-teal-950/50 rounded-2xl shadow-lg p-5 border border-cyan-200 dark:border-cyan-800/50 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-cyan-600 dark:text-cyan-400"
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
                <h2 className="font-bold text-cyan-900 dark:text-cyan-200">
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
                    className="px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/60 rounded-lg text-sm text-cyan-700 dark:text-cyan-300 font-semibold shadow hover:bg-cyan-200 dark:hover:bg-cyan-800/80 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            {sortedPosts.length > 0 && (
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 rounded-2xl shadow-lg p-5 border border-amber-200 dark:border-amber-800/50 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-5 h-5 text-amber-600 dark:text-amber-400"
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
                  <h2 className="font-bold text-amber-900 dark:text-amber-200">
                    Recent Posts
                  </h2>
                </div>
                <div className="space-y-3">
                  {sortedPosts.slice(0, 3).map(({ slug, frontmatter }) => (
                    <Link
                      key={slug}
                      href={`/Blog/post/${slug}`}
                      className="block p-3 bg-white/80 dark:bg-gray-900/80 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors border border-amber-200 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-700 group"
                    >
                      <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                        {frontmatter.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {frontmatter.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter/Subscribe */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/50 rounded-2xl shadow-lg p-5 border border-indigo-200 dark:border-indigo-800/50 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
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
                <h2 className="font-bold text-indigo-900 dark:text-indigo-200">
                  Stay Updated
                </h2>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Get notified when I publish new posts about development,
                projects, and career insights.
              </p>
              <a
                href="https://shashanks-newsletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all shadow-md hover:shadow-lg text-center"
              >
                Subscribe
              </a>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50 rounded-2xl shadow-lg p-5 border border-emerald-200 dark:border-emerald-800/50 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
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
                <h2 className="font-bold text-emerald-900 dark:text-emerald-200">
                  Blog Stats
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/80 dark:bg-gray-900/80 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {sortedPosts.length}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Total Posts
                  </div>
                </div>
                <div className="text-center p-3 bg-white/80 dark:bg-gray-900/80 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {new Set(sortedPosts.flatMap((p) => p.frontmatter.tags || [])).size}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
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

