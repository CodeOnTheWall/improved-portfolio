"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      className="h-screen fixed top-0 left-0 z-0"
      style={{
        width: "15vw",
        background: "linear-gradient(to right, #B63E96, #f5f5f5)",
      }}
      animate={{ translateX: ["0%", "100%"] }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  );
}
