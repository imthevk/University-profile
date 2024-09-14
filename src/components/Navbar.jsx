import React from "react";
import Logo from "../../public/assets/logo.webp";
import Image from "next/image";
import { Menu } from ".";

function Navbar() {
  return (
    <div className="h-16 md:h-20 bg-bg-50 text-sm p-4 md:pl-10 text-primary-500 flex items-center justify-between font-bold ">
      <div className="flex items-center gap-2 ">
        <Image src={Logo} width={20} height={20} alt="logo" />
        <p>afterschool</p>
      </div>
      <p className="md:hidden underline bg-gradient-to-r from-purple-900 via-purple-600 to-purple-500 bg-clip-text text-transparent mr-5">
        Login / Start your journey
      </p>
      <nav className="hidden md:flex items-center justify-center text-black text-2xl">
        <ul className="menu rounded-box w-32">
          {/* <li>
            <details close>
              
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn  m-1">
              <p>Course</p>
              <p className="text-lg mb-3 ">⌄</p>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </ul>{" "}
        <ul className="menu rounded-box w-40">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn  m-1">
              <p>Institutions</p>
              <p className="text-lg mb-3 ">⌄</p>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </ul>
        <ul className="menu rounded-box w-44">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn  m-1">
              <p>Scholarships</p>
              <p className="text-lg mb-3 ">⌄</p>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </ul>
        <ul className="menu rounded-box w-32">
          <li>
            <summary>Internships</summary>
          </li>
        </ul>
      </nav>
      <div className="hidden lg:flex  items-center gap-3 ">
        <p className="text-primary-500">Login</p>
        <button className="bg-primary-500 text-white p-3 rounded-lg">
          Start Your Journey
        </button>
      </div>

      <Menu />
    </div>
  );
}

export default Navbar;
