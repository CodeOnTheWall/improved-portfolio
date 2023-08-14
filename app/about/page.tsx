// Public
import me1 from "../../public/me/me1.jpg";

// Components
import AnimatedText from "../[components]/Motion/AnimatedText";
import Skills from "./[components]/Skills";
import Experience from "./[components]/Experience";
import AnimatedNumbers from "./[components]/AnimatedNumbers";
import Education from "./[components]/Education";
import Layout from "../[components]/Layout/Layout";

// NextJS
import type { Metadata } from "next";
import Image from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "About Me",
  description: "About page for Kris Sundquist",
};

// Reusable Component
type StatisticProps = {
  value: number;
  label: string;
};
const Statistic = ({ value, label }: StatisticProps) => {
  return (
    <div className="flex flex-col  justify-center">
      <span className=" text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
        <AnimatedNumbers value={value} />+
      </span>
      <h2 className="font-medium capitalize text-dark/75 dark:text-light/75  text-sm sm:text-base md:text-lg xl:text-center ">
        {label}
      </h2>
    </div>
  );
};

export default function About() {
  return (
    <Layout className=" flex-col justify-center">
      <AnimatedText text="Passion Fuels Purpose!" />
      <div className="flex flex-col items-start justify-start my-10 md:my-16 ">
        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
          About Me
        </h2>
        <p className=" font-medium">
          As a software developer, I am deeply passionate about tackling complex
          problems with creative solutions. With two years of hands-on
          experience in the field, I recognized the power of software to make a
          global impact and set out to create applications that solve real-world
          issues. Driven by a background in systems thinking, I relish the
          challenge of developing websites and applications that transcend
          borders and connect people worldwide. Having honed my skills through
          various projects, including those for clients, I am confident in my
          ability to deliver exceptional results. It brings me immense
          satisfaction to bring my clients' visions to life by conceptualizing
          their ideas and utilizing my technical expertise to make them a
          reality.
        </p>
      </div>

      <div className="flex justify-between ">
        <Statistic value={5} label="satisfied clients" />
        <Statistic value={10} label="projects completed" />
        <Statistic value={2} label="years of experience" />
      </div>
      <Skills />
      <Experience />
      <Education />
    </Layout>
  );
}
