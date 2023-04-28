"use client";

// Components
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import MobileCustomLink from "./MobileCustomLink";
import MotionAnchor from "../Motion/MotionAnchor";
import MotionDiv from "../Motion/MotionDiv";
import useThemeSwitcher from "../Hooks/useThemeSwitcher";
import {
  LinkedInIcon,
  GitHubIcon,
  SunIcon,
  MoonIcon,
} from "../../app/[components]/Icons";

// React
import { useState } from "react";

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <header
      className="w-full px-32 py-8 dark:text-light dark:bg-dark border-b-2 
      border-solid border-dark font-medium flex items-center justify-between relative"
    >
      {/* Hamburger */}
      <button
        onClick={handleHamburger}
        className=" flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={` bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <MotionAnchor href="https://www.linkedin.com/in/bralen-sundquist-3a3a53246/">
            <LinkedInIcon />
          </MotionAnchor>
          <MotionAnchor href="https://github.com/CodeOnTheWall">
            <GitHubIcon />
          </MotionAnchor>

          <button
            onClick={handleMode}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className=" fill-dark" />
            ) : (
              <MoonIcon className=" fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <MotionDiv
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className=" flex flex-col justify-center items-center">
            <MobileCustomLink href="/" title="Home" toggle={handleHamburger} />
            <MobileCustomLink
              href="/about"
              title="About"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="/projects"
              title="Projects"
              toggle={handleHamburger}
            />
            <MobileCustomLink
              href="/contact"
              title="Contact"
              toggle={handleHamburger}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <MotionAnchor href="https://www.linkedin.com/in/bralen-sundquist-3a3a53246/">
              <LinkedInIcon />
            </MotionAnchor>
            <MotionAnchor href="https://github.com/CodeOnTheWall">
              <GitHubIcon className=" bg-light dark:bg-dark rounded-lg " />
            </MotionAnchor>

            <button
              onClick={handleMode}
              className={`ml-3 flex items-center justify-center rounded-full p-1
    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className=" fill-dark" />
              ) : (
                <MoonIcon className=" fill-dark" />
              )}
            </button>
          </nav>
        </MotionDiv>
      ) : null}

      {/* move 50% of own width to the left (transalte-x-[-50%]) */}
      <div className=" absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
