export async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}
export async function getCatagoriesByID(newsId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${newsId}`,
  );
  const data = await res.json();
  return data.data;
}