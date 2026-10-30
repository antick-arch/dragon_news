import Image from "next/image";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm ">
        <div className="bg-[#F3F3F3] px-5 py-4 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <Image className="rounded-full w-10 h-10" height={40} width={40} src={news.author.img}></Image>
                <div>
                    <h2 className="text-[1rem] font-semibold">{news.author.name}</h2>
                    <p className="text-[14px] text-[#706F6F]">{news.author.published_date}</p>
                </div>
            </div>
            <div className="flex gap-1">
                <PiBookmarkSimple className="text-3xl text-[#706F6F]" />
                <CiShare2 className="text-3xl text-[#706F6F]" />
            </div>
        </div>
      <h2 className="card-title">{news.title}</h2>
      <figure>
        <Image
          src={news.image_url}
          alt={news.title}
          width={60}
          height={60}
          className="w-full"
        ></Image>
      </figure>
      <div className="card-body">
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
