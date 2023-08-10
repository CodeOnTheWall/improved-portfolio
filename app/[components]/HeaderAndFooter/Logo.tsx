"use client";

// React
import { useState } from "react";
// NextJS
import Link from "next/link";
// Framer Motion ts types
import { motion } from "framer-motion";
// Components
import TypeWriter from "./TypeWriter";

const MotionLink = motion(Link);

export default function Logo() {
  const [textChatIsOpen, setTextChatIsOpen] = useState(false);

  const toggleTextChat = () => {
    setTextChatIsOpen(!textChatIsOpen);
  };

  return (
    <div className="relative">
      <MotionLink
        href="/"
        className=" w-12 h-12 md:w-14 md:h-14  bg-dark text-light 
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
        onMouseEnter={toggleTextChat}
      >
        BS
      </MotionLink>

      {textChatIsOpen && <TypeWriter />}
    </div>
  );
}
