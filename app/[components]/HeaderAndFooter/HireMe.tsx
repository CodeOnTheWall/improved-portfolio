"use client";

// NextJS
import Link from "next/link";

// Components
import { CircularTextIcon } from "../Icons";

interface HireMeProps {
  className: string;
}

export default function HireMe({ className }: HireMeProps) {
  return (
    <div
      className={`${className} flex items-center justify-center overflow-hidden`}
    >
      <div className=" w-28 lg:w-48 h-auto flex items-center justify-center">
        <CircularTextIcon
          className=" fill-dark dark:fill-light animate-spin-slow
        "
        />
        <Link
          href="/contact"
          className=" flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
           shadow-md border border-solid border-dark w-12 h-12 lg:w-20 lg:h-20 rounded-full text-[14px] lg:font-bold
           hover:bg-light hover:text-dark 
           dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            text-center"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
