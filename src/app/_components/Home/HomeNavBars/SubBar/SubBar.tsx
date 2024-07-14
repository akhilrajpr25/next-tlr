"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosStarOutline as StarIcon } from "react-icons/io";
import { MdKeyboardArrowDown as DownArrowIcon } from "react-icons/md";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "Documents", href: "/documents" },
  { name: "Pages", href: "/pages" },
  { name: "Site Contents", href: "/site-contents" },
];

const SubBar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div>
        <div className="space-x-4 mr-4 flex items-center">
          <span className="border p-2 rounded">SITE LOGO</span>
          <h2 className="font-bold">Communication site title</h2>
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.href);
            return (
              <Link
                href={link?.href}
                key={link?.name}
                className={
                  isActive ? "border-b-2 border-teal-700 text-sm" : "text-sm"
                }
              >
                {link?.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Confidential \ Internal only</span>
        <div className="text-sm flex items-center space-x-1">
          <StarIcon />
          <span className="text-sm">Not following</span>
        </div>
        <span className="text-sm flex items-center cursor-pointer">
          English
          <DownArrowIcon />
        </span>
      </div>
    </div>
  );
};

export default SubBar;
