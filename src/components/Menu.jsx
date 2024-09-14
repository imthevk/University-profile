"use client";
import React, { useState } from "react";

const FullScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <div className="space-y-1">
            <span className="block w-4 h-0.5 bg-purple-800  text-transparent"></span>
            <span className="block w-4 h-0.5 bg-gradient-to-b from-purple-800  to-purple-400  text-transparent"></span>
            <span className="block w-4 h-0.5 bg-purple-500  text-transparent"></span>
          </div>
        ) : (
          <p className="text-2xl text-white">X</p>
        )}
      </button>

      <div
        className={`fixed inset-0 z-40 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Menu Items */}
          <nav className="flex text-white  flex-col space-y-8 text-2xl">
            <ul className="menu rounded-box w-32">
              <li>
                <details close>
                  <summary>Course</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>{" "}
            <ul className="menu rounded-box w-32">
              <li>
                <details close>
                  <summary>Institutions</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul className="menu rounded-box w-24">
              <li>
                <details close>
                  <summary>Scholarships</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <ul className="menu rounded-box w-24">
              <li>
                <summary>Internships</summary>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <nav className="hidden md:flex  flex-col space-y-8 text-2xl">
        <a href="#home" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </nav> */}
    </div>
  );
};

export default FullScreenMenu;
