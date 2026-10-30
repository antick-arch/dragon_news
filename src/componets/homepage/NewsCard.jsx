import Image from "next/image";
import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-2">
      <figure>
        <Image src={news.image_url} width={60} height={60} className="w-full"></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
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
