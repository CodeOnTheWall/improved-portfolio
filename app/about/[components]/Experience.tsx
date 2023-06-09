"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import Details from "./Details";

const experience = [
  {
    position: "Full Stack Software Developer",
    company: "Kris Codes",
    time: "Jan 2022 - Present",
    description:
      "As a Full Stack Developer, I am responsible for creating a diverse range of applications that serve different needs and purposes. From designing employee websites and crafting business landing pages to developing complex Ecommerce platforms, my work spans across various industries and sectors. As a Full Stack Developer, my role involves working on both the frontend and backend of applications, ensuring that they are functional, intuitive, and visually appealing. I am responsible for designing and developing interactive user interfaces, implementing secure authentication and authorization systems, optimizing website speed and performance, and managing databases.",
  },
  {
    position: "Financial Advisor",
    company: "Servus Credit Union",
    time: "May 2018 - Jan 2022",
    description:
      "Giving financial planning advice with regards to investments (GIC and Mutual Funds), loan products including mortgages, insurance, and business/personal accounts and products",
  },
  {
    position: "Customer Service Representative",
    company: "TD Canada Trust",
    time: "April 2014 - April 2018",
    description:
      "I provided outstanding customer service by handling day-to-day transactions and identifying opportunities to refer customers to other departments for loans and investments.",
  },
];

// offset: ["start end", "center start"] means that the animation should start when the
// top of the referenced div (start) meets the bottom of the container (end) and end when
// the center of the referenced div (center) meets the top of the container (start).
export default function Experience() {
  const ref = useRef(null);
  //   this hook will monitor the scroll in the referenced div
  const { scrollYProgress }: { scrollYProgress: any } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className=" w-[75%] lg:w-[90%] md:w-full mx-auto relative "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
           md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experience.map((detail, index) => (
            <Details
              key={index}
              position={detail.position}
              company={detail.company}
              time={detail.time}
              description={detail.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
