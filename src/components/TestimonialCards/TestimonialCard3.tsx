import React from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

type Props = {};

function Testimonial3({}: Props) {
  return (
    <article
      className="flex flex-col items-center space-y-7 flex-shrink-0 h-auto md:h-auto w-[590px] xl:w-[900px] 
    snap-center bg-[rgb(248,248,223)] p-10 hover:opacity-100 opacity-80 
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-20 md:px-28 ">
        <ul className="space-y-16 text-xl text-center">
          <img
            className="relative h-32 w-32 mx-auto object-cover"
            src=".\.\images\violin@2x.png"
            alt=""
          />
          <li className="italic">
            "The school children look forward to seeing Tess each week for their
            piano lessons. It is very important to keep music going in schools
            and Tess is very enthusiastic in sharing her love of music with the
            students. Each child always comes out of their lesson with a smile
            on their face."
          </li>
          <li className="text-center">Sarah</li>
        </ul>
        <br></br>
        <div className="md:opacity-0 ml-20">
          <HiArrowLongLeft size={100} className="absolute" />
          <HiArrowLongRight size={100} className="absolute ml-24" />
        </div>
      </div>
    </article>
  );
}

export default Testimonial3;
