"use client";
import { motion, MotionProps } from "framer-motion";

// x and y are not included in the MotionProps interface provided by Framer Motion
// hence have to extend these items
interface Props extends MotionProps {
  children: string;
  className?: string;
  x: any;
  y: any;
}

export default function MotionSkill({
  children,
  className,
  whileTap,
  x,
  y,
  ...rest
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={whileTap}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      className={`${className} flex items-center justify-center absolute rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
       dark:text-dark dark:bg-light cursor-pointer`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
