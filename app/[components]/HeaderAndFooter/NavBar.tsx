"use client";

// Components
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import MobileCustomLink from "./MobileCustomLink";
import MotionAnchor from "../Motion/MotionAnchor";
import MotionDiv from "../Motion/MotionDiv";

// Icons
import { LinkedInIcon, GitHubIcon } from "../Icons";

// React
import { useState } from "react";
import ThemeSwitcher from "../Hooks/useThemeSwitcher";
import HireMe from "./HireMe";

export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav
      className="w-full p-8 dark:text-light dark:bg-dark border-b-2 
      border-solid border-dark font-medium relative
       "
    >
      {isHamburgerOpen && (
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
            <ThemeSwitcher />
          </nav>
        </MotionDiv>
      )}

      <button
        onClick={handleHamburger}
        className="flex flex-col lg:hidden justify-center items-center"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isHamburgerOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={` bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
            isHamburgerOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={` bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isHamburgerOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>
      <HireMe className="absolute lg:hidden -top-4 right-1" />

      <div className="hidden lg:flex w-full justify-between items-center">
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
          <ThemeSwitcher />
        </nav>
      </div>
      {/* absolutely positioned to the nearest parent which is the nav
moved 50% to the left, and 50% from the top to be aligned 
almost perfectly vertically and horizontally. It is almost aligned
perfectly but without transform, it is aligned to 50% based on the top
and left edge, hence we also have to transform the element itself
by moving itself -x/y 50%*/}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Logo />
      </div>
    </nav>
  );
}
