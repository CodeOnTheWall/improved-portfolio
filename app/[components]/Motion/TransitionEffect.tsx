import MotionDiv from "./MotionDiv";

export default function TransitionEffect() {
  return (
    <>
      <MotionDiv
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-30
     bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "100%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <MotionDiv
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-20
     bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
      />
      <MotionDiv
        className=" fixed top-0 bottom-0 right-full w-screen h-screen z-10
     bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      />
    </>
  );
}
