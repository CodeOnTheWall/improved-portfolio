"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedNumbers({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  //   when span element is in view
  const isInView = useInView(ref, { once: true });

  // if isInView, set motionValue to the value passed in
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // on "change", which is essentially when a value is passed into the function
  // because initial value is 0, hence when a value is passed, that is a change
  // latest is the current value as the value increases to the passed in value
  // and as long as its <= passed in value, the ref will be given that number
  // useSpring will auto move towards the passed in value
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
}
