import Layout from "../[components]/Layout/Layout";
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
    <Layout className=" flex-col gap-y-6 ">
      <AnimatedText text="Let's Talk" />
      <ContactMeForm />
    </Layout>
  );
}
