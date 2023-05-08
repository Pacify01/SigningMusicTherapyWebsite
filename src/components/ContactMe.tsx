import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from "react-social-icons";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:Hello@SigningMusicTherapist.co.uk?subject=${formData.subject}&body=Hello, I am ${formData.name}.  ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="flex flex-col min-h-[109vh] relative inset-0  text-center md:text-left md:flex-row 
       px-10 justify-evenly mx-auto items-center sm:text-left"
    >
      <h3 className="absolute top-1 uppercase tracking-[20px] text-purple-900 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-2 md:space-y-10">
      <h4 className="text-4xl font-semibold md:text-center">
      If you like to know more, 
        </h4 >

        <h4 className="text-4xl font-semibold md:text-center ">
        please send me a{" "}
          <span className="decoration-[#6428f7]/70 underline">Message.</span>
        </h4>

        <div className="space-y-5 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
          <SocialIcon
          url="https://www.facebook.com/signingmt"
        />
                <SocialIcon
          url="https://www.instagram.com/signingmusictherapist"
          />
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#7f6ca8] h-7 w-7 md:h-10 md:w-10 animate-pulse" />
            <p className="text-2xl">Hello@SigningMusicTherapist.co.uk</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 mx-auto"
        >
          <div className=" max-w-6xl flex-col flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
          </div>
          <div className=" max-w-6xl flex-col flex space-x-2">
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#7f6ca8] py-5 px-10 rounded-md text-black font-bold
          text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
