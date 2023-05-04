"use client";

import { useRef } from "react";

import LiIcon from "./LiIcon";
import MotionDiv from "@/app/[components]/Motion/MotionDiv";

export default function Details({
  title,
  place,
  description,
  time,
  company,
  position,
}: {
  title?: string;
  place?: string;
  description: string;
  time: string;
  company?: string;
  position?: string;
}): JSX.Element {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mt-0 w-[60%] md-w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <MotionDiv
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {title || position}&nbsp;
          <span className=" capitalize text-purple-400">
            @{place || company}
          </span>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className=" font-medium w-full md:text-sm">{description}</p>
      </MotionDiv>
    </li>
  );
}
