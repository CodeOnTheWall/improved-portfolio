// Public
import technotesmern from "../../public/projects/technotesmern.png";
import nutritiva from "../../public/projects/nutritiva.png";
import ascensionmarketing from "../../public/projects/ascension-marketing.png";
import reactlogo from "../../public/react-logo@3x.svg";
import AIPrompts from "../../public/projects/AIPrompts.png";
import ImageGenerator from "../../public/projects/ImageGenerator.png";
import JJ from "../../public/projects/jj-serene-therapy.png";

// Components
import AnimatedText from "@/app/[components]/Motion/AnimatedText";
import { GitHubIcon } from "@/app/[components]/Icons";
import Layout from "@/app/[components]/Layout/Layout";
import StackTitle from "./[components]/StackTitle";

// NextJS
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "Projects",
  description:
    "About page for Bralen Sundquist, featuring practice and client projects. Projects use a variety of full stack technologies, such as nodejs, react, nextjs, express, mern, mongodb, mongoose",
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
      // for the absolute shadow to work, the parent item has to have relative
      className={`w-full flex flex-col items-center rounded-2xl md:rounded-3xl border border-solid border-dark bg-light shadow-2xl relative
     p-4 md:p-8 lg:p-12 gap-y-6 ${className}`}
    >
      <div className=" absolute top-3 -right-3 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark " />

      <div className="w-full flex flex-col xl:flex-row justify-evenly items-center gap-y-3 md:gap-y-0">
        <h1 className=" text-primary dark:text-black font-medium text-lg lg:text-xl self-center">
          {type}
        </h1>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className="font-bold dark:text-black text-base md:text-lg xl:text-4xl text-center ">
            {title}
          </h2>
        </Link>
      </div>

      <div className=" w-full flex flex-col lg:flex-row justify-center items-center space-x-5 space-y-5 md:space-y-0">
        <Link
          href={link}
          target="_blank"
          className="w-full lg:w-[50%]  cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} priority className=" w-full h-auto" />
        </Link>
        <p
          className=" text-dark text-sm md:text-lg overflow-y-auto w-full lg:w-[50%]
  scrollbar-thin max-h-[300px] scrollbar-track-[#a4ac86] scrollbar-thumb-[#1b4332]"
        >
          {summary}
        </p>
      </div>

      <div className=" w-full space-x-5 flex items-center justify-center">
        <Link href={github} target="_blank" className=" w-10">
          <GitHubIcon />
        </Link>
        <Link
          href={link}
          target="_blank"
          className=" rounded-lg bg-dark text-light p-2 px-6 text-base md:text-lg font-semibold
            sm:px-4   "
        >
          Visit Project
        </Link>
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
      className={` w-full col-span-12 md:col-span-6 lg:col-span-4 relative flex flex-col space-y-5 rounded-2xl border border-solid border-dark bg-light
       p-4 md:p-6 
      ${className}`}
    >
      <div className=" absolute top-3 -right-3 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark " />

      {/* Project Type, Title, GitHub, Visit Website */}
      <div className=" w-full flex flex-col items-center space-y-3 text-center justify-between">
        <h1 className=" text-primary font-medium text-base md:text-lg xl:text-xl">
          {type}
        </h1>

        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" w-full text-2xl lg:text-4xl font-bold">{title}</h2>
        </Link>
        <div className="flex space-x-2">
          <Link
            href={github}
            target="_blank"
            className="w-10 flex items-center "
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
          className=" text-dark text-sm md:text-lg overflow-y-auto
           scrollbar-thin max-h-[300px] scrollbar-track-[#a4ac86] scrollbar-thumb-[#1b4332]"
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
    <Layout className="flex-col !pt-16">
      <AnimatedText text="Always Imagining" />

      <StackTitle className=" my-10">MERN Full-Stack Projects</StackTitle>
      <FeaturedProject
        className=" dark:bg-gradient-to-r 
          from-purple-300
          to-pink-500
          via-red-400            
         animate-gradient-xy"
        img={technotesmern}
        title="MERN stack Employee TechNotes Application"
        summary="In this employee TechNotes MERN project, users can easily create, read, update, and delete tickets based on their assigned roles. These CRUD operations are effectively communicated to the powerful backend REST API using Redux Toolkit Query and NodeJS, which incorporates highly efficient caching capabilities to deliver a fast and efficient application experience by reducing API calls and component re-renders. The application is equipped with a modern security system that offers fully authenticated user access and highly specific authorization routes and functionality. This allows admin to perform a range of key functions, including assigning tickets to designated employees and deleting employees when necessary. These operations are carried out with the use of sophisticated JWT's (Jason web tokens), which are issued via backend REST API and sent to the client via access tokens and refresh tokens. To enhance the user experience further, custom hooks such as useAuth, pre-fetch, and persist login have been developed. These hooks enable users to stay logged in during refreshes, access the most up-to-date information, and dictate which roles and functions they can access based on their assigned roles. Additionally, the application is entirely written in Typescript, ensuring a more structured, error-free codebase."
        type="Featured Project"
        github="https://github.com/CodeOnTheWall/techNotes"
        link="https://github.com/CodeOnTheWall/techNotes"
      />

      <StackTitle className=" my-20 flex flex-col md:flex-row w-full justify-center">
        NextJS Full-Stack Projects and Client Work
      </StackTitle>

      <div className=" w-full space-y-6 md:space-y-0 gap-y-6 gap-x-10  md:grid grid-cols-12   ">
        <Project
          className=" dark:bg-gradient-to-r 
          from-orange-400
         to-orange-200
          via-orange-400
          animate-gradient-xy"
          img={AIPrompts}
          title="Promptzila"
          summary="Utilizing the latest features of Next.js 13.4 (stable app directory), this AI prompt sharing full-stack application incorporates comprehensive CRUD operations. It leverages the new server routes functionality and is powered by next-auth 2023 and MongoDB for the database. The app allows users to authenticate themselves in order to create captivating prompts for use with AI tools. Additionally, users are authorized to modify or delete their own posts while having read-only access to other users' prompts. The application also offers search capabilities for tags and prompts, as well as the ability to explore other users' profiles and their respective prompts. In addition to the functionality, this application is sleekly designed with modern Tailwind CSS"
          type="NextJS Full-Stack"
          github="https://github.com/CodeOnTheWall/AI-Prompt-Maker-NextJS"
          link="https://ai-prompt-maker-next-js.vercel.app/"
          website="Website"
        />
        <Project
          className=" dark:bg-gradient-to-r 
          from-blue-400
         to-blue-200
          via-blue-400
          animate-gradient-xy"
          img={ImageGenerator}
          title="UnSplash Image Generator"
          summary="Presenting an impressive showcase of Next.js 13.4's stable app directory, this application highlights the latest core features, including static, dynamic, client, and ISR data fetching and caching. To exemplify these capabilities, I have seamlessly integrated the Unsplash API, leveraging server components for all API calls. Each page exemplifies a unique approach to fetching and storing data. Furthermore, dynamic routes are complemented by dynamic generation of metadata. Written in Typescript."
          type="NextJS Full-Stack"
          github="https://github.com/CodeOnTheWall/Image-Generator-NextJS"
          link="https://image-generator-next-js-ecru.vercel.app/"
          website="Website"
        />
        <Project
          className=" dark:bg-gradient-to-r 
          from-blue-400
          to-blue-200
           via-blue-400
        animate-gradient-xy"
          img={JJ}
          title="JJ Serene Therapy"
          summary="Dynamic client project for an esteemed Osteopath! Leveraging cutting-edge tools, we've meticulously crafted an unparalleled user experience while streamlining development for maximum reliability. Seamlessly Empowering Clients: Our bespoke solution allows clients to effortlessly book appointments and submit inquiries, all through an intuitive interface. Using shadcn's type-safe forms, we ensure data accuracy and security. Pioneering Technology: Embracing innovation, we've harnessed the power of NextJS route handlers to channel all form data securely through our protected API endpoints. This ensures the highest level of confidentiality and integrity. Elevated Admin Capabilities: With Next-Auth integration, administrators enjoy secure access to a comprehensive dashboard. They can seamlessly manage and update data within shadcn's Data Table, empowering Admins to easily updated, delete, and add notes to clients file. Harmonizing Calendars: Our project harmoniously syncs with Calendly's calendar API, instantly populating connected calendars with appointments. This automation simplifies scheduling, enhancing user convenience. Crafted Visual Excellence: The application's aesthetics come to life through the artful blend of Tailwind CSS and the dynamic animations brought to us by the Framer Motion library. The result is not only functional but visually captivating."
          type="Client Project"
          github="https://github.com/CodeOnTheWall/JJ-Serene-Therapy-NextJS"
          link="https://jj-serene-therapy-next-7procpcgt-codeonthewall.vercel.app/"
          website="Website"
        />
        <Project
          className=" dark:bg-gradient-to-r 
          from-orange-400
          to-orange-200
           via-orange-400
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
         to-blue-200
          via-blue-400
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

      <StackTitle className=" my-20 flex flex-col md:flex-row w-full justify-center">
        Pure React Front-End Projects
      </StackTitle>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          to-blue-200
           via-blue-400
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
  );
}
