"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridO as MenuIcon } from "react-icons/cg";
import { LiaSearchSolid as SearchIcon } from "react-icons/lia";
import { TfiAnnouncement as AnnouncementIcon } from "react-icons/tfi";
import { IoSettingsOutline as SettingsIcon } from "react-icons/io5";
import { FaQuestion as QuestionMarkIcon } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav className="bg-gray-700 text-white fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4 z-10">
      <div className="flex space-x-4 items-center">
        <MenuIcon className="w-7 h-7" />
        <span className=" border p-2 rounded">TENANT LOGO</span>
        <h1 className="">SharePoint</h1>
      </div>
      <div className="relative flex items-center w-3/12">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
        <input
          type="text"
          className="w-full p-1 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10 placeholder-gray-600"
          placeholder="Search"
        />
      </div>
      <div>
        <ul className="flex space-x-6 items-center">
          <li>
            <AnnouncementIcon className="hover:text-gray-400 cursor-pointer" />
          </li>
          <li>
            <SettingsIcon className="hover:text-gray-400 cursor-pointer" />
          </li>
          <li>
            <QuestionMarkIcon className="hover:text-gray-400 cursor-pointer" />
          </li>
          <li>
            <div className="flex items-center">
              <button className="focus:outline-none" onClick={toggleMenu}>
                <div className="flex items-center justify-center bg-gray-300 rounded-full w-8 h-8 text-gray-700 font-bold text-xl">
                  U
                </div>
              </button>

              {showMenu && (
                <div
                  ref={menuRef}
                  className="origin-top-right absolute top-full right-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  {Array(4)
                    .fill("Menu Item")
                    .map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="py-2 hover:bg-gray-200 text-gray-700 px-3 cursor-pointer"
                        onClick={toggleMenu}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
