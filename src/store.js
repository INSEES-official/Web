import { create } from "zustand";
import { allPages } from "./utils";

const pages = allPages;

export const useNavStore = create((set) => ({
  initialPages: pages,
  open: false,
  filterPages: (currentPath) =>
    set(() => ({
      initialPages: pages.filter((page) => page.link != currentPath),
    })),
  setOpen: (newState) => set(() => ({ open: newState })),
}));
