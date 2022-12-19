"use client";
import React from "react";
import { categories } from "../constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

function NavLinks() {
  // loads when window mounts on the page
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;

    // converts into several values [mysite.com, news, technology]
    // pop  takes off last value and compares the path e.g. business sports etc
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm  gap-4 pb-18 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;

// need to sort the brackets
