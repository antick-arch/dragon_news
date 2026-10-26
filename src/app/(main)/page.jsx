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
      <div className="col-span-3">
        <h2 className="text-xl font-semibold mb-5">All Caterogy</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.category_id}
              className="py-4 pl-13 bg-[#E7E7E7] my-3 text-[#403F3F]"
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6">
        <h2 className="text-xl font-semibold mb-5">Dragon News Home</h2>
      </div>
      <div className="col-span-3">
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
      </div>
    </div>
  );
}
