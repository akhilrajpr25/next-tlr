import { useEffect, useRef, useState } from "react";
import {
  MdKeyboardArrowDown as DownArrowIcon,
  MdKeyboardArrowUp as UpArrowIcon,
} from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="justify-center w-full focus:outline-none flex items-center space-x-2 text-sm"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Primary Group
          {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {Array(3)
              .fill("Primary link")
              .map((link, index) => (
                <span
                  className="block px-4 py-2 text-sm hover:bg-gray-200 text-gray-700 cursor-pointer"
                  key={`${link}-${index}`}
                  onClick={toggleDropdown}
                >
                  {link}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
