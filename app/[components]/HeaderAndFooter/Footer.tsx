// canva to create, and erase.bg to remove background, then adobe express to convert to svg
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full dark:bg-dark dark:text-light dark:border-light border-t-2 border-solid border-dark font-medium text-lg
     sm:text-base"
    >
      <div className=" p-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        {/* <div className=" flex items-center">
          Build With{" "}
          <span className=" text-primary text-2xl px-1"> &#9825;</span> by&nbsp;
          <Link href="/">Kris Sundquist</Link>
        </div> */}
        <Link href="/contact">Say hello</Link>
      </div>
    </footer>
  );
}
