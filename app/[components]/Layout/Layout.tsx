import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className: String;
};

export default function Layout({
  children,
  className,
}: LayoutProps): JSX.Element {
  return (
    <main className={`${className} flex w-full p-32 md:p-24 lg:p-16 sm:p-12`}>
      {children}
    </main>
  );
}
