"use client";
// split method finds each space and creates an array of individual words
// mapping over each word to create a span, &nbsp; creates a non-breaking space between
// each word, so the words dont cause a new line

import { motion } from "framer-motion";

// Framer Motion Variants
const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

const singleLetter = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

export default function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden
     "
    >
      <motion.h1
        className={`w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
        // telling the variants to use initial from quote, and animate from quote
        variants={quote}
        // refering to the initial and animate above in quote
        initial="initial"
        animate="animate"
      >
        {/* children/staggerChildren from the quote Variant */}
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className=" inline-block"
            variants={singleWord}
          >
            {/* non breaking space */}
            {word.split("").map((letter, index) => (
              <motion.span
                key={letter + "-" + index}
                className="inline-block "
                variants={singleLetter}
              >
                {letter}
              </motion.span>
            ))}
            &nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
