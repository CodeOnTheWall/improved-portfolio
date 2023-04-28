// Public
import technotesmern from "../../public/projects/technotesmern.png";
import nutritiva from "../../public/projects/nutritiva.png";
import ascensionmarketing from "../../public/projects/ascension-marketing.png";

// Components
import AnimatedText from "@/components/Motion/AnimatedText";
import { GitHubIcon } from "@/app/[components]/Icons";

// NextJS
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "Projects",
  description: "About page for Kris Sundquist",
};

// Types
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
     ${className}`}
    >
      <div className=" absolute top-3 -right-3 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark " />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} priority className=" w-full h-auto" />
      </Link>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className=" my-2 font-medium text-dark"> {summary}</p>
        <div
          className=" mt2
         flex items-center"
        >
          <Link href={github} target="_blank" className=" w-10">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

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
      className={`w-full flex flex-col space-y-5 items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative 
      ${className}`}
    >
      <div className=" absolute top-3 -right-3 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark " />

      <div className=" w-full flex items-center text-center justify-between pl-6">
        <span className=" text-primary font-medium text-xl">{type}</span>

        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" w-full text-4xl font-bold">{title}</h2>
        </Link>
        <div className="flex space-x-2">
          <Link href={github} target="_blank" className=" w-10">
            <GitHubIcon />
          </Link>
          <a
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
        <p>{summary}</p>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <main className=" p-32 w-full flex flex-col dark:bg-dark">
      <AnimatedText text="Always Imagining." className=" mb-16" />
      <div className=" grid grid-cols-12 gap-24">
        <div className=" col-span-12">
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
        </div>
        <div className=" col-span-6">
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
        </div>
        <div className=" col-span-6">
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
        </div>
        <div className=" col-span-12">
          <FeaturedProject
            img={technotesmern}
            title="MERN stack Employee TechNotes Application"
            summary="In this employee techNotes MERN project, users can easily create, read, update, and delete tickets based on their assigned roles. These CRUD operations are effectively communicated to the powerful backend REST API using Redux Toolkit Query and NodeJS, which incorporates highly efficient caching capabilities to deliver a fast and efficient application experience by reducing API calls and component re-renders. The application is equipped with a modern security system that offers fully authenticated user access and highly specific authorization routes and functionality. This allows admin to perform a range of key functions, including assigning tickets to designated employees and deleting employees when necessary. These operations are carried out with the use of sophisticated JWT's (Jason web tokens), which are issued via backend REST API and sent to the client via access tokens and refresh tokens. To enhance the user experience further, custom hooks such as useAuth, pre-fetch, and persist login have been developed. These hooks enable users to stay logged in during refreshes, access the most up-to-date information, and dictate which roles and functions they can access based on their assigned roles. Additionally, the application is entirely written in Typescript, ensuring a more structured, error-free codebase."
            type="Featured Project"
            github="https://github.com/CodeOnTheWall/techNotes"
            link="https://github.com/CodeOnTheWall/techNotes"
          />
        </div>
        <div className=" col-span-6">Project-3</div>
        <div className=" col-span-6">Project-4</div>
      </div>
    </main>
  );
}
