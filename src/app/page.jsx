"use client";

import { motion } from "framer-motion";
import { poppins } from "@/utils";
import { useNavStore } from "@/store";
import Yellow from "@/components/Symbols/Yellow";
import Blue from "@/components/Symbols/Blue";
import Green from "@/components/Symbols/Green";
import Orange from "@/components/Symbols/Orange";

export default function Home() {
  const open = useNavStore((state) => state.open);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <div className="absolute top-0">
        <Blue />
      </div>
      <div
        className={`absolute left-10 ${open ? "-z-10" : "z-0 duration-500"}`}
      >
        <Yellow />
      </div>
      <div className="absolute left-1/4 top-1/2">
        <Green />
      </div>
      <div className="absolute right-10 top-1/3">
        <Orange />
      </div>
      <div className="p-10 flex flex-col items-center mt-20">
        <motion.h1 className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 font-sans">
          INSEES
        </motion.h1>
        <div
          className={`flex flex-col items-center mt-14 p-3 ${poppins.variable} font-poppins`}
        >
          <h2 className="text-slate-100 text-3xl">
            Instrumentation and Electronics Engineering Society
          </h2>
          <h2 className="text-slate-100 text-3xl mt-3">
            National Institute of Technology, Silchar
          </h2>
        </div>
      </div>
    </main>
  );
}
