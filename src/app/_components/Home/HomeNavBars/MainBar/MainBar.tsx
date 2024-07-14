import Dropdown from "@/app/_components/Dropdown";
import React from "react";

const MainBar = () => {
  return (
    <div className="flex items-center px-6 py-4">
      <div className="space-x-4 mr-4">
        <span className="border p-2 rounded">HUB LOGO</span>
        <span>Hub site header title</span>
      </div>
      <div className="space-x-4">
        {Array(3)
          .fill("Primary link")
          .map((link, index) => {
            return (
              <span className="text-sm cursor-pointer" key={`${link}-${index}`}>
                {link}
              </span>
            );
          })}
        <Dropdown />
      </div>
    </div>
  );
};

export default MainBar;
