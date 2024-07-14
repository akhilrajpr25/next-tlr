import React from "react";
import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";

const data = [
  { id: 1, title: "Add content here" },
  { id: 2, title: "Add content here" },
];

const SectionThree = () => {
  return (
    <div className="grid grid-cols-2 gap-1 mb-20">
      {data.map((item) => (
        <div
          key={item?.id}
          className="bg-gray-100 h-96 flex w-full items-end pl-10 pb-5 font-semibold"
        >
          <div>
            <h1>{item?.title}</h1>
            <div className="text-sm text-gray-600 flex items-center space-x-1">
              <span>READ MORE</span>
              <ArrowIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionThree;
