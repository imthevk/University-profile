import React from "react";
import { NewsCard } from ".";

const NewsApiContent = () => {
  return (
    <>
      <div className="ml-2">
        <h1 className="font-bold mb-7">
          Admal Aviation College <span className="text-primary-500">News</span>
        </h1>
      </div>
      <div className="flex md:justify-between gap-3 flex-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
};

export default NewsApiContent;
