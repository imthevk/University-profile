export default function ProgramCard() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 w-11/12  md:w-[300px] mx-auto shadow-sm mb-3">
      {/* Card Title */}
      <h2 className="text-xl font-semibold mb-4">
        CAAM Part-66 Program CAT B2 Avionics
      </h2>

      {/* Labels */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-[#EBEBFF] text-gray-700 px-3 py-1 rounded-full text-sm">
          48 Months
        </span>
        <span className="bg-[#EBEBFF] text-gray-700 px-3 py-1 rounded-full text-sm">
          Jul & Oct
        </span>
        <span className="bg-[#EBEBFF] text-gray-700 px-3 py-1 rounded-full text-sm">
          Full Time
        </span>
      </div>

      <hr className="border-t border-gray-200 mb-4" />

      <div className="flex items-center justify-between">
        <p className="text-sm">
          From{" "}
          <span className="font-bold text-xs  md:text-lg">$142 - $380</span>
          /Year
        </p>

        <button className="bg-primary-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition-colors lg:w-[160px]">
          Apply Now
        </button>
      </div>
    </div>
  );
}
