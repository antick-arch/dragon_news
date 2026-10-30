import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { PiBookmarkSimple } from "react-icons/pi";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm ">
      <div className="bg-[#F3F3F3] px-5 py-4 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            className="rounded-full w-10 h-10"
            height={40}
            width={40}
            src={news.author?.img}
            alt={news.author?.name || "Author"}
          ></Image>
          <div>
            <h2 className="text-[1rem] font-semibold">{news.author?.name}</h2>
            <p className="text-[14px] text-[#706F6F]">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <PiBookmarkSimple className="text-3xl text-[#706F6F]" />
          <CiShare2 className="text-3xl text-[#706F6F]" />
        </div>
      </div>
      <div className="p-5">
        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title || "News image"}
            width={60}
            height={60}
            className="w-full rounded-md mt-5"
          ></Image>
        </figure>
        <div className="card-body p-0 mt-8">
          <p className="line-clamp-3 text-[1rem] text-[#706F6F]">
            {news.details}
          </p>
          <Link href={"/news/1"} className="text-[#FF8C47] font-semibold">
            Reda More
          </Link>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <FaStar className="text-[#FF8C47] text-2xl" />
              <FaStar className="text-[#FF8C47] text-2xl" />
              <FaStar className="text-[#FF8C47] text-2xl" />
              <FaStar className="text-[#FF8C47] text-2xl" />
              <FaStar className="text-[#FF8C47] text-2xl" />
            </div>
            <div>
              <span className="text-[1rem] font-medium text-[#706F6F]">
                {news.rating.number}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <IoEye className="text-2xl text-[#706F6F]"/>
            <span className="text-[#706F6F] font-medium">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
