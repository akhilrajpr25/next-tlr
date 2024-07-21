import React from "react";

const data = [
  { id: 1, title: "Add content here" },
  { id: 2, title: "Add content here" },
  { id: 3, title: "Add content here" },
  { id: 4, title: "Add content here" },
];

const SectionOne = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-1 mb-20">
      <div className="rounded row-span-2 bg-gray-100 h-52 sm:h-64 md:h-full w-full flex justify-start items-end font-semibold pl-5 pb-3">
        Add content here
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
        {data.map((item) => (
          <div
            key={item?.id}
            className="rounded bg-gray-100 h-32 sm:h-48 md:h-32 xl:h-48 flex justify-start w-full items-end font-semibold p-4"
          >
            {item?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
