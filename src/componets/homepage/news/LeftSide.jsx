import React from "react";

const LeftSide = ({categories , activeId}) => {
  return (
    <div className="col-span-3">
      <h2 className="text-xl font-semibold mb-5">All Caterogy</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`py-4 pl-13 ${activeId === category.category_id && 'bg-[#E7E7E7]'}  my-3 text-[#403F3F]`}
          >
            {category.category_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
