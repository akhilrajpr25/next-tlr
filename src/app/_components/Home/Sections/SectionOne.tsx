import React from "react";

const data = [
  { id: 1, title: "Add content here" },
  { id: 2, title: "Add content here" },
  { id: 3, title: "Add content here" },
  { id: 4, title: "Add content here" },
];

const SectionOne = () => {
  return (
    <div className="grid grid-cols-2 gap-1 mb-20">
      <div className="row-span-2 bg-gray-100 h-full w-full flex justify-start items-end pl-10 pb-5 font-semibold">
        Add content here
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
        {data.map((item) => (
          <div
            key={item?.id}
            className="bg-gray-100 h-52 flex justify-start w-full items-end pl-10 pb-5 font-semibold"
          >
            {item?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
