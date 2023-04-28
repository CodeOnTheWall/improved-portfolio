// Public
import me1 from "../../public/me/me1.jpg";

// Components
import AnimatedText from "@/components/Motion/AnimatedText";
import Skills from "./[components]/Skills";
import Experience from "./[components]/Experience";
import AnimatedNumbers from "./[components]/AnimatedNumbers";
import Education from "./[components]/Education";

// NextJS
import type { Metadata } from "next";
import Image from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "About Me",
  description: "About page for Kris Sundquist",
};

export default function About() {
  return (
    <main
      className=" p-32 flex w-full flex-col items-center justify-center relative
     dark:text-light dark:bg-dark"
    >
      <AnimatedText text="Passion Fuels Purpose!" className=" mb-16" />
      <div className="flex justify-evenly">
        <div className="flex flex-col  w-1/3">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            About Me
          </h2>
          <p className=" font-medium">
            As a software developer, I am deeply passionate about tackling
            complex problems with creative solutions. With two years of hands-on
            experience in the field, I recognized the power of software to make
            a global impact and set out to create applications that solve
            real-world issues. Driven by a background in systems thinking, I
            relish the challenge of developing websites and applications that
            transcend borders and connect people worldwide. Having honed my
            skills through various projects, including those for clients, I am
            confident in my ability to deliver exceptional results. It brings me
            immense satisfaction to bring my clients' visions to life by
            conceptualizing their ideas and utilizing my technical expertise to
            make them a reality.
          </p>
        </div>

        <div
          className="relative h-max w-1/3 rounded-2xl border-2 border-solid border-dark
         bg-light dark:bg-dark dark:border-light p-4 max-h-[400px] max-w-[400px]"
        >
          <div className=" absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light " />
          <Image
            priority
            src={me1}
            alt="Kris Sundquist"
            className=" w-full h-auto rounded-2xl max-h-[400px] max-w-[400px]"
          ></Image>
        </div>

        <div className=" flex flex-col w-1/3 justify-between items-center ">
          <div className="flex flex-col items-end justify-center">
            <span className=" inline-block text-7xl font-bold">
              <AnimatedNumbers value={5} />+
            </span>
            <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75">
              satisfied clients
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className=" inline-block text-7xl font-bold">
              <AnimatedNumbers value={10} />+
            </span>
            <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-end justify-center">
            <span className=" inline-block text-7xl font-bold">
              <AnimatedNumbers value={2} />+
            </span>
            <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75">
              years of experience
            </h2>
          </div>
        </div>
      </div>

      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
