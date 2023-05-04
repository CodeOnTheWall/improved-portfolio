import Layout from "../[components]/Layout/Layout";
import TransitionEffect from "../[components]/Motion/TransitionEffect";
import AnimatedText from "../[components]/Motion/AnimatedText";
import ContactMeForm from "./[components]/ContactMeForm";

// NextJS
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Contact page for Kris Sundquist",
};

export default function Contact() {
  return (
    <>
      <TransitionEffect />
      <Layout className="dark:bg-dark flex-col min-h-screen !pt-16">
        <AnimatedText
          text="Let's Talk"
          className=" mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <ContactMeForm />
      </Layout>
    </>
  );
}
