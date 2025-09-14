"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { sendEmail } from "../utils/api";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Swal = typeof window !== "undefined" ? require("sweetalert2") : null;

export default function Contact() {
  const { theme, setTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

  //   try {
  //     // const res = await fetch("http://localhost:5000/api/send-email" , {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         to: "shashankshiva6361@gmail.com",
  //         subject: formData.subject,
  //         text: `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
  //       }),
  //     });

  //     const data = await res.json();

  //   if (res.ok) {
  //     Swal.fire({
  //       icon: "success",
  //       title: "Your message has been sent successfully",
  //       text: data.message,
  //       confirmButtonColor: "#2563eb",
  //     });
  //     setStatus("");
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: data.error,
  //     });
  //     setStatus("");
  //   }
  // } catch (err: any) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Error",
  //     text: err.message,
  //   });
  //   setStatus("");
  // }
  // };

   const { ok, data, error } = await sendEmail(formData);

    if (ok) {
      Swal.fire({
        icon: "success",
        title: "Your message has been sent successfully",
        text: data.message,
        confirmButtonColor: "#2563eb",
      });
      setStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error || data?.error,
      });
      setStatus("");
    }
  };

  return (
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
            <h2 className="text-2xl font-bold">Contact Me</h2>
          </motion.div>
          <p
            className={` ${
              theme === "dark" ? "text-white" : "text-gray-600"
            } mb-6`}
          >
            Have a project in mind or just want to say hi? Fill out the form
            below.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full border border-gray-300 p-3 rounded-lg ${
                theme === "dark" ? "bg-gray-700 text-white border-gray-600" : ""
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
                theme === "dark" ? "bg-gray-700 text-white border-gray-600" : ""
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
                theme === "dark" ? "bg-gray-700 text-white border-gray-600" : ""
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
                theme === "dark" ? "bg-gray-700 text-white border-gray-600" : ""
              }`}
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info & Map */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg rounded-2xl p-6 flex flex-col gap-6`}
        >
          <h2 className="text-2xl font-bold">Get in Touch</h2>

          {/* Google Map */}
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

          {/* Social Media */}
          <div>
            <h1 className="text-2xl gap-5">Connect with me</h1>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/shashanksp1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gray-500"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/shashankshiva6361"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:shashankshiva6361@gmail.com"
                className="hover:text-red-600"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
              <a
                href="https://twitter.com/shashanksp1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
