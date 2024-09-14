import Image from "next/image";
import React from "react";

function NewsCard() {
  return (
    <div className="card rounded-none bg-base-100 w-40 lg:w-80 shadow-xl mb-5">
      <figure>
        <Image
          src="https://i0.wp.com/articles.unienrol.com/wp-content/uploads/2023/05/radical_curriculum.jpg"
          alt="Shoes"
          width={300}
          height={200}
        />
      </figure>
      <div className="card-body pl-4">
        <h2 className="card-title p-2 bg-[#EBEBFF] w-full text-sm">
          Developments
        </h2>
        <p className="text-xs font-bold">
          If a dog chews shoes whose shoes does he choose?
        </p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}

export default NewsCard;
