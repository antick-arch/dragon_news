import LeftSide from "@/componets/homepage/news/LeftSide";
import Image from "next/image";
async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
export default async function Home() {
  const categories = await getCatagories();
  return (
    <div className="container mx-auto grid grid-cols-12 mt-20 gap-10">
      <LeftSide categories={categories} activeId="0"></LeftSide>
      <div className="col-span-6">
        <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
      </div>
      <div className="col-span-3">
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
      </div>
    </div>
  );
}
