import React from "react";
import Marquee from "react-fast-marquee";

const breakingNews = [
  {
    id: 1,
    title: "Breaking: Government Announces New Education Policy",
  },
  {
    id: 2,
    title: "Latest Update: Heavy Rain Expected Across the Country",
  },
  {
    id: 3,
    title: "Breaking: Bangladesh Announces Major Economic Reforms",
  },
  {
    id: 4,
    title: "Sports: Bangladesh Wins an Exciting Cricket Match",
  },
  {
    id: 5,
    title: "Technology: New AI Innovation Takes the World by Storm",
  },
  {
    id: 6,
    title: "Breaking: Important Weather Alert Issued for Coastal Areas",
  },
  {
    id: 7,
    title: "World News: Global Leaders Meet for Important Discussions",
  },
  {
    id: 8,
    title: "Education: Universities Announce Upcoming Admission Updates",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex container mx-auto bg-gray-100 p-3 border-none">
        <button className="btn bg-[#D72050] text-white">Latest</button>
        <Marquee pauseOnHover speed={100} className="mx-3">
            {
                breakingNews.map((news)=>(
                    <h2 key={news.id} className="mx-2">
                        {
                            news.title
                        }
                    </h2>
                ))
            }
        </Marquee>
    </div>
)
};

export default BreakingNews;
