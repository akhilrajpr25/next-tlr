import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="md:fixed bottom-0 bg-teal-700 text-white px-2 py-1 text-center  w-full justify-between items-center md:pl-16 h-auto md:h-10 sm:h-auto hidden md:flex">
      <div className="flex md:space-x-2 md:items-center text-sm">
        <span className="border p-1 rounded w-auto h-6 flex items-center">
          LOGO
        </span>
        <span className="hidden md:block">Footer display name</span>
      </div>
      <div className="md:space-x-4 md:flex sm:block">
        {Array(8)
          .fill(0)
          .map((link, index) => (
            <div className="sm:text-sm font-thin" key={`${index}-${link}`}>
              Footer Link
            </div>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
