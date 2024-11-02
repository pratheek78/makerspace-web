"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function Makersfete() {
  return (
    <div>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-100 to-purple py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Makers Fete <br /> Coming Soon.
      </motion.h1>
    </LampContainer>

    {/* <p className="text-center md:tracking-wider text-s md:text-lg lg:text-2xl  text-blue-100/[0.7]">
          Makers fete '24, Coming Soon.</p> */}
    </div>
  );
}
