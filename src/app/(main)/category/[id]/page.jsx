import LeftSide from "@/componets/homepage/news/LeftSide";
import RightSide from "@/componets/homepage/news/RightSide";
import NewsCard from "@/componets/homepage/NewsCard";
import { getCatagories, getCatagoriesByID } from "@/lib/data";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCatagories();
  const categoriesNews = await getCatagoriesByID(id);
  return (
    <div className="container mx-auto grid grid-cols-12 mt-20 gap-10">
      <LeftSide categories={categories} activeId={id}></LeftSide>
      <div className="col-span-6">
        <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
        <div className="space-y-7">
          {categoriesNews.length>0?(categoriesNews.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))) : (<h2>No Data found</h2>)}
        </div>
      </div>
      <div className="col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
