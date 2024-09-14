import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#EAEAEA] py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Navigation */}
        <div>
          {/* Logo */}
          {/* <div className="mb-8 w-full md:w-1/4"> */}
          <div className="md:hidden flex justify-center items-center gap-2 ">
            <Image
              src={"/assets/logo.webp"}
              width={20}
              height={20}
              alt="logo"
            />
            <p className="text-lg">afterschool</p>
            {/* </div> */}
          </div>
          <div className="hidden md:flex  justify-center items-center gap-2 ">
            <Image
              src={"/assets/logo.webp"}
              width={40}
              height={40}
              alt="logo"
            />
            <p className="text-2xl text-primary-500">afterschool</p>
            {/* </div> */}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap  w-full ">
          <div className="w-full flex flex-wrap font-bold lg:justify-center">
            <ul className="w-32 menu rounded-box text-primary-500">
              <li>
                <details close>
                  <summary>Locations</summary>
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
            <ul className="menu rounded-box w-32 text-primary-500">
              <li>
                <details close>
                  <summary>Foundation</summary>
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
            <ul className="menu rounded-box w-32 text-primary-500">
              <li>
                <details close>
                  <summary>Diploma</summary>
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
            <ul className="menu rounded-box w-32 text-primary-500">
              <li>
                <details close>
                  <summary>Degree</summary>
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
            <ul className="menu rounded-box w-32 text-primary-500">
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
            </ul>{" "}
            <ul className="menu rounded-box w-32 text-primary-500">
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
            <ul className="menu rounded-box w-24 text-primary-500">
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
            </ul>
            {/* <h3 className="text-lg font-semibold mb-3">Locations</h3> */}
          </div>
          <hr className="h-1 bg-gray-300 w-[90vw] mx-auto mb-8" />

          <div className="grid grid-cols-3 font-xs ml-3 lg:w-full">
            <div className="w-full sm:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="text-xs md:text-md">
                <li className="mb-2 hover:underline">
                  <a href="#">Contact Us</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Tools</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Course Predictor</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">UPU 2019</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-3">Students</h3>
              <ul className="text-xs md:text-md">
                <li className="mb-2 hover:underline">
                  <a href="#">Courses</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Scholarships</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Careers</a>
                </li>
                <li className="mb-2 hover:underline">
                  <a href="#">Study Abroad</a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/4 mb-8">
              <h3 className="text-lg font-semibold mb-3">Institutions</h3>
              <ul className="text-xs md:text-md">
                <li className="mb-2 hover:underline">
                  <a href="#">Advertise With Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons and Subscription Form */}
      <div className="flex flex-col justify-start ml-5 mt-8 ">
        <p className="font-bold mb-4 lg:text-center">Get in touch</p>
        <div className="flex items-center lg:justify-center space-x-4 mb-6 md:mb-0">
          <a href="#" className="text-purple-600 hover:text-purple-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12v-9.293H9.293V12h2.707V9.293c0-2.707 2.208-4.707 4.707-4.707h3.293V9.293h-3.293C16.593 9.293 16 9.886 16 10.293V12h4.707v2.707H16V24h6.675c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z" />
              <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
            </svg>
          </a>
        </div>
        <p className="text-primary-500 lg:text-center lg:mb-9 font-bold mb-4">
          {" "}
          Subscribe to Our Newsletter
        </p>

        {/* Newsletter Subscription */}
        <form className="flex gap-2 justify-between lg:justify-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your mail ID"
            className="border border-gray-300 rounded-l-lg p-2 w-3/5 lg:w-full md:w-64 focus:outline-none focus:border-purple-600"
          />
          <button className="bg-purple-600 text-white font-semibold px-4 rounded-lg hover:bg-purple-800">
            Apply Now
          </button>
        </form>
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; 2024 After School. All Rights Reserved.
      </div>
    </footer>
  );
}
