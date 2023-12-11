"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbutton from "./Navbutton";
import Menu from "./Menu";

const pages = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    name: "Team",
    link: "/team",
  },
  {
    id: 4,
    name: "Developers",
    link: "/developers",
  },
  {
    id: 5,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 6,
    name: "Resources",
    link: "/resources",
  },
];

const Navbar = () => {
  const [activePages, setActivePages] = useState(pages);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const currentPage = path;
    setActivePages(pages.filter((page) => page.link != currentPage));
    console.log(activePages, path);
  }, [path]);

  return (
    <div className="relative right-0">
      <Navbutton open={open} setOpen={setOpen} />
      <Menu activePages={activePages} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
