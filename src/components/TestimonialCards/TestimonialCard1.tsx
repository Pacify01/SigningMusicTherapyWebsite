import React from "react";
import {TiChevronRight } from "react-icons/ti";

type Props = {};

function Testimonial1({}: Props) {
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
            src=".\.\images\piano@2x.png"
            alt=""
          />
          <li className="italic">
            "Tess is a very good piano teacher, as she listens well and explains
            everything clearly. Thank you for being so patient."
          </li>
          <li className="text-center">Nigel</li>
        </ul>
        <br></br>
        <div className="md:opacity-0 ml-36 text-lg"><TiChevronRight size={40}/></div>
      </div>
    </article>
  );
}

export default Testimonial1;
