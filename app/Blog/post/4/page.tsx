"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FitnessBlog() {
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

  const challengeCard = (icon: string, title: string, description: string) => (
    <div className="flex items-start gap-4 p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl hover:shadow-lg transition-all">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );

  const tipCard = (
    number: string,
    icon: string,
    title: string,
    tips: string[],
    gradientFrom: string,
    gradientTo: string
  ) => (
    <div className="group">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>
        <div>
          <span className="text-xs font-bold text-lime-600 dark:text-lime-400">
            TIP {number}
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>
      </div>
      <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 border border-slate-200 dark:border-slate-700/50 group-hover:border-lime-300 dark:group-hover:border-lime-700 transition-colors">
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
            >
              <span className="text-lime-500 mt-1">✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const benefitCard = (icon: string, title: string, description: string) => (
    <div className="text-center p-6 bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-lime-900/20 dark:to-emerald-900/20 rounded-2xl border border-lime-200 dark:border-lime-800/50 hover:scale-105 transition-transform">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-lime-50 to-emerald-50 dark:from-slate-950 dark:via-lime-950/20 dark:to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">

          <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/Blogs"
                className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 hover:text-lime-800 dark:hover:text-lime-300 transition-colors group"
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

              <span className="inline-block px-4 py-1.5 bg-lime-100 dark:bg-lime-900/50 text-lime-700 dark:text-lime-300 rounded-full text-sm font-semibold">
                Wellness
              </span>

              <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
                Lifestyle
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Balancing Health & Coding:{" "}
              <span className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                Fitness for Developers
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
              Because your body is the hardware that runs all your code. Take
              care of it.
            </p>

            {/* Author Card */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Shashank S P
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  September 22, 2025 · 6 min read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro Section */}
          <section className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-lime-500/5 border border-lime-100 dark:border-lime-900/30 mb-10 -mt-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💻</div>
              <div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  As developers, we spend{" "}
                  <span className="font-bold text-lime-600 dark:text-lime-400">
                    8-12 hours
                  </span>{" "}
                  sitting in front of a screen. While coding sharpens our mind,
                  it can sometimes weaken our body if we don't take care of our
                  health.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                  Long hours sitting, hair fall, weight changes, eye strain,
                  back pain—I've experienced them all. Here's what I've learned
                  about staying healthy as a developer.
                </p>
              </div>
            </div>
          </section>

          {/* The Challenges */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center text-xl shadow-lg shadow-rose-500/30">
                ⚠️
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                The Challenges Developers Face
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {challengeCard(
                "🪑",
                "Sedentary Lifestyle",
                "Long sitting hours lead to back pain, poor posture, and muscle stiffness"
              )}
              {challengeCard(
                "🍔",
                "Poor Diet Habits",
                "Eating outside food, skipping meals, or stress-eating junk during deadlines"
              )}
              {challengeCard(
                "👀",
                "Eye Strain & Headaches",
                "Constant screen exposure causes dry eyes, headaches, and vision problems"
              )}
              {challengeCard(
                "⏰",
                "No Time for Fitness",
                "Deadlines, learning pressure, and long hours leave little time for exercise"
              )}
              {challengeCard(
                "😴",
                "Sleep Deprivation",
                "Late-night coding sessions disrupt sleep patterns and recovery"
              )}
              {challengeCard(
                "🧠",
                "Mental Exhaustion",
                "Constant problem-solving leads to burnout and cognitive fatigue"
              )}
            </div>
          </section>

          {/* Why Health Matters */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/30">
                💪
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Why Health Matters for Developers
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefitCard(
                "🎯",
                "Better Focus",
                "Good fitness improves concentration and productivity"
              )}
              {benefitCard(
                "🔥",
                "Avoid Burnout",
                "Regular exercise reduces stress and prevents exhaustion"
              )}
              {benefitCard(
                "📈",
                "Long Career",
                "Healthy habits keep your career sustainable for decades"
              )}
              {benefitCard(
                "💼",
                "Confidence",
                "Feel better in interviews, meetings, and daily work"
              )}
            </div>
          </section>

          {/* Practical Tips */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center text-xl shadow-lg shadow-green-500/30">
                🏃
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Practical Fitness Tips for Developers
              </h2>
            </div>

            <div className="space-y-8">
              {tipCard(
                "01",
                "🪑",
                "Desk & Posture",
                [
                  "Use a comfortable ergonomic chair or back support cushion",
                  "Follow the 20-20-20 rule: every 20 mins, look 20 feet away for 20 seconds",
                  "Keep your screen at eye level to avoid neck strain",
                  "Position keyboard so arms are at 90-degree angle",
                ],
                "from-blue-400",
                "to-cyan-500"
              )}

              {tipCard(
                "02",
                "🏋️",
                "Movement & Exercise",
                [
                  "Take 5-10 min stretch breaks every 1-2 hours",
                  "Short walks after meals aid digestion and refresh mind",
                  "Bodyweight exercises: push-ups, planks, squats (no equipment needed)",
                  "Evening workouts or weekend sports when possible",
                  "Stand up and move for at least 5 mins every hour",
                ],
                "from-orange-400",
                "to-red-500"
              )}

              {tipCard(
                "03",
                "🥗",
                "Food & Hydration",
                [
                  "Meal prep to avoid ordering junk food during work hours",
                  "Keep a water bottle at your desk—aim for 8 glasses daily",
                  "Limit caffeine intake, balance with water",
                  "Healthy snacks: nuts, fruits, yogurt instead of chips",
                  "Avoid eating at your desk—take proper meal breaks",
                ],
                "from-green-400",
                "to-emerald-500"
              )}

              {tipCard(
                "04",
                "🧘",
                "Mental Wellness",
                [
                  "Don't overload with tutorials/projects non-stop—take breaks",
                  "2-5 mins of meditation or breathing exercises can reset your mind",
                  "Step away from screen during breaks—go outside if possible",
                  "Maintain social connections—don't isolate yourself",
                  "Set boundaries: define work hours and stick to them",
                ],
                "from-purple-400",
                "to-violet-500"
              )}

              {tipCard(
                "05",
                "😴",
                "Sleep & Recovery",
                [
                  "Aim for 7-8 hours of quality sleep every night",
                  "Avoid screens 1 hour before bedtime—use night mode if needed",
                  "Keep a consistent sleep schedule, even on weekends",
                  "Create a dark, cool sleeping environment",
                  "Your brain consolidates learning during sleep—don't skip it!",
                ],
                "from-indigo-400",
                "to-blue-500"
              )}
            </div>
          </section>

          {/* Quick Desk Exercises */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
                ⚡
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Quick Desk Exercises (No Equipment)
              </h2>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 dark:border-amber-700/50">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl text-center">
                  <div className="text-3xl mb-2">🙆</div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Neck Rolls
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    10 circles each direction
                  </p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl text-center">
                  <div className="text-3xl mb-2">🤷</div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Shoulder Shrugs
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    15 reps, hold 3 seconds
                  </p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl text-center">
                  <div className="text-3xl mb-2">🙌</div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Arm Stretches
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Reach up, hold 15 seconds
                  </p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl text-center">
                  <div className="text-3xl mb-2">🦵</div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Leg Raises
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    10 reps while seated
                  </p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl text-center">
                  <div className="text-3xl mb-2">🧍</div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Standing Stretch
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Stand, touch toes, 30 sec
                  </p>
                </div>
                <div className="p-4 bg-white/80 dark:bg-slate-800/80 rounded-xl text-center">
                  <div className="text-3xl mb-2">👐</div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Wrist Circles
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Prevent carpal tunnel
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* My Personal Routine */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/30">
                📅
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                My Daily Routine
              </h2>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 border-l-4 border-lime-500 bg-lime-50 dark:bg-lime-900/20 rounded-r-xl">
                  <span className="font-mono font-bold text-lime-600 dark:text-lime-400">
                    6:30 AM
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Wake up, hydrate, 10 min stretching
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-xl">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                    9:00 AM
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Start work with healthy breakfast
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-xl">
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                    Every 2h
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    5-min break: walk, stretch, hydrate
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-r-xl">
                  <span className="font-mono font-bold text-orange-600 dark:text-orange-400">
                    1:00 PM
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Lunch away from desk + short walk
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-xl">
                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400">
                    6:30 PM
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Evening workout or outdoor walk
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-xl">
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    10:30 PM
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Wind down, no screens, prepare for sleep
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Quote */}
          <section className="text-center mb-12">
            <div className="inline-block p-8 bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-lime-900/30 dark:to-emerald-900/30 rounded-3xl">
              <blockquote className="text-2xl font-bold text-slate-700 dark:text-slate-300 italic mb-4">
                "You don't need a gym membership to stay fit. Small, consistent
                habits can make you healthier and more productive as a
                developer."
              </blockquote>
              <p className="text-xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
                Code smart, live healthy 🚀
              </p>
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
                  <span className="text-lime-400">→</span>
                  <span className="text-slate-300">Move every 1-2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lime-400">→</span>
                  <span className="text-slate-300">Stay hydrated always</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lime-400">→</span>
                  <span className="text-slate-300">
                    Prioritize sleep (7-8 hrs)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lime-400">→</span>
                  <span className="text-slate-300">
                    Take care of your eyes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lime-400">→</span>
                  <span className="text-slate-300">
                    Meal prep beats junk food
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lime-400">→</span>
                  <span className="text-slate-300">
                    Mental health matters too
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
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-lime-100 dark:hover:bg-lime-900/50 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-lime-100 dark:hover:bg-lime-900/50 transition-colors cursor-pointer">
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
              className="px-6 py-3 bg-gradient-to-r from-lime-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-lime-500/30 transition-all hover:-translate-y-0.5"
            >
              View More Posts →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
