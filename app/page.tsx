// Public
import me2 from "../public/me/me2.jpg";

// Components
import AnimatedText from "@/components/Motion/AnimatedText";
import { LinkArrowIcon } from "@/app/[components]/Icons";

// NextJS
import Image from "next/image";
import Link from "next/link";

// Metadata
export const metadata = {
  title: "Kris Portfolio",
  description: "Full Stack developer portfolio",
};

export default function page() {
  return (
    <main
      className="flex items-center text-dark w-full min-h-screen p-32 dark:bg-dark
     dark:text-light"
    >
      <div className="flex items-center justify-evenly w-full">
        <div className=" w-1/3">
          <Image
            priority
            src={me2}
            alt="Bralen Sundquist Handsome Picture"
            className=" w-full h-auto rounded-lg"
          />
        </div>
        {/* align items affects all items in container, while self-center is the div itself */}
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code And Design."
            className="  !text-left "
            // awesome effect but doesnt work with variants inside AnimatedText
            // bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 inline-block text-transparent bg-clip-text animate-gradient-xy
          />
          <p className=" my-4 text-base font-semibold">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects,
            showcasing my expertise in React.js, Node.js, and other web
            development technologies.
          </p>
          <div className=" flex items-center self-start mt-2">
            <Link
              href="/BralenSundquist.pdf"
              target={"_blank"}
              className=" flex items-center bg-dark text-light p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
             dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
              download={true}
            >
              Resume <LinkArrowIcon className="w-6 ml-1" />
            </Link>
            <Link
              href="mailto:bralensundquist96@gmail.com"
              target={"_blank"}
              className=" ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* <div className=" absolute right-14 bottom-14 inline-block w-24">
        <Image
          src={lightBulb}
          alt="Kris Sundquist"
          className=" w-full h-auto"
        />
      </div> */}
    </main>
  );
}
