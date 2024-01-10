"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [info, setInfo] = useState({
    email: "",
    message: "",
  });

  const submit = () => {
    if (!validateMail) return;
  };

  const validateMail = () => {
    return true;
  };

  return (
    <motion.section
      className="flex flex-col bg-black md:p-10 mt-40 gap-7 md:w-1/2 rounded-lg p-5
       border border-white text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      id="contact"
    >
      <h1
        className="text-5xl text-transparent bg-clip-text 
      bg-gradient-to-r from-white to-slate-700 font-bold"
      >
        Contact Us
      </h1>
      <div className="p-0.5 rounded-md bg-gradient-to-r from-green-600 to-blue-500"></div>
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <div className="h-10 bg-gradient-to-r from-green-600 to-blue-500 rounded-3xl p-0.5">
          <input
            type="text"
            className="p-2 bg-black h-full w-full rounded-3xl pl-3"
            name="email"
            placeholder="enter your email address"
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-lg">
          Message
        </label>
        <div className="h-36 bg-gradient-to-r from-green-600 to-blue-500 rounded-3xl p-0.5">
          <textarea
            name="message"
            className="resize-none rounded-3xl p-3 bg-black w-full h-full"
            placeholder="your message..."
            maxLength={300}
            onChange={(e) => setInfo({ ...info, message: e.target.value })}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="p-2 px-5 rounded-3xl bg-gradient-to-t from-green-600 to-blue-500 text-black
           hover:bg-gradient-to-b ease-in hover:text-white"
          onClick={submit}
        >
          Let's Talk!
        </button>
      </div>
    </motion.section>
  );
};

export default Contact;
