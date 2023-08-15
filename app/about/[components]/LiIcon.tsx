import { motion, useScroll } from "framer-motion";

export default function LiIcon({ reference }: { reference: any }) {
  //   this hook will monitor the scroll in the referenced div
  const { scrollYProgress }: { scrollYProgress: any } = useScroll({
    target: reference,
    // start when center of element is at end of viewport and end when center of element is at center of viewport
    offset: ["center end", "center center"],
  });
  return (
    <figure className=" absolute -left-9 stroke-dark dark:stroke-light">
      <svg
        className=" -rotate-90 w-[60px] h-[60px] "
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}
