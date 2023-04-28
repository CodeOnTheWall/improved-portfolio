"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import MotionDiv from "@/components/Motion/MotionDiv";

const Details = ({
  position,
  company,
  time,
  work,
}: {
  position: string;
  company: string;
  time: string;
  work: string;
}): JSX.Element => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <MotionDiv
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-2xl">
          {position}&nbsp;
          <span className=" capitalize text-purple-400 dark:text-primaryDark">
            @{company}
          </span>
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75">
          {time}
        </span>
        <p className=" font-medium w-full">{work}</p>
      </MotionDiv>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  //   this hook will monitor the scroll in the referenced div
  const { scrollYProgress }: { scrollYProgress: any } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className=" w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Software Developer"
            company="Kris Codes"
            time="Jan 2022 - Present"
            work="As a Full Stack Developer, I am responsible for creating a diverse range of applications that serve different needs and purposes. From designing employee websites and crafting business landing pages to developing complex Ecommerce platforms, my work spans across various industries and sectors. As a Full Stack Developer, my role involves working on both the frontend and backend of applications, ensuring that they are functional, intuitive, and visually appealing. I am responsible for designing and developing interactive user interfaces, implementing secure authentication and authorization systems, optimizing website speed and performance, and managing databases."
          />
          <Details
            position="Financial Advisor"
            company="Servus Credit Union"
            time="May 2018 - Jan 2022"
            work="Giving financial planning advice with regards to investments (GIC and Mutual Funds), loan products including mortgages, insurance, and business/personal accounts and products"
          />
          <Details
            position="Customer Service Representative"
            company="TD Canada Trust"
            time="April 2014 - April 2018"
            work="I provided outstanding customer service by handling day-to-day transactions and identifying opportunities to refer customers to other departments for loans and investments."
          />
        </ul>
      </div>
    </div>
  );
}
