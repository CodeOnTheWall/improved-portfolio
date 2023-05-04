"use client";
import { motion, MotionProps } from "framer-motion";

// x and y are not included in the MotionProps interface provided by Framer Motion
// hence have to extend these items
interface Props extends MotionProps {
  children: string;
  className?: string;
  x: string;
  y: string;
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
      className={`${className} absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      py-3 lg:py-2 px-6 lg:px-4 md:text-sm md:py-1.5 md:px-3 shadow-dark
       dark:text-dark dark:bg-light cursor-pointer xs:bg-dark xs:dark:bg-transparent
        xs:text-light xs:dark:text-light xs:text-bold`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
