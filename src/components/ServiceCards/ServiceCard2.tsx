import React from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

type Props = {};

function ServiceCard2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-fit md:w-[600px] xl:w-[900px] 
    snap-center bg-[rgb(248,248,223)] p-10 hover:opacity-100 opacity-80 
     cursor-pointer transition-opacity duration-200 overflow-hidden">

      <div className="px-20 md:px-28 md:space-y-12">
        <h4 className="text-4xl font-light">Makaton Signing for Babies and Families (MSBF)</h4>
        <p className="font-bold text-2xl mt-1">Parents, family or carers who like to sign with babies and children</p>
<ul className="list-disc space-y-4 ml-5 text-md">
    <li>These sessions are designed for you and your child to have fun and learn together.</li>
    <li>Makaton Signing for Babies and Families training is a series of sessions designed to encourage the development of communication and language skills in babies and toddlers.</li>
    <li> All the sessions are fun and interactive for you and your child. You will learn approximately 100 signs and symbols using songs, games and activities.</li>
    <div className="md:opacity-0 ml-10"><HiArrowLongLeft size={100} className="absolute"/><HiArrowLongRight size={100} className="absolute ml-24"/></div>
</ul>
      </div>
    </article>
  );
}

export default ServiceCard2;
