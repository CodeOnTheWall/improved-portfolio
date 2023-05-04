// Public
import me2 from "../public/me/me2.jpg";

// Components
import AnimatedText from "./[components]/Motion/AnimatedText";
import TransitionEffect from "./[components]/Motion/TransitionEffect";
import { LinkArrowIcon } from "./[components]/Icons";
import Layout from "./[components]/Layout/Layout";

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
    <>
      <TransitionEffect />
      <Layout className="items-center text-dark min-h-screen dark:bg-dark dark:text-light">
        <div className="flex lg:flex-col sm:space-y-4 items-center justify-evenly w-full ">
          <div className=" w-1/3 md:w-full">
            <Image
              priority
              src={me2}
              alt="Bralen Sundquist Handsome Picture"
              // md 767 - lg 1023 will be hidden - tailwind css is always mobile first
              // hence lg and lower is hidden, until md, then md and lower its inline block
              // inline-bloc, will make div containing Image behave like inline-block container,
              // this means it will be sized based on its content, i.e. md:w-full
              className=" w-full h-auto rounded-lg md:inline-block lg:hidden "
            />
          </div>
          {/* align items affects all items in container, while self-center is the div itself */}
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className=" !text-left lg:!text-center "
            />
            <p className=" my-4 text-base font-semibold md:text-sm">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects,
              showcasing my expertise in React.js, Node.js, and other web
              development technologies.
            </p>
            <div className=" flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/BralenSundquist.pdf"
                target={"_blank"}
                className=" flex items-center bg-dark text-light p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
             dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
              md:p-2 md:px-4 md:text-base
             "
                download={true}
              >
                Resume <LinkArrowIcon className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:bralensundquist96@gmail.com?subject=We%20Want%20You!&body=We%20are%20interested%20in%20your%20services,%20can%20we%20schedule%20a%20call?"
                target={"_blank"}
                className=" ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
