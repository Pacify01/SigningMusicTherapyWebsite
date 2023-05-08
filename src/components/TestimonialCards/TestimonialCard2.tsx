import React from "react";

type Props = {};

function Testimonial2({}: Props) {
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
            src=".\.\images\tambourine@2x.png"
            alt=""
          />
          <li className="italic">
            "Tess has always been reliable, patient and caring during music therapy sessions. Tess' extra knowledge of Makaton has been a bonus"
          </li>
          <li className="text-center">Rebecca</li>
        </ul>
      </div>
    </article>
  );
}

export default Testimonial2;