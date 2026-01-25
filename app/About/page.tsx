"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBirthdayCake,
  FaClock,
  FaLanguage,
  FaLaptopHouse,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaJava,
  FaReact,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import Link from "next/link";
import { useTheme } from "next-themes";

const date = () => {
  const birthDate = new Date("2001-12-04");
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years ${months} months ${days} days`;
};

const exp = () => {
  const startDate = new Date("2025-03-04");
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years ${months} months`;
};

const about = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { src: "/java.webp", alt: "Java" },
    { src: "/mongodb.webp", alt: "MongoDB" },
    { src: "/my_sql.webp", alt: "MySQL" },
    { src: "/react.webp", alt: "React.js" },
    { src: "/node.js.png", alt: "Node.js" },
    { src: "/postgres.webp", alt: "PostGreSQL" },
    { src: "/javascript.png", alt: "JavaScript" },
    {
      src: `${theme === "dark" ? "/github.svg" : "/github.png"}`,
      alt: "Git",
    },
    {
      src: `${theme === "dark" ? "/express.js.png" : "/expressjs.png"}`,
      alt: "Express.js",
    },
    { src: "/IntelliJ_IDEA.png", alt: "Intellij_IDEA" },
    { src: "/vscode.png", alt: "VS Code" },
    {
      src: `${theme === "dark" ? "/jQuery-dark.png" : "/jQuery.png"}`,
      alt: "jQuery",
    },
    { src: "/postman-logo.png", alt: "Postman" },
    { src: "/gitlab.png", alt: "GitLab" },
  ];

  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Zeksta Technology Pvt Ltd",
      duration: "March 2025 - Present",
      description: [
        "Building scalable web apps using React, Node.js, Express, and MongoDB.",
        "Collaborated with team in an Agile environment to deliver features.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "FreeLancer",
      duration: "September 2025 - Present",
      description: [
        "Developed and customized websites for small businesses.",
        "Ensured responsive design and SEO optimization.",
      ],
    },
    {
      role: "Java Full Stack Trainee",
      company: "Training Program",
      duration: "June 2023 - September 2023",
      description:
        "Completed 4-month Java Full Stack course (Core Java, HTML, CSS, JavaScript and MySQL) and built simple projects.",
    },
  ];

  if (!mounted) return null;

  return (
    <div className={`min-h-screen pt-20 pb-20 bg-gradient-to-br ${theme === "dark" ? "from-slate-950 via-indigo-950 to-slate-900" : "from-slate-50 via-blue-50 to-cyan-50"}`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br py-20 ${theme === "dark" ? "from-slate-900 via-indigo-900 to-purple-950" : "from-blue-100 via-purple-100 to-pink-100"}`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center"
          >
            {/* About Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 mb-8 hover:shadow-3xl transition-shadow ${theme === "dark" ? "bg-gray-800/90 border-gray-700" : "bg-white/90 border-gray-300"}`}
            >
              <h2 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                About Me
              </h2>
              <p className={`text-lg leading-relaxed mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                I'm a passionate Software Engineer dedicated to creating
                innovative and efficient web solutions. I specialize in building
                scalable web applications using modern technologies like React,
                Next.js, Node.js, and various databases. With a strong focus on
                clean code, user experience, and performance optimization, I
                bring ideas to life through elegant and maintainable solutions.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Currently working as a Junior Software Engineer, I'm always
                eager to learn new technologies and take on challenging
                projects. I'm open to remote roles and freelance opportunities.
              </p>

              {/* Quick Info Grid */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-colors shadow-md hover:shadow-lg ${theme === "dark" ? "bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-700 hover:border-blue-600" : "bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-300 hover:border-blue-400"}`}>
                  <FaMapMarkerAlt className={`text-xl ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Location
                    </div>
                    <div className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Bengaluru, KA
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-colors shadow-md hover:shadow-lg ${theme === "dark" ? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-700 hover:border-purple-600" : "bg-gradient-to-br from-purple-100 to-pink-100 border-purple-300 hover:border-purple-400"}`}>
                  <FaLanguage className={`text-xl ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Languages
                    </div>
                    <div className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Kannada, English, Hindi
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-colors shadow-md hover:shadow-lg ${theme === "dark" ? "bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-700 hover:border-green-600" : "bg-gradient-to-br from-green-100 to-emerald-100 border-green-300 hover:border-green-400"}`}>
                  <FaLaptopHouse className={`text-xl ${theme === "dark" ? "text-green-400" : "text-green-600"}`} />
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Available For
                    </div>
                    <div className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      Remote & Freelance
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Interests - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Core Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className={`backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 hover:shadow-3xl transition-shadow ${theme === "dark" ? "bg-gray-800/90 border-gray-700" : "bg-white/90 border-gray-300"}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <FaCode className="text-2xl text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Core Skills
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "React.js", icon: SiReact, color: "from-blue-500 to-cyan-500", borderLight: "border-blue-400", borderDark: "border-blue-600" },
                    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-700 to-gray-900", borderLight: "border-gray-500", borderDark: "border-gray-400" },
                    { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-emerald-500", borderLight: "border-green-400", borderDark: "border-green-600" },
                    { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-orange-500", borderLight: "border-yellow-400", borderDark: "border-yellow-600" },
                    { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-indigo-600", borderLight: "border-blue-500", borderDark: "border-blue-500" },
                    { name: "Java", icon: FaJava, color: "from-orange-500 to-red-600", borderLight: "border-orange-400", borderDark: "border-orange-600" },
                    { name: "React Native", icon: FaReact, color: "from-cyan-500 to-blue-600", borderLight: "border-cyan-400", borderDark: "border-cyan-600" },
                    { name: "PostgreSQL", icon: SiPostgresql, color: "from-indigo-500 to-purple-500", borderLight: "border-indigo-400", borderDark: "border-indigo-600" },
                    { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-teal-600", borderLight: "border-green-500", borderDark: "border-green-500" },
                    { name: "Express.js", icon: SiExpress, color: "from-gray-600 to-gray-800", borderLight: "border-gray-500", borderDark: "border-gray-400" },
                  ].map((skill, idx) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative"
                      >
                        <div className={`bg-gradient-to-br ${skill.color} rounded-xl p-3 shadow-lg border-2 ${theme === "dark" ? skill.borderDark : skill.borderLight} hover:shadow-xl transition-all cursor-pointer flex items-center gap-2`}>
                          <IconComponent className="text-white text-xl flex-shrink-0" />
                          <span className="text-white font-semibold text-xs md:text-sm truncate">
                            {skill.name}
                          </span>
                          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${theme === "dark" ? "bg-black/10" : "bg-white/10"}`}></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Interests & Passions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className={`backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 hover:shadow-3xl transition-shadow ${theme === "dark" ? "bg-gray-800/90 border-gray-700" : "bg-white/90 border-gray-300"}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-yellow-900/50" : "bg-yellow-100"}`}>
                    <FaLightbulb className={`text-2xl ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Interests & Passions
                  </h3>
                </div>
                <ul className={`space-y-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  <li className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100"}`}>
                    <span className={`text-lg ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}>
                      →
                    </span>
                    <span className="font-medium">
                      Web Development & Modern Frameworks
                    </span>
                  </li>
                  <li className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100"}`}>
                    <span className={`text-lg ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}>
                      →
                    </span>
                    <span className="font-medium">
                      Building Scalable Applications
                    </span>
                  </li>
                  <li className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100"}`}>
                    <span className={`text-lg ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}>
                      →
                    </span>
                    <span className="font-medium">
                      DevOps & CI/CD Practices
                    </span>
                  </li>
                  <li className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100"}`}>
                    <span className={`text-lg ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}>
                      →
                    </span>
                    <span className="font-medium">
                      Problem Solving & Algorithm Design
                    </span>
                  </li>
                  <li className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${theme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-100"}`}>
                    <span className={`text-lg ${theme === "dark" ? "text-yellow-400" : "text-yellow-500"}`}>
                      →
                    </span>
                    <span className="font-medium">
                      Learning New Technologies
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/Project"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                View My Projects
              </Link>
              <Link
                href="/Blog"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
              >
                Read My Blog
              </Link>
              <Link
                href="/Contact"
                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section className={`py-16 bg-gradient-to-br ${theme === "dark" ? "from-gray-900 via-slate-900 to-indigo-950" : "from-white via-blue-50 to-purple-50"}`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Personal Details
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaUser,
                label: "Name",
                value: "Shashank S P",
                color: "blue",
              },
              {
                icon: FaBriefcase,
                label: "Role",
                value: "Software Engineer",
                color: "green",
              },
              {
                icon: FaGraduationCap,
                label: "Education",
                value: "Bachelor of Engineering",
                color: "purple",
              },
              {
                icon: FaBirthdayCake,
                label: "Age",
                value: date(),
                color: "pink",
              },
              {
                icon: FaClock,
                label: "Experience",
                value: exp(),
                color: "yellow",
              },
              {
                icon: FaLaptopHouse,
                label: "Open to",
                value: "Remote & Freelance",
                color: "indigo",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: "from-blue-500 to-cyan-500 border-blue-200 dark:border-blue-800",
                green:
                  "from-green-500 to-emerald-500 border-green-200 dark:border-green-800",
                purple:
                  "from-purple-500 to-pink-500 border-purple-200 dark:border-purple-800",
                pink: "from-pink-500 to-rose-500 border-pink-200 dark:border-pink-800",
                yellow:
                  "from-yellow-500 to-amber-500 border-yellow-200 dark:border-yellow-800",
                indigo:
                  "from-indigo-500 to-violet-500 border-indigo-200 dark:border-indigo-800",
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-2xl p-6 shadow-lg border-2 hover:scale-105 transition-transform`}
                >
                  <Icon className="text-white text-3xl mb-4" />
                  <div className="text-white/90 text-sm mb-1">{item.label}</div>
                  <div className="text-white font-bold text-lg">
                    {item.value}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Experience Section - Side by Side */}
      <section className={`py-16 bg-gradient-to-br ${theme === "dark" ? "from-gray-950 via-slate-900 to-blue-950" : "from-cyan-50 via-blue-50 to-indigo-50"}`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Section - Half Width */}
            <div className="lg:w-full">
              <div className="flex items-center gap-3 mb-8">
                <FaGraduationCap className={`text-4xl ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Education
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    degree: "Bachelor of Engineering",
                    institution:
                      "UBDT College of Engineering, Davanagere, Karnataka",
                    score: "7.63 CGPA",
                    period: "Aug 2019 - May 2023",
                    color: "red",
                    icon: "🎓",
                  },
                  {
                    degree: "Pre University Education",
                    institution: "Government PU College, Anavatti, Karnataka",
                    score: "81%",
                    period: "2017 - 2019",
                    color: "green",
                    icon: "📚",
                  },
                  {
                    degree: "SSLC",
                    institution:
                      "Morarji Desai Residential School, Churchigundi, Karnataka",
                    score: "92%",
                    period: "2016 - 2017",
                    color: "yellow",
                    icon: "📖",
                  },
                ].map((edu, index) => {
                  const colorClasses = {
                    red: theme === "dark" ? "border-red-500 bg-red-950/30" : "border-red-500 bg-red-50",
                    green: theme === "dark" ? "border-green-500 bg-green-950/30" : "border-green-500 bg-green-50",
                    yellow: theme === "dark" ? "border-yellow-500 bg-yellow-950/30" : "border-yellow-500 bg-yellow-50",
                  };

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`border-l-4 ${colorClasses[edu.color as keyof typeof colorClasses]} rounded-r-2xl p-5 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">{edu.icon}</div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            {edu.degree}
                          </h3>
                          <p className={`text-base mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                            {edu.institution}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                              {edu.score}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Experience Section - Adjacent */}
            <div className="lg:w-full">
              <div className="flex items-center gap-3 mb-8">
                <FaRocket className={`text-4xl ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Experience
                </h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => {
                  const colorClasses = {
                    purple: theme === "dark" ? "border-purple-500 bg-purple-950/30" : "border-purple-500 bg-purple-50",
                    pink: theme === "dark" ? "border-pink-500 bg-pink-950/30" : "border-pink-500 bg-pink-50",
                    blue: theme === "dark" ? "border-blue-500 bg-blue-950/30" : "border-blue-500 bg-blue-50",
                  };
                  const colors = ["purple", "pink", "blue"] as const;
                  const color = colors[index % colors.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`border-l-4 ${colorClasses[color]} rounded-r-2xl p-5 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-3xl">
                          {index === 0 ? "💼" : index === 1 ? "🚀" : "📚"}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            {exp.role}
                          </h3>
                          <p className={`text-base mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                              {exp.duration}
                            </span>
                          </div>
                          {Array.isArray(exp.description) ? (
                            <ul className={`space-y-1.5 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                              {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className={`mt-0.5 ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`}>•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-16 bg-gradient-to-br ${theme === "dark" ? "from-slate-900 via-purple-950 to-fuchsia-950" : "from-white via-purple-50 to-pink-50"}`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <FaCode className={`text-4xl ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
            <h2 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Technologies I Work With
            </h2>
          </div>

          <div className={`relative overflow-hidden w-full h-32 bg-gradient-to-r rounded-2xl p-6 border ${theme === "dark" ? "from-blue-950 to-purple-950 border-gray-700" : "from-blue-50 to-purple-50 border-gray-200"}`}>
            <div className="absolute animate-marquee flex gap-14 whitespace-nowrap">
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -10 }}
                  className={`flex items-center justify-center w-16 h-16 rounded-xl shadow-lg p-2 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
