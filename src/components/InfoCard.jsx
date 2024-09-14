import Image from "next/image";
import React from "react";

function InfoCard({ src, className, heading, para }) {
  return (
    <div
      className={`flex justify-center items-center gap-3 p-3 w-[44%] bg-[#EEEDF7] ${className}`}
    >
      <div className="bg-white p-1">
        <Image src={src} alt="home" width={32} height={32} />
      </div>
      <div className="text-xs">
        <p className="font-bold">{heading}</p>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default InfoCard;
