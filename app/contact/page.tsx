import Layout from "../[components]/Layout/Layout";
import TransitionEffect from "../[components]/Motion/TransitionEffect";
import AnimatedText from "../[components]/Motion/AnimatedText";
import ContactMeForm from "./[components]/ContactMeForm";

// NextJS
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kris Sundquist: Web Developer and Designer",
  description:
    "Get in touch with Kris Sundquist, a web developer and designer, for inquiries, collaborations, and more. Fill out the form or send an email to bralencsundquist@hotmail.com.",
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
