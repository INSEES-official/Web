import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-poppins",
});

export const allPages = [
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
