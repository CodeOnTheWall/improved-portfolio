import MotionDiv from "@/app/[components]/Motion/MotionDiv";
import AnimatedText from "@/app/[components]/Motion/AnimatedText";

export default function Skills() {
  return (
    <div className="my-20 md:my-32">
      <AnimatedText text="Skills" />
      <div className=" w-full flex flex-col items-center">
        <h1 className=" my-10 text-3xl first-letter:font-bold underline underline-offset-2 decoration-black dark:decoration-white">
          Front End
        </h1>
        <div className="md:grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="flex flex-col md:col-span-4 lg:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">Languages</h2>
            <ul>
              <li>Javascript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="flex flex-col   md:col-span-4 lg:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">Frameworks</h2>
            <ul>
              <li>React</li>
              <li>NextJS</li>
            </ul>
          </div>
          <div className="flex flex-col  md:col-span-2 lg:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">
              State Management Libraries
            </h2>
            <ul>
              <li>Redux</li>
              <li>Redux Toolkit Query (caching and api call management)</li>
              <li>Zustand</li>
            </ul>
          </div>
          <div className="flex flex-col  md:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">Styling/Markup</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className="flex flex-col   md:col-span-4">
            <h2 className="text-md lg:text-2xl font-bold">
              Component Libraries
            </h2>
            <ul>
              <li>Shadcn</li>
              <li>Bootstrap</li>
              <li>React Hook Form</li>
              <li>Zod (TypeScript form validation)</li>
            </ul>
          </div>
        </div>

        <h1 className=" my-10 text-3xl first-letter:font-bold underline underline-offset-2 decoration-black dark:decoration-white">
          Back End
        </h1>
        <div className="md:grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="flex flex-col  md:col-span-6 lg:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">Databases/APIs</h2>
            <ul>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Prisma</li>
              <li>Postman (API testing)</li>
              <li>Thunderclient</li>
            </ul>
          </div>
          <div className="flex flex-col  md:col-span-6 lg:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">
              Content Management
            </h2>
            <ul>
              <li>Sanity</li>
            </ul>
          </div>
          <div className="flex flex-col  md:col-span-6 lg:col-span-4">
            <h2 className=" text-md lg:text-2xl font-bold">
              Authentication/Authorization
            </h2>
            <ul>
              <li>JWT's</li>
              <li>NextAuth</li>
              <li>ClerkAuth</li>
            </ul>
          </div>
          <div className="flex flex-col  md:col-span-6 lg:col-span-4 ">
            <h2 className=" text-md lg:text-2xl font-bold">
              Backend Technologies
            </h2>
            <ul>
              <li>Node.js</li>
              <li>REST API's</li>
              <li>MVC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
