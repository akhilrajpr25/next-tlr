"use client";
import { useState, useEffect } from "react";

const data = {
  title: "Add title here",
  summary: "Add summary here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus lectus, tempus ac odio vitae, mattis dapibus est. Praesent rhoncus, eros eu ullamcorper imperdiet, enim odio sollicitudin magna, ullamcorper rutrum lacus est in nunc. Ut sed lorem lectus.",
};

const divContents = [
  [
    "See the world through a whole new perspective 1",
    "See the world through a whole new perspective 1",
    "See the world through a whole new perspective 1",
  ],
  [
    "See the world through a whole new perspective 2",
    "See the world through a whole new perspective 2",
    "See the world through a whole new perspective 2",
  ],
  [
    "See the world through a whole new perspective 3",
    "See the world through a whole new perspective 3",
    "See the world through a whole new perspective 3",
  ],
];

const radioLabels = [1, 2, 3];

const SectionSix = () => {
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected + 1) % divContents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 pl-16 pb-20 bg-gray-300">
      <div className="col-span-4 p-6 space-y-4">
        <div className="font-bold">{data?.title}</div>
        <div className="text-sm">{data?.summary}</div>
        <div className="text-sm">{data?.description}</div>
      </div>

      <div className="col-span-8 space-y-4">
        <div className=" grid grid-cols-3 p-6 gap-4">
          {divContents[selected].map((content, index) => (
            <div key={index} className=" rounded-md bg-white">
              <div className="h-40 bg-gray-400 rounded-t-md"></div>
              <div className="p-4 text-sm">{content}</div>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 justify-center">
          {radioLabels.map((label, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="options"
                checked={selected === index}
                onChange={() => setSelected(index)}
                className="hidden"
              />
              <span
                className={`flex items-center justify-center w-4 h-4 border-2 rounded-full cursor-pointer ${
                  selected === index ? "border-teal-700" : "border-gray-500"
                }`}
              >
                {selected === index && (
                  <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
