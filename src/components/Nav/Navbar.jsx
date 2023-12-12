"use client";

import { useEffect } from "react";
import { useNavStore } from "@/store";
import { usePathname } from "next/navigation";
import Navbutton from "./Navbutton";
import Menu from "./Menu";

const Navbar = () => {
  const activePages = useNavStore((state) => state.initialPages);
  const open = useNavStore((state) => state.open);
  const setOpen = useNavStore((state) => state.setOpen);
  const filterPages = useNavStore((state) => state.filterPages);
  const path = usePathname();

  useEffect(() => {
    filterPages(path);
  }, [path]);

  return (
    <div className="fixed">
      <Navbutton open={open} setOpen={setOpen} />
      <Menu activePages={activePages} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
