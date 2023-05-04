"use client";

// Framer Motion
import { motion, MotionProps } from "framer-motion";

// Types
interface Props extends MotionProps {
  className?: string;
  href: string;
}

export default function MotionAnchor({ href, children }: Props) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-8 mx-3"
      href={href}
      target={"_blank"}
    >
      {children}
    </motion.a>
  );
}
