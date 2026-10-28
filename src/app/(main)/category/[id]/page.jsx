import LeftSide from "@/componets/homepage/news/LeftSide";
import RightSide from "@/componets/homepage/news/RightSide";
import React from "react";
async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
async function getCatagoriesByID(newsId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${newsId}`,
  );
  const data = await res.json();
  return data.data;
}
const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCatagories();
  const categoriesNews = await getCatagoriesByID(id);
  return (
    <div className="container mx-auto grid grid-cols-12 mt-20 gap-10">
      <LeftSide categories={categories} activeId={id}></LeftSide>
      <div className="col-span-6">
        <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
        <div>
          {categoriesNews.map((news) => (
            <h2 key={news._id}>{news.title}</h2>
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
