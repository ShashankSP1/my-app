import React from "react";

export default function FourthBlog() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/gym image.jpg')" }}
    >
      <div className="max-w-4xl mx-auto p-6 rounded-xl space-y-6 mt-20 bg-white/60 backdrop-blur">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2 text-indigo-600">
          Balancing Health & Coding: Fitness for Developers
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          By Shashank S P · Sept 24, 2025 · 4 min read
        </p>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            “As developers, we spend hours sitting in front of a screen. While
            coding sharpens our mind, it can sometimes weaken our body if we
            don’t take care of our health.”
          </p>
          <p>
            Long hours sitting, hair fall, weight changes, and eye strain are
            some common issues I experienced.
          </p>
        </section>

        {/* Challenges */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            The Challenges Developers Face
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Long sitting hours → back pain, posture issues.</li>
            <li>Eating outside food (common in IT cities like Bengaluru).</li>
            <li>Eye strain & headaches from screens.</li>
            <li>
              Lack of time for fitness due to deadlines and learning pressure.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            The Challenges Developers Face
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Long sitting hours → back pain, posture issues.</li>
            <li>Eating outside food (common in IT cities like Bengaluru).</li>
            <li>Eye strain & headaches from screens.</li>
            <li>
              Lack of time for fitness due to deadlines and learning pressure.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Why Health Matters for Developers
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Good fitness improves focus & productivity.</li>
            <li>Helps avoid burnout and stress.</li>
            <li>Keeps long-term career sustainable.</li>
            <li>Builds confidence during work and interviews.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Practical Fitness Tips for Developers
          </h2>

          {/* Desk & Posture */}
          <div className="mt-2">
            <h3 className="text-xl font-semibold">1. Desk & Posture</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use a comfortable chair or back support.</li>
              <li>
                Follow 20-20-20 rule for eyes (every 20 mins, look 20 feet away
                for 20 seconds).
              </li>
              <li>Sit straight with screen at eye level.</li>
            </ul>
          </div>

          {/* Movement & Exercise */}
          <div className="mt-2">
            <h3 className="text-xl font-semibold">2. Movement & Exercise</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Take 5–10 min stretch breaks every 1–2 hours.</li>
              <li>Short walks after meals.</li>
              <li>
                Light exercises: push-ups, planks, squats (no equipment needed).
              </li>
              <li>If possible, evening workouts or weekend sports.</li>
            </ul>
          </div>

          {/* Food & Lifestyle */}
          <div className="mt-2">
            <h3 className="text-xl font-semibold">3. Food & Lifestyle</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Avoid junk food during work hours (meal prep if possible).
              </li>
              <li>Stay hydrated (keep a bottle near desk).</li>
              <li>Limit caffeine, balance with water.</li>
            </ul>
          </div>

          {/* Mental Health */}
          <div className="mt-2">
            <h3 className="text-xl font-semibold">4. Mental Health</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Don’t overload with tutorials/projects non-stop.</li>
              <li>Meditation or breathing exercises (2–5 mins can help).</li>
              <li>Socialize or take short breaks away from screen.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 bg-indigo-50 py-2 my-4">
            “You don’t need a gym membership to stay fit. Small, consistent
            habits can make you healthier and more productive as a developer.”
          </blockquote>
          <p className="font-semibold">Code smart, live healthy 🚀</p>
        </section>
      </div>
    </div>
  );
}
