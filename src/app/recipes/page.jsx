import React from "react";
import { NewsCard } from "@/components";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({}, parent) {
  // read route params
  const id = 1;

  // fetch data
  const product = await fetch(`https://dummyjson.com/recipes/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.name,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  };
}

const NewsApiContent = async () => {
  let receipes;
  try {
    const response = await fetch(`https://dummyjson.com/recipes`);
    const data = await response.json();
    receipes = data?.recipes;
  } catch (error) {
    console.log(error);
  }

  console.log(receipes);
  return (
    <>
      <div className="ml-2 ">
        <h1 className="font-bold mb-7">
          Admal Aviation College{" "}
          <span className="text-primary-500">Receipes</span>
        </h1>
      </div>
      <div className="mb-5">
        <span className="bg-purple-100 text-primary-500 ml-10 p-2">
          <Link href="/">{`< Go Back`}</Link>
        </span>
      </div>
      <div className="flex md:justify-between gap-3 flex-wrap w-[90vw] mx-auto">
        {receipes.map((receipe) => {
          return (
            <div
              key={receipe?.id}
              className="card rounded-none bg-base-100 w-40 lg:w-80 shadow-xl mb-5"
            >
              <figure>
                <Image
                  src={receipe?.image}
                  alt="receipe image"
                  width={300}
                  height={200}
                />
              </figure>
              <div className="card-body pl-4">
                <h2 className="card-title p-2 bg-[#EBEBFF] w-full text-sm">
                  {receipe?.name}
                </h2>
                <p className="text-center text-primary-500">INGREDIENTS</p>
                <p className="text-xs lg:text-lg font-bold line-clamp-1 lg:line-clamp-2">
                  {receipe.ingredients.join(",")}
                </p>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsApiContent;
