"use client";

import { motion } from "framer-motion";
import { poppins } from "@/utils";
import { useNavStore } from "@/store";
import Yellow from "@/components/Symbols/Yellow";
import Blue from "@/components/Symbols/Blue";
import Green from "@/components/Symbols/Green";
import Orange from "@/components/Symbols/Orange";

const Landing = () => {
  const open = useNavStore((state) => state.open);
  return (
    <section
      className={`flex flex-col items-center  ${
        open ? "-z-10" : "z-0 duration-500"
      }`}
    >
      <div className="absolute top-0 hidden lg:block animate-pulse">
        <Blue />
      </div>
      <div
        className={`absolute left-20 ${
          open ? "-z-10" : "z-0 duration-500"
        } hidden lg:block animate-pulse`}
      >
        <Yellow />
      </div>
      <div className="absolute left-1/4 top-1/2 hidden lg:block animate-pulse">
        <Green />
      </div>
      <div className="absolute right-10 top-1/3 hidden lg:block animate-pulse">
        <Orange />
      </div>
      <div className="p-10 flex flex-col items-center mt-20">
        <motion.h1
          whileHover={{ rotateY: "20deg" }}
          className="md:text-9xl  text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 font-sans"
        >
          INSEES
        </motion.h1>
        <div
          className={`flex flex-col items-center mt-14 p-3 ${poppins.variable} font-poppins md:text-3xl text-center z-10`}
        >
          <h2 className="text-slate-100">
            Instrumentation and Electronics Engineering Society
          </h2>
          <h2 className="text-slate-100 mt-3">
            National Institute of Technology, Silchar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
