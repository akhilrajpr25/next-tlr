import React from "react";

const data = [
  {
    id: 1,
    title: "ORG NAME",
    summary: "Add summary here",
    name: "Adele Vanice",
    date: "June 1",
    views: "256",
  },
  {
    id: 2,
    title: "ORG NAME",
    summary: "Add summary here",
    name: "Adele Vanice",
    date: "June 1",
    views: "256",
  },
  {
    id: 3,
    title: "ORG NAME",
    summary: "Add summary here",
    name: "Adele Vanice",
    date: "June 1",
    views: "256",
  },
  {
    id: 4,
    title: "ORG NAME",
    summary: "Add summary here",
    name: "Adele Vanice",
    date: "June 1",
    views: "256",
  },
  {
    id: 5,
    title: "ORG NAME",
    summary: "Add summary here",
    name: "Adele Vanice",
    date: "June 1",
    views: "256",
  },
  {
    id: 6,
    title: "ORG NAME",
    summary: "Add summary here",
    name: "Adele Vanice",
    date: "June 1",
    views: "256",
  },
];

const SectionFive = () => {
  return (
    <div className="grid grid-cols-12 mb-10">
      <div className="col-span-9 pr-4">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {data.map((item) => (
            <div key={item?.id} className="shadow-md rounded space-y-2">
              <div className="h-44 bg-gray-100"></div>
              <div className="p-2 space-y-4 text-xs">
                <span className="bg-teal-700 text-white px-2 py-1 rounded">
                  {item?.title}
                </span>

                <div className="font-semibold">{item?.summary}</div>

                <div className="space-x-2">
                  <span className="font-semibold">{item?.name}</span>
                  <span className="text-gray-500">{item?.date}</span>
                </div>

                <span className="text-gray-500">{item?.views} views</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 shadow-md flex flex-col justify-between h-full p-4 bg-gray-100">
        {data.map((item, index) => (
          <>
            <div
              className="h-full flex items-center font-semibold text-sm"
              key={item?.id}
            >
              Add content here
            </div>
            {index !== data.length - 1 && (
              <hr className="border border-gray-200" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;
