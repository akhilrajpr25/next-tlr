import React from "react";
import { FaArrowRightLong as ArrowIcon } from "react-icons/fa6";

const data = [
  { id: 1, title: "Add content here" },
  { id: 2, title: "Add content here" },
];

const SectionThree = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-20">
      {data.map((item) => (
        <div
          key={item?.id}
          className="bg-gray-100 flex w-full items-end pl-10 pb-5 font-semibold rounded h-64 sm:h-72 md:h-60 lg:h-72 xl:h-96"
        >
          <div>
            <span className="font-semibold">{item?.title}</span>
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
