"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center mt-2 lg:mt-1">
      <MotionLink
        href="/"
        className="w-16 h-16 lg:w-14 lg:h-14  bg-dark text-light 
        flex items-center justify-center rounded-full text-2xl font-bold
        border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        KS
      </MotionLink>
    </div>
  );
}
