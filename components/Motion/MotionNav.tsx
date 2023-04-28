"use client";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionNav({ children, className, ...rest }: Props) {
  return (
    <motion.nav className={className} {...rest}>
      {children}
    </motion.nav>
  );
}
