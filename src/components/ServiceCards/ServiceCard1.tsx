import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

type Props = {};

function ServiceCard1({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-fit md:w-[600px] xl:w-[900px] 
    snap-center bg-[rgb(248,248,223)] p-10 hover:opacity-100 opacity-80 
     cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-20 md:px-28 md:space-y-12">
        <h4 className="text-4xl font-light">
          Individual Music Therapy sessions
        </h4>
        <p className="font-bold text-2xl mt-1">
          Lasting from 30 minutes to 45 minutes depending on client’s needs
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Sessions are highly individualised and the therapist works with the
            client to identify their own personal therapeutic goals and how best
            to achieve them.
          </li>
          <li>
            Suitable for anyone who would like to receive music therapy in their
            own home, or private sessions may also be arranged in residential
            service, day service, nursing home, care centre or school.
          </li>
        </ul>
        <div className="md:opacity-0 ml-32 text-lg">
          <HiArrowLongRight size={100} />
        </div>
      </div>
    </article>
  );
}

export default ServiceCard1;
