import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-teal-700 text-white px-2 py-1 text-center  w-full justify-between items-center flex pr-16 h-10">
      <div className="flex space-x-2 items-center text-sm">
        <span className="border px-1 rounded font-bold">FOOTER LOGO</span>
        <span>Footer display name</span>
      </div>
      <div className="flex space-x-4">
        {Array(8)
          .fill(0)
          .map((link, index) => (
            <span className="text-sm font-thin" key={`${index}-${link}`}>
              Footer Link
            </span>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
