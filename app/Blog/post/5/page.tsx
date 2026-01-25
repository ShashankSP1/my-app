"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FresherBalanceBlog() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const struggleCard = (icon: string, title: string, description: string) => (
    <div className="flex items-start gap-4 p-5 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-rose-300 dark:hover:border-rose-700 transition-all hover:shadow-lg">
      <div className="text-3xl flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );

  const strategyCard = (
    number: string,
    title: string,
    description: string,
    tips: string[],
    gradient: string
  ) => (
    <div className="group">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}
        >
          {number}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 group-hover:border-indigo-300 dark:group-hover:border-indigo-700 transition-colors ml-4 border-l-4 border-l-indigo-500">
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
            >
              <span className="text-indigo-500 mt-1">→</span>
              <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );

  const mistakeCard = (
    icon: string,
    mistake: string,
    lesson: string,
    color: string
  ) => (
    <div
      className={`p-5 rounded-2xl border-2 ${color} hover:scale-[1.02] transition-all`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-bold text-slate-900 dark:text-white mb-2">
        {mistake}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        <span className="font-semibold text-green-600 dark:text-green-400">
          Lesson:
        </span>{" "}
        {lesson}
      </p>
    </div>
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950/20 dark:to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">

          <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/Blogs"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group"
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

              <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                Career Advice
              </span>

              <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                Learning Journey
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Balancing Learning and Real-World Projects as a{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Fresher Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
              The struggle is real—but so is the growth. Here's how I navigate
              between endless tutorials and actual project deadlines.
            </p>

            {/* Author Card */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Shashank S P
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  September 22, 2025 · 8 min read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro Section */}
          <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-indigo-500/5 border border-indigo-100 dark:border-indigo-900/30 mb-10 -mt-6 relative z-10">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              As a fresher developer, I constantly felt pulled in two
              directions: the{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                endless ocean of things to learn
              </span>{" "}
              and the{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                pressure to deliver real projects
              </span>
              .
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              Should I finish that React course or fix that production bug?
              Learn TypeScript deeply or ship features faster? This post shares
              my honest experiences and the strategies that finally helped me
              find balance.
            </p>
          </section>

          {/* The Struggle */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center text-xl shadow-lg shadow-red-500/30">
                😰
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                The Struggles I Faced
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {struggleCard(
                "⏰",
                "Never Enough Time",
                "8 hours of work + learning new tech + personal projects = where's the time?"
              )}
              {struggleCard(
                "📚",
                "Tutorial Paralysis",
                "Watching tutorial after tutorial but never feeling 'ready' to build real things"
              )}
              {struggleCard(
                "🎯",
                "Too Many Technologies",
                "React, Vue, Angular, Next.js, Node, Python... which one should I master first?"
              )}
              {struggleCard(
                "😓",
                "Imposter Syndrome",
                "Colleagues seem to know everything while I'm still Googling basic syntax"
              )}
              {struggleCard(
                "🔥",
                "Deadline Pressure",
                "Learning takes backseat when there's a production issue or urgent feature"
              )}
              {struggleCard(
                "😴",
                "Burnout Risk",
                "Coding all day at work, then coding at night to learn—it's exhausting"
              )}
            </div>
          </section>

          {/* The Realization */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 dark:border-amber-700/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    The Realization That Changed Everything
                  </h2>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    One day, my senior told me:{" "}
                    <span className="font-bold italic text-amber-700 dark:text-amber-300">
                      "You don't need to know everything before starting. Learn
                      what you need, when you need it."
                    </span>
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                    This shifted my entire approach. I stopped trying to
                    complete every course and started{" "}
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      learning with purpose
                    </span>
                    —only what my current project demanded.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Strategies */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Strategies That Work for Me
              </h2>
            </div>

            <div className="space-y-8">
              {strategyCard(
                "01",
                "Learn Just-In-Time, Not Just-In-Case",
                "Instead of learning everything upfront, I learn what I need for my current task.",
                [
                  "Need to add authentication? Learn it now, not 'someday'",
                  "Facing a state management issue? That's when you dive into Redux/Context",
                  "Real problems make learning stick faster than theoretical tutorials",
                ],
                "from-blue-500 to-indigo-600"
              )}

              {strategyCard(
                "02",
                "The 70-20-10 Time Split",
                "I divide my weekly learning time into focused buckets.",
                [
                  "70% on project work and immediate needs",
                  "20% on deepening current tech stack knowledge",
                  "10% on exploring new technologies (curiosity time)",
                ],
                "from-purple-500 to-pink-600"
              )}

              {strategyCard(
                "03",
                "Build in Public, Learn in Private",
                "I separate my 'showcase' work from my 'learning mess'.",
                [
                  "Keep a private repo for experiments and broken code",
                  "Polish and document what goes into portfolio",
                  "It's okay to write bad code while learning—just don't ship it",
                ],
                "from-emerald-500 to-teal-600"
              )}

              {strategyCard(
                "04",
                "Use Projects as Learning Vehicles",
                "Every feature is an opportunity to learn something new.",
                [
                  "Need dark mode? Learn CSS variables and theming",
                  "Building a blog? Learn markdown parsing and SSR",
                  "Real context makes abstract concepts click",
                ],
                "from-amber-500 to-orange-600"
              )}

              {strategyCard(
                "05",
                "Schedule Learning Like Meetings",
                "Unscheduled learning never happens. I block dedicated time.",
                [
                  "1 hour every morning before work (fresh mind)",
                  "Weekend deep-dive sessions (2-3 hours)",
                  "Commute time for podcasts and tech news",
                ],
                "from-rose-500 to-red-600"
              )}
            </div>
          </section>

          {/* Mistakes I Made */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center text-xl shadow-lg shadow-rose-500/30">
                ❌
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Mistakes I Made (So You Don't Have To)
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {mistakeCard(
                "📺",
                "Watching Without Building",
                "Watching tutorials feels productive but isn't. Code along, then build your own version.",
                "border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/20"
              )}
              {mistakeCard(
                "🔀",
                "Switching Stacks Too Often",
                "Stick with one stack long enough to go deep. Surface knowledge in 5 frameworks < deep knowledge in 1.",
                "border-orange-200 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-900/20"
              )}
              {mistakeCard(
                "🎭",
                "Comparing to Senior Devs",
                "They have 5-10 years of experience. Compare yourself to you 6 months ago instead.",
                "border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-900/20"
              )}
              {mistakeCard(
                "🌙",
                "Sacrificing Sleep to Learn",
                "Tired brains don't learn well. Rest is part of the learning process.",
                "border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/20"
              )}
              {mistakeCard(
                "📝",
                "Not Taking Notes",
                "You'll forget 90% of what you learn. Write it down, build a personal knowledge base.",
                "border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/20"
              )}
              {mistakeCard(
                "🏝️",
                "Learning in Isolation",
                "Join communities, ask questions, share progress. Others' insights accelerate your learning.",
                "border-teal-200 dark:border-teal-800/50 bg-teal-50 dark:bg-teal-900/20"
              )}
            </div>
          </section>

          {/* Weekly Schedule Example */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">
                📅
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                My Typical Week
              </h2>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50">
              <div className="grid gap-3">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-900/10">
                  <span className="font-bold text-indigo-700 dark:text-indigo-300 w-28">
                    Mon - Fri
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    🏢 Office work + 1hr morning learning (6-7 AM)
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-900/10">
                  <span className="font-bold text-purple-700 dark:text-purple-300 w-28">
                    Tue & Thu
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    🧪 30 min evening experiment with new tech
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-900/10">
                  <span className="font-bold text-emerald-700 dark:text-emerald-300 w-28">
                    Saturday
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    🛠️ 3hr deep work on personal project
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-900/10">
                  <span className="font-bold text-amber-700 dark:text-amber-300 w-28">
                    Sunday
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    📚 2hr learning + review notes + REST
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Tools That Help */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30">
                🛠️
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Tools That Help Me Stay Organized
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                <div className="text-3xl mb-2">📓</div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Notion
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Notes, learning tracker, project docs
                </p>
              </div>
              <div className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Todoist
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Daily tasks and learning goals
                </p>
              </div>
              <div className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                <div className="text-3xl mb-2">⏱️</div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Pomodoro Timer
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Focused learning sessions
                </p>
              </div>
              <div className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                <div className="text-3xl mb-2">🐙</div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  GitHub
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Code portfolio & contribution streak
                </p>
              </div>
              <div className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                <div className="text-3xl mb-2">🎧</div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Tech Podcasts
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Learning during commute
                </p>
              </div>
              <div className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-2xl text-center border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Discord/Slack
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Developer communities
                </p>
              </div>
            </div>
          </section>

          {/* Progress Over Time */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30">
                📈
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                My Growth Over Time
              </h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-200 dark:border-green-700/50">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm font-bold text-green-700 dark:text-green-300">
                    Month 1-3
                  </span>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Overwhelmed, scattered learning
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm font-bold text-green-700 dark:text-green-300">
                    Month 4-6
                  </span>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Finding rhythm, still struggling
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm font-bold text-green-700 dark:text-green-300">
                    Month 7-9
                  </span>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-lime-400 to-green-400 rounded-full"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Strategies working, confidence growing
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-24 text-sm font-bold text-green-700 dark:text-green-300">
                    Month 10+
                  </span>
                  <div className="flex-1 bg-white dark:bg-slate-800 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Balanced, sustainable growth
                  </span>
                </div>
              </div>
            </div>
          </section>

      {/* Closing */}
          <section className="text-center mb-12">
            <div className="inline-block p-8 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-3xl">
              <blockquote className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                "You don't have to learn everything. You just have to learn the
                right things at the right time—and keep showing up."
              </blockquote>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                The balance isn't perfect every day. Some weeks I learn more,
                some weeks I ship more. And that's okay.{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  Progress isn't linear.
                </span>
              </p>
              <p className="mt-4 text-2xl">🚀</p>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-12">
            <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📌</span> Key Takeaways
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-slate-300">
                    Learn just-in-time, not just-in-case
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-slate-300">
                    Projects are the best teachers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-slate-300">
                    Schedule learning like meetings
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-slate-300">
                    Go deep in one stack first
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-slate-300">
                    Rest is part of learning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span>
                  <span className="text-slate-300">
                    Compare to your past self only
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Share & Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 dark:text-slate-400">
                Share this:
              </span>
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors cursor-pointer">
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
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
            >
              View More Posts →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
