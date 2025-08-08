import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-4 py-10">
        {/* Left Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/photo.png"
            alt="Profile"
            className="rounded-[40px] w-[300px] md:w-[400px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            About Me
          </h1>

          <p className="text-lg leading-relaxed text-white mb-6 max-w-xl">
            I am a passionate and results-driven <span className="text-blue-400">Software Engineer</span> with a strong
            foundation in Java, front-end technologies, and database management.
            Also, I was passionate about complex problems solving through
            innovative technology solutions. I specialize in designing and
            developing robust, scalable, and innovative software solutions that
            meet the ever-evolving needs of clients.
            Worked on multiple startups and payment projects to get the
            ideas into real-world web applications and developed
            successful startups in India.
          </p>

          <a
            href="/Shashank_SP_Resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-blue-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
