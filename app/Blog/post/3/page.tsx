"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function VillagepeBlog() {
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

  const featureCard = (
    icon: string,
    title: string,
    description: string,
    bgColorClass: string,
    borderColorClass: string
  ) => (
    <div
      className={`p-5 rounded-2xl border ${bgColorClass} ${borderColorClass} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>{title}</h3>
      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{description}</p>
    </div>
  );

  const lessonCard = (number: string, title: string, content: string) => (
    <div className={`flex gap-4 p-6 backdrop-blur-sm rounded-2xl border ${theme === "dark" ? "bg-slate-800/40 border-slate-700/50 hover:border-amber-700" : "bg-white/60 border-slate-200 hover:border-amber-300"} transition-all hover:shadow-lg group`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div>
        <h3 className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
          {title}
        </h3>
        <p className={` ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{content}</p>
      </div>
    </div>
  );

  const techBadge = (name: string, bgColorClass: string, textColorClass: string) => (
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
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={`min-h-screen bg-gradient-to-br ${theme === "dark" ? "from-slate-950 via-amber-950/20 to-slate-900" : "from-slate-50 via-amber-50 to-orange-50"}`}>
        {/* Hero Section */}
        <div className="relative overflow-hidden">

          <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/Blogs"
                className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors group"
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

              <span className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold">
                Real-World Project
              </span>

              <span className="inline-block px-4 py-1.5 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                FinTech
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Lessons Learned from Working on{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                VillagepePro
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
              My first real-world project as a developer—a comprehensive fintech
              platform that taught me more than any tutorial ever could.
            </p>

            {/* Author Card */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  Shashank S P
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  September 22, 2025 · 10 min read
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 pb-20">
          {/* Intro Section */}
          <section className={`backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-amber-500/5 mb-10 -mt-6 relative z-10 ${theme === "dark" ? "bg-slate-800/50 border border-amber-900/30" : "bg-white/70 border border-amber-100"}`}>
            <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
              <span className={`font-bold ${theme === "dark" ? "text-amber-400" : "text-amber-600"}`}>
                VillagepePro
              </span>{" "}
              was my baptism by fire into professional software development. As
              my first real-world project, it threw me into the deep end of
              fintech—handling real money, real users, and real consequences.
            </p>
            <p className={`text-lg leading-relaxed mt-4 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
              This wasn't a tutorial project with fake data. Every bug could
              affect someone's payment. Every feature had to work{" "}
              <span className="font-semibold">perfectly</span>. Here's what I
              learned.
            </p>
          </section>

          {/* What is VillagepePro */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/30">
                🏢
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                What is VillagepePro?
              </h2>
            </div>

            <div className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50" : "bg-white/60 border border-slate-200"} mb-6`}>
              <p className={`mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                VillagepePro is a comprehensive fintech platform designed to
                bring digital payment services to every corner of India. It
                enables retailers and agents to offer essential financial
                services to their customers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {featureCard(
                  "📱",
                  "Mobile Recharge",
                  "Prepaid recharges for all operators",
                  theme === "dark" ? "bg-blue-900/20" : "bg-blue-50",
                  theme === "dark" ? "border-blue-800/50" : "border-blue-200"
                )}
                {featureCard(
                  "📄",
                  "Bill Payments",
                  "Postpaid & utility bill payments",
                  theme === "dark" ? "bg-green-900/20" : "bg-green-50",
                  theme === "dark" ? "border-green-800/50" : "border-green-200"
                )}
                {featureCard(
                  "📺",
                  "DTH Recharge",
                  "Direct-to-home TV recharges",
                  theme === "dark" ? "bg-purple-900/20" : "bg-purple-50",
                  theme === "dark" ? "border-purple-800/50" : "border-purple-200"
                )}
                {featureCard(
                  "🏦",
                  "AEPS",
                  "Aadhaar-enabled banking services",
                  theme === "dark" ? "bg-amber-900/20" : "bg-amber-50",
                  theme === "dark" ? "border-amber-800/50" : "border-amber-200"
                )}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">
                ⚙️
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Tech Stack I Worked With
              </h2>
            </div>
            <div className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50" : "bg-white/60 border border-slate-200"}`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`font-bold mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techBadge(
                      "React.js",
                      theme === "dark" ? "bg-cyan-900/40" : "bg-cyan-100",
                      theme === "dark" ? "text-cyan-300" : "text-cyan-700"
                    )}
                    {techBadge(
                      "JavaScript",
                      theme === "dark" ? "bg-yellow-900/40" : "bg-yellow-100",
                      theme === "dark" ? "text-yellow-300" : "text-yellow-700"
                    )}
                    {techBadge(
                      "CSS3",
                      theme === "dark" ? "bg-blue-900/40" : "bg-blue-100",
                      theme === "dark" ? "text-blue-300" : "text-blue-700"
                    )}
                    {techBadge(
                      "Axios",
                      theme === "dark" ? "bg-purple-900/40" : "bg-purple-100",
                      theme === "dark" ? "text-purple-300" : "text-purple-700"
                    )}
                    {techBadge(
                      "React Router",
                      theme === "dark" ? "bg-red-900/40" : "bg-red-100",
                      theme === "dark" ? "text-red-300" : "text-red-700"
                    )}
                  </div>
                </div>
                <div>
                  <h3 className={`font-bold mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techBadge(
                      "Node.js",
                      theme === "dark" ? "bg-green-900/40" : "bg-green-100",
                      theme === "dark" ? "text-green-300" : "text-green-700"
                    )}
                    {techBadge(
                      "Express.js",
                      theme === "dark" ? "bg-slate-700" : "bg-slate-200",
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    )}
                    {techBadge(
                      "PostgreSQL",
                      theme === "dark" ? "bg-blue-900/40" : "bg-blue-100",
                      theme === "dark" ? "text-blue-300" : "text-blue-700"
                    )}
                    {techBadge(
                      "REST APIs",
                      theme === "dark" ? "bg-orange-900/40" : "bg-orange-100",
                      theme === "dark" ? "text-orange-300" : "text-orange-700"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Role */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-xl shadow-lg shadow-purple-500/30">
                👨‍💻
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                My Role & Responsibilities
              </h2>
            </div>

            <div className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-700/50" : "bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200"}`}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className={`flex items-start gap-3 p-4 rounded-xl ${theme === "dark" ? "bg-slate-800/80" : "bg-white/80"}`}>
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      UI Development
                    </h4>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      Building responsive interfaces for payment flows
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-4 rounded-xl ${theme === "dark" ? "bg-slate-800/80" : "bg-white/80"}`}>
                  <span className="text-2xl">🔗</span>
                  <div>
                    <h4 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      API Integration
                    </h4>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      Connecting frontend with payment gateways
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-4 rounded-xl ${theme === "dark" ? "bg-slate-800/80" : "bg-white/80"}`}>
                  <span className="text-2xl">🗃️</span>
                  <div>
                    <h4 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      Database Design
                    </h4>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      Structuring tables for transactions & users
                    </p>
                  </div>
                </div>
                <div className={`flex items-start gap-3 p-4 rounded-xl ${theme === "dark" ? "bg-slate-800/80" : "bg-white/80"}`}>
                  <span className="text-2xl">🐛</span>
                  <div>
                    <h4 className={`font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      Bug Fixing
                    </h4>
                    <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      Debugging production issues under pressure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Lessons */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
                💡
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Key Lessons Learned
              </h2>
            </div>

            <div className="space-y-4">
              {lessonCard(
                "1",
                "Money Doesn't Forgive Bugs",
                "In fintech, a small bug can mean real financial loss for users. I learned to test exhaustively, handle edge cases meticulously, and always have rollback plans. Double-checking transaction flows became second nature."
              )}
              {lessonCard(
                "2",
                "API Error Handling is Critical",
                "Payment APIs can fail in countless ways—timeouts, network issues, invalid responses. I learned to implement robust error handling, retry mechanisms, and user-friendly error messages that don't expose sensitive details."
              )}
              {lessonCard(
                "3",
                "Security is Non-Negotiable",
                "Working with AEPS (Aadhaar-based payments) taught me about data encryption, secure API calls, and why you never log sensitive information. I understood PCI-DSS compliance basics and secure coding practices."
              )}
              {lessonCard(
                "4",
                "Real Users Break Everything",
                "Tutorial projects work perfectly because you control the input. Real users enter invalid data, click buttons twice, lose internet mid-transaction. I learned to build defensively and anticipate the unexpected."
              )}
              {lessonCard(
                "5",
                "Communication > Code",
                "Working in a team taught me that clear communication about what I'm building, blockers I'm facing, and timelines I can meet is as important as writing good code. Daily standups became valuable, not tedious."
              )}
              {lessonCard(
                "6",
                "Production is a Different Beast",
                "Code that works locally might fail in production due to environment differences, server configurations, or scale. I learned about staging environments, proper deployment practices, and monitoring."
              )}
            </div>
          </section>

          {/* Challenges Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center text-xl shadow-lg shadow-red-500/30">
                🔥
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Biggest Challenges I Faced
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}>
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}>
                  🕐 Transaction Timeouts
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  Payment API calls sometimes took too long. Implemented proper
                  timeout handling and status checking to prevent duplicate
                  transactions.
                </p>
              </div>
              <div className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}>
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}>
                  🔄 State Management
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  Managing complex payment states (pending, success, failed,
                  refunded) across multiple components was tricky. Learned proper
                  state architecture.
                </p>
              </div>
              <div className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}>
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}>
                  📱 Mobile Responsiveness
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  Most users accessed via mobile. Ensuring payment forms worked
                  perfectly on small screens with various keyboards was
                  challenging.
                </p>
              </div>
              <div className={`p-5 rounded-2xl ${theme === "dark" ? "bg-rose-900/20 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}>
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-rose-300" : "text-rose-700"}`}>
                  🧪 Testing Payments
                </h3>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  Can't test real payments freely. Learned to use sandbox
                  environments, mock APIs, and carefully structured test cases.
                </p>
              </div>
            </div>
          </section>

          {/* Code Snippet */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-xl shadow-lg shadow-slate-500/30">
                💻
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Code Pattern: Safe API Calls
              </h2>
            </div>

            <div className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-slate-800/40 border border-slate-700/50" : "bg-white/60 border border-slate-200"}`}>
              <p className={`mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                One pattern I developed for handling payment API calls safely:
              </p>
              <pre className="bg-slate-900 dark:bg-slate-950 rounded-xl p-4 overflow-x-auto border border-slate-700">
                <code className="text-sm text-emerald-400 font-mono">
                  {`const processRecharge = async (data) => {
  try {
    setLoading(true);
    setError(null);
    
    // Validate before API call
    if (!validateRechargeData(data)) {
      throw new Error('Invalid recharge data');
    }
    
    // API call with timeout
    const response = await axios.post('/api/recharge', data, {
      timeout: 30000, // 30 second timeout
    });
    
    // Verify response structure
    if (response.data?.status === 'SUCCESS') {
      setTransactionId(response.data.txnId);
      showSuccessMessage();
    } else {
      throw new Error(response.data?.message || 'Unknown error');
    }
    
  } catch (error) {
    // Handle specific error types
    if (error.code === 'ECONNABORTED') {
      setError('Request timed out. Please check status.');
    } else {
      setError(error.message);
    }
    logErrorToServer(error); // For debugging
  } finally {
    setLoading(false);
  }
};`}
                </code>
              </pre>
            </div>
          </section>

          {/* What I Would Do Differently */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/30">
                🔄
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                What I Would Do Differently
              </h2>
            </div>

            <div className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-700/50" : "bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200"}`}>
              <ul className={`space-y-3 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1 font-bold">→</span>
                  <span>
                    <strong>Use TypeScript from day one</strong> — would have
                    caught so many bugs earlier
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1 font-bold">→</span>
                  <span>
                    <strong>Write tests earlier</strong> — not just after things
                    break
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1 font-bold">→</span>
                  <span>
                    <strong>Document API contracts</strong> — would have saved
                    hours of debugging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1 font-bold">→</span>
                  <span>
                    <strong>Set up proper logging</strong> — production debugging
                    would have been easier
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1 font-bold">→</span>
                  <span>
                    <strong>Ask more questions upfront</strong> — assumptions led
                    to rework
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Impact & Growth */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-emerald-500/30">
                📈
              </div>
              <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                How This Project Changed Me
              </h2>
            </div>

            <div
              className={`backdrop-blur-sm rounded-2xl p-6 ${theme === "dark" ? "bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50" : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"}`}
            >
              <div className="grid gap-6 sm:grid-cols-3 mb-6">
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                  >
                    6+
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Months of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                  >
                    50+
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Features Developed
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                  >
                    ∞
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Lessons Learned
                  </div>
                </div>
              </div>

              <p
                className={` ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
              >
                Before VillagepePro, I was a developer who could follow
                tutorials. After, I became someone who could{" "}
                <span
                  className={`font-semibold ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                >
                  build real solutions
                </span>{" "}
                for real problems. The confidence, problem-solving skills, and
                professional experience I gained are invaluable.
              </p>
            </div>
          </section>

          {/* Closing */}
          <section className="text-center">
            <div className={`inline-block p-8 rounded-3xl ${theme === "dark" ? "bg-gradient-to-br from-amber-900/30 to-orange-900/30" : "bg-gradient-to-br from-amber-100 to-orange-100"}`}>
              <p className={`text-lg max-w-2xl ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                If you're a fresher waiting for the "perfect" first project—
                <span className={`font-semibold ${theme === "dark" ? "text-amber-600" : "text-amber-400"}`}>
                  stop waiting
                </span>
                . Jump into something challenging. The messier the project, the
                more you'll learn.
              </p>
              <p className={`mt-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                VillagepePro wasn't perfect, but it made me a real developer. 🚀
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
                    `https://twitter.com/intent/tweet?text=Check out this blog post: Lessons Learned from Working on VillagepePro by Shashank S P!&url=${window.location.href}`,
                    "_blank"
                  )
                }
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 hover:bg-amber-900/50" : "bg-slate-100 hover:bg-amber-100"}`}
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
                    `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=Lessons Learned from Working on VillagepePro&summary=My first real-world project as a developer—a comprehensive fintech platform that taught me more than any tutorial ever could.&source=`,
                    "_blank"
                  )
                }
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 hover:bg-amber-900/50" : "bg-slate-100 hover:bg-amber-100"}`}
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
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 hover:bg-amber-900/50" : "bg-slate-100 hover:bg-amber-100"}`}
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
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5"
            >
              View More Posts →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
