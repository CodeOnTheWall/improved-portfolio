"use client";

// NextJS
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// TS
import { MouseEventHandler } from "react";

export default function MobileCustomLink({
  href,
  title,
  className,
  toggle,
}: {
  href: string;
  title: string;
  className?: string;
  toggle: MouseEventHandler<HTMLAnchorElement>;
}): JSX.Element {
  const currentPath = usePathname();
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    toggle(event);
    router.push(href);
  };
  return (
    // group allows all elements inside parent (in this case Link) to share css styles
    // this allows the Link to share the group:hover, which is what we want,
    // so that it can be hovered over as well
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        //   inline block to allow an inline element to be given block level properties like width height margin
        className={`h-[2px] inline-block bg-light absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300 ${
          currentPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      />
    </Link>
  );
}
