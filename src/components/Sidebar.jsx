"use client";
import React, { useState } from "react";

const formData = {
  name: "",
  email: "",
  mobile: "",
};
function Sidebar() {
  const [userData, setUserData] = useState({ ...formData });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name.trim() === "") {
      alert("Please enter your name");
    } else if (userData.email.trim() === "") {
      alert("Please enter your email");
    } else if (userData.mobile.trim() === "" || userData.mobile.length < 10) {
      alert("Please enter your mobile number");
    } else {
      alert("Form successfully submitted.");
    }
  };
  return (
    <div className="hidden md:block w-4/12  p-6 ">
      {/* Ranking Section */}
      <div className="bg-white shadow-md p-4 mb-6">
        <div className="flex text-primary-500 justify-between py-3 px-5 bg-[#F5F5FF]">
          <h2 className="text-xl font-bold">Ranking</h2>
          <div className="flex flex-col">
            <p className="text-xs text-end">Year </p>
            <p className="font-bold">2024</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <div>QS World University Rankings</div>
            <div className="font-bold text-primary-500">22nd</div>
          </div>
          <div className="flex justify-between mt-2 ">
            <div>THE World University Rankings</div>
            <div className="font-bold text-primary-500">11th</div>
          </div>
        </div>
      </div>

      {/* Apply Online Section */}
      <div className="bg-white shadow-md p-4 mb-6 text-center">
        <p>Would you like to apply to Admal Aviation College?</p>
        <button className="bg-purple-600 text-white font-semibold py-2 px-4 mt-4 rounded">
          Apply Online
        </button>
      </div>

      {/* Apply Now for SEP 2024 */}
      <div className="bg-purple-600 text-white shadow-md p-6 text-center mb-6">
        <h3 className="text-2xl font-bold">APPLY NOW FOR SEP 2024</h3>
        <p>Applications now open for Higher Education courses</p>
      </div>

      {/* Contact Us Section */}
      <div className="bg-white shadow-md p-3 text-center">
        <h3 className="text-xl font-semibold text-left pl-3 py-4 bg-[#F5F5FF]">
          Contact Us
        </h3>
        <form className="mt-4 " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-2 w-full mb-4 rounded-lg"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter your email ID"
            className="border p-2 w-full mb-4 rounded-lg"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="+91- 987654310"
            className="border p-2 w-full mb-4 rounded-lg"
            value={userData.mobile}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
            maxLength={10}
          />
          <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded w-full">
            Send Your Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
