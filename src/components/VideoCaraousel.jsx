"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoCarousel({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current video index
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to track if a video is playing

  // Function to handle swiping to the left
  const handlePrev = () => {
    setIsVideoPlaying(false); // Stop playing the video when swiping
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Function to handle swiping to the right
  const handleNext = () => {
    setIsVideoPlaying(false); // Stop playing the video when swiping
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle clicking on the thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsVideoPlaying(true); // Start playing the video when clicked
  };

  return (
    <>
      <div className="relative w-full md:max-w-md mx-auto mb-16 hidden md:block">
        {/* Carousel Container */}
        <div className="relative overflow-scroll">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center relative"
              >
                {isVideoPlaying && currentIndex === index ? (
                  <video controls autoPlay className="w-full h-auto">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                  >
                    {/* Thumbnail Image */}
                    <Image
                      src={video.thumbnail}
                      alt={`Video ${index + 1}`}
                      className="w-full h-48"
                      width={300}
                      height={500}
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 bottom-5 flex items-end justify-center">
                      <div className="bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="purple"
                          className="bi bi-play-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handleNext}
          className="absolute -bottom-16 right-10 transform -translate-y-1/2 bg-white p-2 rounded-sm shadow-md hover:bg-primary-500"
        >
          {/* Left Arrow Icon */}
          <svg
            className="w-5 h-5 text-gray-600 hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handlePrev}
          className="absolute -bottom-16 right-20 transform -translate-y-1/2 bg-white p-2 rounded-sm shadow-md hover:bg-primary-500"
        >
          {/* Right Arrow Icon */}
          <svg
            className="w-5 h-5 text-gray-600 hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.707 15.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 10H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="block md:hidden overflow-scroll">
        {/* <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4"> */}
        <div className="carousel-item">
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center relative"
            >
              {isVideoPlaying && currentIndex === index ? (
                <video controls autoPlay className="w-full h-auto">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleThumbnailClick(index)}
                >
                  {/* Thumbnail Image */}
                  <Image
                    src={video.thumbnail}
                    alt={`Video ${index + 1}`}
                    className="w-full h-48"
                    width={300}
                    height={500}
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 bottom-5 flex items-end justify-center">
                    <div className="bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="purple"
                        className="bi bi-play-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
