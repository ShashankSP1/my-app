import React from "react";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-5 p-4 justify-between bg-gradient-to-r from-amber-600 to-red-500">
        <li>
            <img src='icon-main.png' alt='icon'
            className="ml-10" style={{width:'50px', height:'25px', marginLeft:'5px' }} />
        </li>
        <li>
          <ul className="flex gap-5 justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Collaboration</li>
            <li>Contact</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
