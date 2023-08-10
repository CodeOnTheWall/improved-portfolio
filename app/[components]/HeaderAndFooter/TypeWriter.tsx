"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  const [text] = useTypewriter({
    words: [
      "Hello, my name is Bralen Sundquist",
      "I would love to discuss my experience with you",
      "And help your business scale with modern tech",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="hidden xl:flex xl:absolute left-[275px] top-1/2 whitespace-nowrap anis transform -translate-x-1/2 -translate-y-1/2 bg-light dark:bg-dark p-1 rounded-lg">
      <span>{text}</span>
      <Cursor cursorColor="#f28482" />
    </div>
  );
}
