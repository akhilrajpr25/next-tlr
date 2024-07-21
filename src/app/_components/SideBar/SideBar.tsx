import React from "react";
import { FiHome as HomeIcon } from "react-icons/fi";
import { BsGlobe2 as GlobeIcon } from "react-icons/bs";
import { RiNewspaperLine as NewsPaperIcon } from "react-icons/ri";
import { PiFileBold as FileIcon } from "react-icons/pi";
import { PiStackBold as StackIcon } from "react-icons/pi";
import { IoMdAddCircleOutline as AddIcon } from "react-icons/io";

interface NavItem {
  icon: string; // Name of the icon from Heroicons
  href?: string; // Optional link for the navigation item
}

const navItems: NavItem[] = [
  { icon: "HomeIcon", href: "/" },
  { icon: "BellIcon", href: "/notifications" },
  { icon: "SettingsIcon", href: "/settings" },
];

const Sidebar = () => {
  return (
    <div className="hidden fixed top-14 left-0 h-screen w-14 bg-gray-200 items-center justify-between text-white space-x-4 md:flex flex-col z-10">
      <ul className="space-y-6 mt-6">
        <li className="w-full text-gray-600 cursor-pointer">
          <HomeIcon />
        </li>
        <li className="w-full text-gray-600 cursor-pointer">
          <GlobeIcon />
        </li>
        <li className="w-full text-gray-600 cursor-pointer">
          <NewsPaperIcon />
        </li>
        <li className="w-full text-gray-600 cursor-pointer">
          <FileIcon />
        </li>
        <li className="w-full text-gray-600 cursor-pointer">
          <StackIcon />
        </li>
        <li>
          <hr className="border border-gray-400" />
        </li>
        <li className="w-full text-gray-600 cursor-pointer">
          <AddIcon />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
