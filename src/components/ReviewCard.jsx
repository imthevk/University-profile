import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className="border border-transparent rounded-lg p-4 w-[300px] lg:w-[360px] lg:h-[360px] mx-auto shadow-sm bg-[#EBEBFF] flex flex-col space-y-2 lg:space-y-12 mb-7">
      {/* Quote Icon */}
      <div className="text-purple-700 text-3xl">&#10077;</div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        {/* Profile Picture */}
        <Image
          src="https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-portraits-pack-people-illustrations-6590630.png"
          alt="Anonymous User"
          className="h-12 w-12 rounded-full"
          width={100}
          height={100}
        />
        {/* User Details */}
        <div>
          <h3 className="font-semibold text-gray-800">Anonymous User</h3>
          {/* Rating and Date */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="text-orange-400">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>
              <span className="ml-1">4/5</span>
            </div>
            <span>•</span>
            <span>Feb 12, 2019</span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm mt-2">
        Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
        Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis
        commodo. Phasellus efficitur quis ex in consectetur.
      </p>
    </div>
  );
}
