import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70%]">
      <img src="/pageNotFound.png" alt="Not Found" className="w-150 h-150 -mb-16" />
      <span>
        <a
          href="/"
          className="text-blue-500 text-lg flex items-center gap-2"
        >
          Return to Home
          <FaArrowRight />
        </a>
      </span>
    </div>
  );
}