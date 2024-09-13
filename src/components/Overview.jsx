"use client";
import Image from "next/image";
import React, { useState } from "react";
import { InfoCard, NewsCard, ProgramCard, ReviewCard, VideoCarousel } from ".";
import SearchBox from "@/ui_components/SearchBox";
import ScholarshipCard from "./ScholarshipCard";

// Array of video objects with video URLs and thumbnail images

const videos = [
  {
    src: "/videos/video1.mp4",
    thumbnail:
      "https://alcove.net.in/wp-content/uploads/2023/03/Atlas-University-00-1024x681.jpg",
  },
  {
    src: "/videos/video2.mp4",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkom5gM8ydiTbW1l4OJPgK2OCtpN5-88FCg&s",
  },
  {
    src: "/videos/video3.mp4",
    thumbnail:
      "https://university.taylors.edu.my/content/dam/taylorsrevamp/university/student-life/student-exchange-and-mobility-programmes/outbound-student-exchange-programmes/hero-banner/taylors-student-exchange-outbound-student-exchange-programme-thumbnail-1200x630.png",
  },
];
function Overview() {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // State to manage if the full text is shown

  // Define the maximum number of characters to show initially
  const maxCharacters = 100;
  const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          ipsam, sequi obcaecati itaque omnis animi unde, repudiandae quaerat
          consequatur tempore ex facilis nesciunt! Adipisci, eos voluptates.
          Temporibus quam ducimus laudantium.`;
  // Function to toggle the 'Read more' and 'Read less' state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const tabs = [
    "Overview",
    "Videos",
    "Courses",
    "Rankings",
    "Scholarships",
    "Testimonials",
    "News",
    "FAQ's",
  ];

  const tabsCoursesFee = ["All", "Undergradute", "Postgraduate", "Doctorate"];
  const tabsPhotos = [
    "All",
    "Fitness center",
    "Hostel Accommodation",
    "Library",
  ];

  return (
    <div className="mx-5 w-full ">
      <div className="hero_bg "></div>
      <div className="flex py-4 overflow-x-scroll mb-7">
        <div className="flex space-x-4 relative">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`gap-2 py-2 rounded-md text-sm font-medium relative ${
                activeTab === index
                  ? "bg-gradient-to-r from-purple-950 to-purple-700 text-transparent bg-clip-text font-bold"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              {tab}
              {activeTab === index && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full z-10"></span>
              )}
            </button>
          ))}
          <span className="absolute bottom-0 -left-4 right-0 h-[2px] bg-gray-300 rounded-full"></span>
        </div>
      </div>
      <div className="mb-7">
        <h1 className="text-primary-500 font-bold mb-4">
          Why Study at Admal Aviation College
        </h1>
        <div className="flex">
          <p className="mr-4">
            <Image
              src={"/assets/check.svg"}
              alt="tick-icon"
              width={20}
              height={20}
            />
          </p>
          <p className="font-bold text-xs">
            Part-147 Approved by Civil Aviation Authority of Malaysia
          </p>
        </div>

        <div className="text-gray-700 text-xs md:text-sm ml-7">
          {/* Display a portion of the text and expand/collapse on click */}
          <p>{isExpanded ? text : `${text.slice(0, maxCharacters)}...`}</p>
          <button
            onClick={toggleReadMore}
            className="text-purple-800 font-bold -ml-7 text-xs md:text-sm"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
      <div className="mb-7">
        <h1 className="text-primary-500 font-bold mb-4">
          Why Study at Admal Aviation College
        </h1>
        <div className="flex justify-start gap-4 flex-wrap mb-4">
          <InfoCard
            src="/assets/home.svg"
            heading={"Accommodation"}
            para={"63,476 Courses"}
          />
          <InfoCard
            src="/assets/location.svg"
            heading={"Transportation"}
            para={"63,476 Courses"}
            className={"bg-[#F5F7F9]"}
          />
          <InfoCard
            src="/assets/entertain.svg"
            heading={"Entertainment"}
            para={"63,476 Courses"}
            className={"bg-[#FEF2E6]"}
          />

          <InfoCard
            src="/assets/parking.svg"
            heading={"Parking"}
            para={"63,476 Courses"}
            className={"bg-[#DEEFDE]"}
          />
        </div>
        <p>
          The only part-147 consectetur, adipisicing elit. Aut dicta vitae
          cupiditate, error fugit laudantium reprehenderit nostrum quisquam
          voluptas impedit, amet perferendis quibusdam possimus aliquid, sed
          eius cum! Nam, aliquid!
        </p>
      </div>

      <div>
        <h1 className="font-bold mb-7">
          Admal Aviation College{" "}
          <span className="text-primary-500">Videos</span>
        </h1>

        <VideoCarousel videos={videos} />

        <div>
          <h1 className="font-bold mb-7">
            Admal Aviation College{" "}
            <span className="text-primary-500">Courses & Fees</span>
          </h1>

          <div className="flex justify-center py-4">
            <div className="flex ">
              {tabsCoursesFee.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === index
                      ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  } transition-colors duration-300`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full">
            <SearchBox />
          </div>
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
          <p className="text-primary-500 ml-5 mb-7">View all</p>
        </div>
        <div>
          <h1 className="font-bold mb-7">
            Admal Aviation College{" "}
            <span className="text-primary-500">Scholarships</span>
          </h1>
        </div>
        <ScholarshipCard />
        <ScholarshipCard />
        <ScholarshipCard />
        <ScholarshipCard />
        <p className="text-primary-500 ml-5 mb-7">View all</p>
        <div className="ml-5">
          <h1 className="font-bold mb-7">
            Admal Aviation College{" "}
            <span className="text-primary-500">Photos</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <div className="flex ">
          {tabsPhotos.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-2 rounded-md text-xs font-medium ${
                activeTab === index
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-4">
        <div className="grid gap-2">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt="gallery"
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
              width={300}
              height={100}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="ml-2">
        <h1 className="font-bold mb-7">
          Admal Aviation College{" "}
          <span className="text-primary-500">Testimonials</span>
        </h1>
      </div>
      <div className="carousel rounded-box flex gap-3">
        <div className="carousel-item">
          <ReviewCard />
        </div>
        <div className="carousel-item">
          <ReviewCard />
        </div>
      </div>
      <div className="ml-2">
        <h1 className="font-bold mb-7">
          Admal Aviation College <span className="text-primary-500">News</span>
        </h1>
      </div>
      <div className="flex gap-4 flex-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <p className="text-primary-500 ml-5 mb-7">View all</p>
      </div>
      <div className="ml-2">
        <h1 className="font-bold mb-7">
          AAC{" "}
          <span className="text-primary-500">
            {" "}
            - Accommodation & Facilities
          </span>
        </h1>
      </div>
      <div>
        <InfoCard
          src="/assets/parking.svg"
          heading={"Parking"}
          para={"63,476 Courses"}
          className={"bg-[#DEEFDE]"}
        />
      </div>
    </div>
  );
}

export default Overview;
