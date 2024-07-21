"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgMenuGridO as MenuIcon } from "react-icons/cg";
import { LiaSearchSolid as SearchIcon } from "react-icons/lia";
import { TfiAnnouncement as AnnouncementIcon } from "react-icons/tfi";
import {
  IoSettingsOutline as SettingsIcon,
  IoMenu as HamBurgerIcon,
  IoClose as CloseIcon,
} from "react-icons/io5";
import { FaQuestion as QuestionMarkIcon } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    { name: "Home", href: "/home" },
    { name: "Documents", href: "/documents" },
    { name: "Pages", href: "/pages" },
    { name: "Site Contents", href: "/site-contents" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    if (showMenu || showOverlay) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, showOverlay]);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setShowMenu(false);
    setShowOverlay(false);
  };

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <>
      <nav className="bg-gray-700 text-white fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-4">
          <MenuIcon className="w-7 h-7 hidden md:block lg:block" />
          <span className="border p-2 rounded w-auto h-7 flex items-center">
            LOGO
          </span>
          <h1 className="hidden md:block lg:block">SharePoint</h1>
        </div>
        <div className="relative items-center w-3/12 hidden md:flex lg:flex">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
          <input
            type="text"
            className="w-full p-1 rounded-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 pl-10 placeholder-gray-600"
            placeholder="Search"
          />
        </div>
        <div>
          <ul className="space-x-6 items-center hidden md:flex lg:flex">
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
          <button className="block md:hidden hover:text-gray-400 cursor-pointer">
            <HamBurgerIcon className="w-6 h-6" onClick={toggleOverlay} />
          </button>
        </div>
      </nav>

      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ease-in-out"
          onClick={toggleOverlay}
        >
          <div
            ref={overlayRef}
            className="fixed top-0 left-0 h-full w-64 bg-gray-700 text-white shadow-lg p-4 z-30 transition-transform duration-300 ease-in-out transform translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full justify-end mb-5">
              <button className="" onClick={toggleOverlay}>
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {links.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                  <div
                    key={link?.name}
                    className={`${
                      isActive ? "bg-gray-500 " : ""
                    } px-2 py-1 rounded`}
                    onClick={() => {
                      toggleOverlay();
                      router.push(link?.href);
                    }}
                  >
                    {link?.name}
                  </div>
                );
              })}
              {/* {Array(4)
                .fill("Overlay Menu Item")
                .map((item, index) => (
                  <li key={`${item}-${index}`}>
                    <div
                      className="hover:bg-gray-600 text-white px-3 cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      {item}
                    </div>
                    {expandedItem === index && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {Array(3)
                          .fill("Nested Item")
                          .map((nestedItem, nestedIndex) => (
                            <li
                              key={`${nestedItem}-${nestedIndex}`}
                              className="hover:bg-gray-600 text-white px-3 cursor-pointer"
                              onClick={toggleOverlay}
                            >
                              {nestedItem}
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
