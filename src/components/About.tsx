import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="px-45 relative inset-1 mx-auto flex max-w-7xl flex-col
      items-center justify-evenly text-center md:flex-row md:text-left xl:h-screen"
    >
      <h3 className="absolute top-0.5 text-2xl uppercase tracking-[20px] text-purple-900">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://res.cloudinary.com/ddsmswmsz/image/upload/v1676649082/About_png2na.jpg"
        className=" mdx:mb-0 sm:w-21 xl:w-700[px] -mb-0.5 h-0 w-0 flex-shrink-0 
        rounded-full object-cover sm:h-32 md:h-96 md:w-64 md:rounded-lg xl:h-[450px] xl:rounded-lg"
      ></motion.img>
      <div className="space-y-8 px-1 md:px-20">
        <h4 className="font-semibold opacity-0 text-sm md:text-5xl xl:opacity-100">
          Here is a{" "}
          <span className="underline decoration-[#6428f7]/60">little</span>{" "}
          background
        </h4>
        <p className="text-xs md:text-base ">
          Tess has over 12 years experience as a Music Teacher, teaching piano,
          trumpet and cello. In 2016, she became a HCPC-registered Music
          Therapist and member of the British Association of Music Therapy.
          <br />
          <br />
          Tess&apos; life revolves around music and has loved travelling across the
          world playing her cello in various orchestras.
          <br />
          <br />
          Tess works with children with Profound and Multiple Learning
          Disabilities (PMLD), children with Autism, children&apos;s mental health,
          adults with learning disabilities and Dementia & Alzheimer&apos;s in older
          adults. You do not need to have any prior musical experience.
          <br />
          <br />
          Over the last couple of years, Tess has studied to become a licensed
          Makaton Tutor. She is very passionate about the use of Makaton and
          knows how important communication is, especially in early childhood.
          <br />
          <br />
          Makaton is a unique language programme that uses symbols, signs and
          speech to enable people to communicate. It supports the development of
          essential communication skills such as attention and listening,
          comprehension, memory, recall and organisation of language and
          expression.
          <br />
          <br />
          Tess offers a range of Music Therapy services, Makaton classes and
          Accessible Music lessons across Essex and surrounding areas. Music
          Therapy work includes within schools, care homes and hospices, private
          referrals and online music therapy. The Makaton Signing for Babies and
          Families classes are fun and musical sessions designed for parents,
          families and carers who would like to sign with babies and children.
        </p>
      </div>
    </motion.div>
  );
}
