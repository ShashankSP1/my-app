"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import React, { useState } from "react";
import { sendEmail } from "../utils/api";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Swal = typeof window !== "undefined" ? require("sweetalert2") : null;

export default function Contact() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // ✅ Directly use EmailJS helper
    const { ok, data, error } = await sendEmail(formData);

    if (ok) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: data?.message || "Message sent!",
        confirmButtonColor: "#2563eb",
      });
      setStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error || data?.message || "Something went wrong.",
      });
      setStatus("");
    }
  };

  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div
            className={` ${
              theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
            } shadow-lg rounded-2xl p-6 backdrop-blur-lg`}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">Let’s work together 🤝</h2>
            </motion.div>
            <p
              className={` ${
                theme === "dark" ? "text-white" : "text-gray-600"
              } mb-6`}
            >
              Have a project, idea, or opportunity? Drop a message — I reply
              fast.
            </p>

            {/* ✅ FORM SECTION */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 p-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : ""
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 p-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : ""
                }`}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 p-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : ""
                }`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full border border-gray-300 p-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : ""
                }`}
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                {status === "Sending..." ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </div>

          {/* Right Side - Info & Socials */}
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-2xl p-6 flex flex-col gap-6`}
          >
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <div className="w-full h-72 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13081.610284027563!2d77.6216994782562!3d12.89575801197963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14bc1f875dd5%3A0x2b126387f21954a7!2sGarvebhavi%20Palya%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1756386216861!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <p className="flex flex-wrap items-center">
                <span className="text-lg font-bold mr-1 ">Address:</span>
                Garvebhavi Palya, Hosur Main Road, Bengaluru, Karnataka, India -
                560068
              </p>
            </div>
            <div>
              <h1 className="text-2xl gap-5">Connect with me</h1>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/shashanksp1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-500"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/shashankshiva6361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:shashankshiva6361@gmail.com"
                  className="hover:text-red-600"
                >
                  <FaEnvelope size={20} />
                </a>
                <a
                  href="https://x.com/shashankshivap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/shashank__s_____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-24 ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 backdrop-blur-xl shadow-xl ${
              theme === "dark"
                ? "bg-slate-800/70 border border-slate-700"
                : "bg-white/80 border"
            }`}
          >
            <h2 className="text-3xl font-bold mb-2">Let’s work together 🤝</h2>
            <p
              className={`mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              Have a project, idea, or opportunity? Drop a message — I reply
              fast.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((field) => (
                <input
                  key={field.name}
                  {...field}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-violet-500 outline-none ${
                    theme === "dark"
                      ? "bg-slate-700 text-white placeholder-gray-400"
                      : "bg-gray-100"
                  }`}
                />
              ))}

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-violet-500 outline-none ${
                  theme === "dark"
                    ? "bg-slate-700 text-white placeholder-gray-400"
                    : "bg-gray-100"
                }`}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-transform"
              >
                {status === "Sending..." ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT — INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`rounded-3xl p-8 shadow-xl ${
              theme === "dark"
                ? "bg-slate-800/80 border border-slate-700"
                : "bg-white"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>

            <div className="w-full h-64 rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13081.610284027563!2d77.6216994782562!3d12.89575801197963!"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <p className="text-sm mb-6 leading-relaxed">
              <strong>📍 Address:</strong> Garvebhavi Palya, Hosur Main Road,
              Bengaluru – 560068
            </p>

            <h3 className="text-xl font-semibold mb-3">Connect with me</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/shashanksp1" },
                {
                  icon: <FaLinkedin />,
                  link: "https://linkedin.com/in/shashankshiva6361",
                },
                { icon: <FaTwitter />, link: "https://x.com/shashankshivap" },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/shashank__s_____/",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:shashankshiva6361@gmail.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-violet-600/10 hover:bg-violet-600 hover:text-white transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
