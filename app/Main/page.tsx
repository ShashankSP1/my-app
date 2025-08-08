import React from 'react'

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
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">About Me</h1>

        <p className="text-lg leading-relaxed text-white mb-6 max-w-xl">
          Bringing modern technologies into the real world is my <span className="text-cyan-400 font-semibold">DNA</span>.<br />
          Worked on multiple startups and governmental projects to get the ideas into real-world mobile and web applications
          and developed successful Educational startups in India.
        </p>

        <a
          href="/Shashank_SP_Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-blue-400"
        >
          😉 Download My Resume
        </a>
      </div>
    </div>

    </>
  )
}

export default Home