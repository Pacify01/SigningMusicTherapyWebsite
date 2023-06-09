import React from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

type Props = {};

function ServiceCard4({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-fit md:w-[600px] xl:w-[900px] 
    snap-center bg-[rgb(248,248,223)] p-10 hover:opacity-100 opacity-80 
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-20 md:px-28 md:space-y-12">
        <h4 className="text-4xl font-light">Accessible Music Lessons</h4>
        <p className="font-bold text-2xl mt-1">
          One-to-one lessons in-person or online
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Anyone who wants to learn musical skills but finds it hard to engage
            with traditional lessons.
          </li>
          <li>
            As a Music Therapist, I am trained to tune into each person&apos;s
            unique abilities, needs and responses.
          </li>
          <li>
            The lessons can help students to progress on the instrument of their
            choice or improve their signing
          </li>
          <div className="md:opacity-0 ml-10">
            <HiArrowLongLeft size={100} className="absolute" />
            <HiArrowLongRight size={100} className="absolute ml-24" />
          </div>
        </ul>
      </div>
    </article>
  );
}

export default ServiceCard4;
