// Public
import technotesmern from "../../public/projects/technotesmern.png";
import nutritiva from "../../public/projects/nutritiva.png";
import ascensionmarketing from "../../public/projects/ascension-marketing.png";
import reactlogo from "../../public/react-logo@3x.svg";

// Components
import AnimatedText from "@/app/[components]/Motion/AnimatedText";
import { GitHubIcon } from "@/app/[components]/Icons";
import Layout from "@/app/[components]/Layout/Layout";

// NextJS
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { StaticImageData } from "next/image";
import TransitionEffect from "@/app/[components]/Motion/TransitionEffect";

// Metadata
export const metadata: Metadata = {
  title: "Projects",
  description: "About page for Kris Sundquist",
};

// Reusable Components
// FeaturedProject
interface FeaturedProjectTypes {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
  website?: string;
  className?: string;
}
const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  className,
}: FeaturedProjectTypes) => {
  return (
    <article
      className={`w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative
     lg:flex-col xs:p-4 lg:p-8 xs:rounded-2xl col-span-12 ${className}`}
    >
      <div className=" absolute top-3 -right-3 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark " />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} priority className=" w-full h-auto" />
      </Link>

      <div className=" w-1/2 lg:w-full lg:pl-0 lg:pt-0  flex flex-col items-start justify-between pl-6">
        <span className=" text-primary font-medium text-xl xs:text-base lg:mt-2">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p
          className=" my-2 font-medium text-dark sm:text-sm  overflow-y-auto
  sm:scrollbar-thin sm:h-[300px] scrollbar-track-[#a4ac86] scrollbar-thumb-[#1b4332]"
        >
          {summary}
        </p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className=" w-10">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base  "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// Project
const Project = ({
  title,
  type,
  img,
  link,
  summary,
  github,
  website,
  className,
}: FeaturedProjectTypes) => {
  return (
    <article
      className={`w-full relative flex flex-col space-y-5 rounded-2xl border border-solid border-dark bg-light
       p-6 xs:p-4 col-span-6 xl:col-span-12 
      ${className}`}
    >
      <div className=" absolute top-3 -right-3 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark " />

      {/* Project Type, Title, GitHub, Visit Website */}
      <div className=" !mt-0 w-full flex sm:flex-col sm:pl-0 sm:space-y-2 items-center text-center justify-between pl-6">
        <span className=" text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" w-full text-4xl lg:text-2xl font-bold">{title}</h2>
        </Link>
        <div className="flex space-x-2">
          <Link
            href={github}
            target="_blank"
            className=" w-10 md:w-6 flex items-center "
          >
            <GitHubIcon />
          </Link>
          <a
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
              md:text-base "
          >
            Visit {website}
          </a>
        </div>
      </div>

      <div className=" flex w-full">
        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className=" w-full h-auto" />
        </Link>
      </div>

      <div>
        <p
          className="overflow-y-auto
  sm:scrollbar-thin sm:h-[300px] scrollbar-track-[#a4ac86] scrollbar-thumb-[#1b4332]"
        >
          {summary}
        </p>
      </div>
    </article>
  );
};
// End Reusable Components

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <Layout className="flex-col dark:bg-dark !pt-16">
        <AnimatedText
          text="Always Imagining."
          className=" mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div
          className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16
       lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
        >
          <FeaturedProject
            className=" dark:bg-gradient-to-r 
            from-purple-300
            to-pink-500
            via-red-400            
           animate-gradient-xy"
            img={technotesmern}
            title="MERN stack Employee TechNotes Application"
            summary="In this employee techNotes MERN project, users can easily create, read, update, and delete tickets based on their assigned roles. These CRUD operations are effectively communicated to the powerful backend REST API using Redux Toolkit Query and NodeJS, which incorporates highly efficient caching capabilities to deliver a fast and efficient application experience by reducing API calls and component re-renders. The application is equipped with a modern security system that offers fully authenticated user access and highly specific authorization routes and functionality. This allows admin to perform a range of key functions, including assigning tickets to designated employees and deleting employees when necessary. These operations are carried out with the use of sophisticated JWT's (Jason web tokens), which are issued via backend REST API and sent to the client via access tokens and refresh tokens. To enhance the user experience further, custom hooks such as useAuth, pre-fetch, and persist login have been developed. These hooks enable users to stay logged in during refreshes, access the most up-to-date information, and dictate which roles and functions they can access based on their assigned roles. Additionally, the application is entirely written in Typescript, ensuring a more structured, error-free codebase."
            type="Featured Project"
            github="https://github.com/CodeOnTheWall/techNotes"
            link="https://github.com/CodeOnTheWall/techNotes"
          />
          <Project
            className=" dark:bg-gradient-to-r 
          from-orange-300
         to-orange-200
          via-orange-50
          animate-gradient-xy"
            img={nutritiva}
            title="Nutritiva"
            summary="Crafted with modern UI design principles in mind, this fully responsive website for a nutritionist is designed to engage and captivate users. The sleek and stylish UI is created using cutting-edge technologies like Tailwind CSS and Framer Motion, making it stand out from the crowd. The website features Stripe payment integration via the Stripe API, providing users with a hassle-free payment experience. Additionally, the website integrates with Calendly Booking, streamlining the booking process. The technology stack powering this website includes React 18, NextJS 13, and Sanity v3 for the backend, ensuring a smooth and seamless experience for both the user and the nutritionist."
            type="Client Project"
            github="https://github.com/CodeOnTheWall/nutritiva"
            link="https://nutritivamex.com/"
            website="Website"
          />
          <Project
            className=" dark:bg-gradient-to-r 
             from-blue-400
             to-blue-300
             via-blue-100
             animate-gradient-xy"
            img={ascensionmarketing}
            title="Ascension Marketing"
            summary="This landing page for a marketing company is built with a focus on functionality and practicality. It uses popular UI libraries such as FramerMotion and Tailwind CSS to create a clean and straightforward design that delivers information effectively. Clients can easily book appointments using our Calendly API integration, streamlining the process for everyone involved. The technology stack is built on reliable frameworks such as React 18 and NextJS 13, ensuring a stable and dependable experience for users. Overall, this landing page is designed to be practical and effective, without sacrificing quality or functionality."
            type="Client Project"
            github="https://github.com/CodeOnTheWall/Ascension-Marketing"
            link="https://ascensionmarketingteam.com/"
            website="Website"
          />
          <Project
            className=" dark:bg-gradient-to-r 
          from-orange-300
         to-orange-200
          via-orange-50
          animate-gradient-xy"
            img={reactlogo}
            title="MERN stack Expense Tracker"
            summary="In this beginner React project, my focus was on understanding and implementing core React features. I learned to pass data via props, share data application-wide via use-context, manage state more effectively using use-reducer, and conditionally render JSX based on specific states. Additionally, I explored use-effect to manage form validity and apply CSS classes, as well as use-ref to target specific form fields based on user inputs. Throughout the project, I gained extra practice with core JavaScript, including array and Math methods. The project included creating reusable React components, such as form inputs, card wrappers, and buttons. As my knowledge of full-stack development increased, I went back to add additional advanced features such as efficient caching and limited API calls via Redux Toolkit Query, in tandem with the other MERN technologies, to create a full-stack expense tracker."
            type="Project"
            github="https://github.com/CodeOnTheWall/Expense-Tracker"
            link="https://github.com/CodeOnTheWall/Expense-Tracker"
            website="Project"
          />
          <Project
            className=" dark:bg-gradient-to-r 
             from-blue-400
             to-blue-300
             via-blue-100
             animate-gradient-xy"
            img={reactlogo}
            title="Food Order App"
            summary="In this pure front-end React application, I delved deeply into the various React hooks, including useState, useEffect, useContext, and useReducer, and even created my own custom hooks. This immersive experience not only enhanced my understanding of React, but also provided an opportunity to sharpen my JavaScript skills, particularly within the cart logic and throughout the application."
            type="Project"
            github="https://github.com/CodeOnTheWall/food-order-app"
            link="https://github.com/CodeOnTheWall/food-order-app"
            website="Project"
          />
        </div>
      </Layout>
    </>
  );
}
