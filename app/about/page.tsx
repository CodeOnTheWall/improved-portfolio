// Public
import me1 from "../../public/me/me1.jpg";

// Components
import AnimatedText from "../[components]/Motion/AnimatedText";
import Skills from "./[components]/Skills";
import Experience from "./[components]/Experience";
import AnimatedNumbers from "./[components]/AnimatedNumbers";
import Education from "./[components]/Education";
import Layout from "../[components]/Layout/Layout";
import TransitionEffect from "../[components]/Motion/TransitionEffect";

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
    <div className="flex flex-col items-end xl:items-center justify-center">
      <span className=" inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
        <AnimatedNumbers value={value} />+
      </span>
      <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
        {label}
      </h2>
    </div>
  );
};

export default function About() {
  return (
    <>
      <TransitionEffect />
      <Layout className=" flex-col !pt-16 items-center justify-center dark:text-light dark:bg-dark">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className=" mb-16 sm:mb-8 "
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div
            className=" col-span-3 xl:col-span-4 flex flex-col items-start justify-start
        md:order-2 md:col-span-8 "
          >
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              About Me
            </h2>
            <p className=" font-medium">
              As a software developer, I am deeply passionate about tackling
              complex problems with creative solutions. With two years of
              hands-on experience in the field, I recognized the power of
              software to make a global impact and set out to create
              applications that solve real-world issues. Driven by a background
              in systems thinking, I relish the challenge of developing websites
              and applications that transcend borders and connect people
              worldwide. Having honed my skills through various projects,
              including those for clients, I am confident in my ability to
              deliver exceptional results. It brings me immense satisfaction to
              bring my clients' visions to life by conceptualizing their ideas
              and utilizing my technical expertise to make them a reality.
            </p>
          </div>

          {/* height: max-content sets the height of the element to adjust to the
 height of its content, which means that anything inside it will expand
  or shrink accordingly. */}
          <div
            className=" relative col-span-3 xl:col-span-4 h-max rounded-2xl border-2 border-solid border-dark
         bg-light dark:bg-dark dark:border-light p-4 md:order-1 md:col-span-8 "
          >
            <div className="absolute top-3 left-3 w-full h-full z-[-1] rounded-2xl bg-dark dark:bg-light" />
            <Image
              priority
              src={me1}
              alt="Kris Sundquist"
              className=" w-full h-auto rounded-2xl "
            />
          </div>

          <div
            className=" col-span-2 xl:col-span-8 flex flex-col xl:flex-row justify-between items-end xl:items-center
        md:order-3"
          >
            <Statistic value={5} label="satisfied clients" />
            <Statistic value={10} label="projects completed" />
            <Statistic value={2} label="years of experience" />
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />
      </Layout>
    </>
  );
}
