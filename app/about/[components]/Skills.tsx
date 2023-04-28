import MotionDiv from "../../../components/Motion/MotionDiv";
import MotionSkill from "./MotionSkill";

export default function Skills() {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <MotionDiv
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
          dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </MotionDiv>

        <MotionSkill x="-6vw" y="-8vw">
          CSS
        </MotionSkill>
        <MotionSkill x="6vw" y="-8vw">
          Redux
        </MotionSkill>
        <MotionSkill x="-8vw" y="8vw">
          TypeScript
        </MotionSkill>
        <MotionSkill x="8vw" y="8vw">
          React
        </MotionSkill>

        <MotionSkill x="-15vw" y="0vw">
          HTML
        </MotionSkill>
        <MotionSkill x="15vw" y="0vw">
          Javascript
        </MotionSkill>
        <MotionSkill x="0" y="-15vw">
          NodeJS
        </MotionSkill>
        <MotionSkill x="0vw" y="15vw">
          NextJS
        </MotionSkill>

        <MotionSkill x="16vw" y="16vw">
          TailWind CSS
        </MotionSkill>
        <MotionSkill x="-16vw" y="-16vw">
          MongoDB
        </MotionSkill>
        <MotionSkill x="-16vw" y="16vw">
          PostMan
        </MotionSkill>
        <MotionSkill x="16vw" y="-16vw">
          Sanity
        </MotionSkill>

        <MotionSkill x="-30vw" y="10vw">
          MVC
        </MotionSkill>
        <MotionSkill x="30vw" y="-10vw">
          JWT's
        </MotionSkill>
        <MotionSkill x="30vw" y="10vw">
          REST API's
        </MotionSkill>
        <MotionSkill x="-30vw" y="-10vw">
          Framer Motion
        </MotionSkill>
      </div>
    </>
  );
}
