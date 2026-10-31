import RightSide from "@/componets/homepage/news/RightSide";
import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";



const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const detailedData = await getNewsDetails(id);
  // console.log(detailedData);
  return (
    <div className="flex container mx-auto">
      <div className="p-8 w-[80%] bg-[#efe5e5] mt-10 rounded-md mb-5 shadow">
        <figure>
          <Image
            src={detailedData.image_url}
            alt={detailedData.title || "detailedData image"}
            width={60}
            height={60}
            className="w-full rounded-md"
          ></Image>
        </figure>
        <h2 className="card-title mt-5 font-bold text-2xl">{detailedData.title}</h2>
        <div className="card-body p-0 mt-3">
          <p className="text-[1rem] text-[#706F6F]">
            {detailedData.details}
          </p>
          <Link className="btn flex items-center text-white bg-[#D72050] w-fit mt-5" href={`/category/${detailedData.category_id}`}><BsArrowLeft className="text-2xl"></BsArrowLeft>All news in this category</Link>
        </div>
        
      </div>
      <div className="mt-10 p-5">
        <RightSide ></RightSide>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
