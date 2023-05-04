"use client";

import { motion, MotionProps } from "framer-motion";

interface Props extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MotionDiv({ children, className, ...rest }: Props) {
  return (
    <motion.div className={className} {...rest}>
      {children}
    </motion.div>
  );
}
