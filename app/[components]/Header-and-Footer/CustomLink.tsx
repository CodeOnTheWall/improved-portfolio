"use client";

// NextJS
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}): JSX.Element {
  const router = usePathname();
  return (
    // group allows all elements inside parent (in this case Link) to share css styles
    // this allows the Link to share the group:hover, which is what we want,
    // so that it can be hovered over as well
    <Link href={href} className={`${className} relative group font-bold`}>
      {title}
      <span
        //   inline block to allow an inline element to be given block level properties like width height margin
        className={`h-[2px] inline-block bg-dark absolute left-0 bottom-0
        group-hover:w-full transition-[width] ease duration-300 ${
          router === href ? "w-full" : "w-0"
        } dark:bg-light`}
      />
    </Link>
  );
}
