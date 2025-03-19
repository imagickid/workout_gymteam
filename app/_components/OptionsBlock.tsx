"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

function OptionsBlock() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const toggleSearch = () => {
    setSearchIsOpen((prev) => !prev);
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    setSearchIsOpen(false);
  };

  return (
    <div className="flex items-center">
      <div className="mr-3 flex items-center space-x-5 sm:mr-5 sm:space-x-7 md:mr-2 md:space-x-4">
        <RiSearch2Line
          className="cursor-pointer text-2xl"
          onClick={toggleSearch}
        />
        <MdOutlineMail className="cursor-pointer text-2xl" />
      </div>
      <span>
        <Hamburger toggled={isOpen} toggle={toggleMenu} size={18} />
      </span>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`absolute top-16 right-2 w-64 rounded-full border border-neutral-500 bg-neutral-200 px-4 py-2 pr-10 text-neutral-900 transition-all duration-300 ease-in-out focus:ring-1 focus:ring-neutral-600 focus:outline-none sm:top-20 ${searchIsOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <div
        className={`absolute top-16 right-0 w-64 bg-neutral-900 p-4 shadow-md transition-all duration-300 ease-in-out sm:top-20 md:bg-lime-300 md:text-black ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ul>
          <li className="p-2">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="p-2">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OptionsBlock;
