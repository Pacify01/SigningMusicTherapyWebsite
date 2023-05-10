import React from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

type Props = {};

function Testimonial4({}: Props) {
  return (
    <article
      className="flex flex-col items-center space-y-7 flex-shrink-0 h-auto md:h-auto w-[590px] xl:w-[900px] 
    snap-center bg-[rgb(248,248,223)] p-10 hover:opacity-100 opacity-80 
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-20 md:px-28 ">
        <ul className="space-y-16 text-2xl text-center">
          <img
            className="relative h-32 w-32 mx-auto object-cover"
            src=".\.\images\maraca@2x.png"
            alt=""
          />
          <li className="italic">
            "Tess is an incredible music therapist with a talent and bundles of
            patience. Tess is so creative and adaptive; supporting the needs of
            my child to ensure maximum engagement from each session."
          </li>
          <li className="text-center">Jenny</li>
        </ul>
        <br></br>
        <div className="md:opacity-0 ml-36">
          <TiChevronLeft size={40} className="absolute" />
          <TiChevronRight size={40} className="absolute ml-8" />
        </div>
      </div>
    </article>
  );
}

export default Testimonial4;
