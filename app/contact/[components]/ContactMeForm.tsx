"use client";

import { useForm } from "react-hook-form";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface FormInfo {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMeForm() {
  const { register, handleSubmit } = useForm<FormInfo>();
  const onSubmit = (formData: FormInfo) => {
    window.location.href = `mailto:bralensundquist96@gmail.com?subject=${formData.subject}
      &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-y-2 items-center space-x-5 justify-center">
        <EnvelopeIcon className="text-[#a3b18a] h-7 w-7 animate-pulse" />
        <p className=" font-bold dark:bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 dark:text-transparent bg-clip-text animate-gradient-xy">
          bralensundquist96@gmail.com
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col space-y-2 w-full md:w-3/4 mx-auto "
      >
        <input
          {...register("name")}
          placeholder="Name"
          className="contactInput "
          type="text"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="contactInput "
          type="email"
        />

        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput !h-[200px]"
        />
        <button
          type="submit"
          className="bg-[#a3b18a]/80 py-5 px-10 rounded-md text-black font-bold"
        >
          Submit
        </button>
      </form>
    </>
  );
}
