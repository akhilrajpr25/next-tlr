import React from "react";

const data = [
  {
    id: 1,
    type: "Type of News",
    title: "Add title here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Mona Kane",
    date: "June 15",
    views: "256",
  },
  {
    id: 2,
    type: "Type of News",
    title: "Add title here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Mona Kane",
    date: "June 15",
    views: "256",
  },
  {
    id: 3,
    type: "Type of News",
    title: "Add title here",
    description: "Lorem ipsum dolor sit amet",
    name: "Mona Kane",
    date: "June 15",
    views: "256",
  },
  {
    id: 4,
    type: "Type of News",
    title: "Add title here",
    description: "Lorem ipsum dolor sit amet",
    name: "Mona Kane",
    date: "June 15",
    views: "256",
  },
];

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 mb-20">
      {data.map((item) => (
        <div key={item?.id} className="grid grid-cols-2 gap-4">
          <div className=" bg-gray-100 h-28 sm:h-36 md:h-28 lg:h-40 rounded"></div>
          <div className="space-y-2">
            <span className="bg-teal-700 text-white px-2 py-1 rounded text-xs">
              {item?.type}
            </span>
            <div className="font-semibold">{item?.title}</div>
            <div className="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item?.description}
            </div>
            <div className="text-xs space-x-1">
              <span className="font-bold">{item?.name}</span>
              <span className="text-gray-500">{item?.date}</span>
            </div>
            <div className="text-xs text-gray-500">{item?.views} views</div>
          </div>
          <div className="w-full col-span-2">
            <hr className="border-gray-300 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
