"use client";
import React, { useState } from "react";

const Accordion = ({ heading, para }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="join join-vertical w-full rounded-none mb-4">
      <div className="collapse join-item border-base-300 border">
        <input
          type="checkbox"
          className="peer"
          checked={isOpen}
          onChange={toggleAccordion}
        />
        <div
          className={`collapse-title text-xl font-medium flex justify-between items-center ${
            isOpen ? "bg-purple-100" : ""
          }`}
          onClick={toggleAccordion}
        >
          {heading || `When are the intakes at Admal Aviation College?`}
          <span
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ↓
          </span>
        </div>
        <div className="collapse-content">
          <p className="text-xs md:text-md p-3 text-[#4D5468]">
            {para ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic veniam, reprehenderit dolore maxime magni!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
