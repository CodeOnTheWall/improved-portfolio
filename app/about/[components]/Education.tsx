"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import Details from "./Details";

const eduction = [
  {
    title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    place: "Udemy Bootcamp",
    time: "2022",
    description:
      "In this Node.js bootcamp, I learned the basics of Node.js, including core modules, REST APIs, and GraphQL APIs. I also gained skills in building real-time web services. Throughout the course, I completed two major projects - an online shop and a blog - which allowed me to apply and refine my skills. As a result, I was able to level up my Node.js and MERN stack skills from beginner to advanced.",
  },
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    place: "Udemy Bootcamp",
    time: "2022",
    description:
      "In this React Bootcamp, I learned the key fundamentals and advanced concepts of React, including components, data binding, state management, React hooks, debugging, styling, HTTP requests, Redux, React Router, Next.js, authentication, unit tests, and animations. Through examples and demo projects, I gained practical knowledge to build client and practice projects.",
  },
  {
    title: "CSS - The Complete Guide 2022 (incl. Flexbox, Grid & Sass)",
    place: "Udemy Bootcamp",
    time: "2022",
    description:
      "I completed a comprehensive CSS course that covered all the essential topics from selectors, properties, and inheritance to advanced concepts like responsive design, Flexbox, CSS Grid, animations, and fonts. The course provided practical examples, quizzes, and a real project to apply the knowledge learned.",
  },
  {
    title: "The Web Developer Bootcamp 2022",
    place: "Udemy Bootcamp",
    time: "2022",
    description:
      "In my first bootcamp, I learned the most relevant topics in the industry. Taught by a professional bootcamp instructor, I built 13+ projects, including a gigantic production application called YelpCamp, while learning modern tools and technologies such as HTML5, CSS3, JavaScript, NodeJS, MongoDB, and more.",
  },
  {
    title: "Bachelor of Business Administration Finance",
    place: "NAIT",
    time: "2014-2018",
    description:
      "I have a degree in business administration with a focus on corporate finance. During my degree, I learned the basics of marketing, management, accounting, and communication, with the last two years being focused on corporate finance",
  },
];

export default function Education() {
  const ref = useRef(null);
  //   this hook will monitor the scroll in the referenced div
  const { scrollYProgress }: { scrollYProgress: any } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
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
        <ul className=" w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {eduction.map((courses) => (
            <Details
              title={courses.title}
              place={courses.place}
              time={courses.time}
              description={courses.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
