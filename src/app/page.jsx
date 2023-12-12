"use client";

import { motion } from "framer-motion";
import { poppins } from "@/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <div className="p-10 flex flex-col items-center mt-10">
        <motion.h1
          className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 font-sans"
          dragSnapToOrigin
          drag
        >
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
