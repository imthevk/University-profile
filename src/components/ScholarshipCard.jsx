import Image from "next/image";

export default function ScholarshipCard() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 w-11/12 md:w-1/3 mx-auto shadow-sm flex flex-col justify-between mb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        {/* Card Title */}
        <h2 className="text-lg font-semibold">
          Gamuda Scholarship 2024 –
          <br />
          Leading Tomorrow’s Talents
        </h2>
        {/* Logo */}
        <Image
          src="https://cdn.sanity.io/images/kts928pd/production/50fdc6b3e5ee0c2345df6a8d16ba022f035fa552-731x731.png"
          alt="Yayasan Gamuda Logo"
          className="h-10 w-auto"
          width={100}
          height={100}
        />
      </div>

      {/* Labels */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          Malaysia/ Overseas
        </span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          Deadline: 30 Apr 2024
        </span>
      </div>

      {/* Bullet Points */}
      <ul className="mb-4 space-y-2">
        <li className="flex items-center">
          <div className="rounded-full border-2 border-green-500 mr-2">
            <div className="w-2 h-2 p-1 rounded-full border-2 bg-green-500"></div>
          </div>
          <p className="text-gray-700">Full Scholarships</p>
        </li>
        <li className="flex items-center">
          <div className="rounded-full border-2 border-green-500 mr-2">
            <div className="w-2 h-2 p-1 rounded-full border-2 bg-green-500"></div>
          </div>
          <p className="text-gray-700">Degree</p>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center justify-end space-x-2">
        {/* Heart Icon */}
        <button className="bg-gray-100 p-2 rounded-full">
          <svg
            className="w-5 h-5 text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3.172 5a4 4 0 015.656 0l.672.672.672-.672a4 4 0 115.656 5.656l-6.328 6.328-6.328-6.328a4 4 0 010-5.656z" />
          </svg>
        </button>
        {/* Arrow Icon */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 010-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
