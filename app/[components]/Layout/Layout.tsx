import React, { ReactNode } from "react";
import HireMe from "../HeaderAndFooter/HireMe";
import TransitionEffect from "../Motion/TransitionEffect";

type LayoutProps = {
  children: ReactNode;
  className?: String;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <main
      className={`${className} flex w-full min-h-screen p-12 md:p-24 lg:p-32
      text-dark dark:bg-dark dark:text-light `}
    >
      <TransitionEffect />
      {children}
      <HireMe className="hidden lg:flex lg:fixed lg:right-14 lg:bottom-14" />
    </main>
  );
}
