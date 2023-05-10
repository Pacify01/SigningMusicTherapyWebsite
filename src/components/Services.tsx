import React, { useRef } from "react";
import { motion } from "framer-motion";
import ServiceCard1 from "./ServiceCards/ServiceCard1";
import ServiceCard2 from "./ServiceCards/ServiceCard2";
import ServiceCard3 from "./ServiceCards/ServiceCard3";
import ServiceCard4 from "./ServiceCards/ServiceCard4";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type Props = {};

const Services = (props: Props) => {

// const SlideLeft = () => {
//    var slider = document.getElementById("slider");
//   slider.scrollLeft = slider.scrollLeft - 500;
//  };
//  };
//  const SliderRight = () => {
 //   document.getElementById("slider");
 //   scrollLeft += 500;
 // };
 
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
      className="text-lft relative inset-0 mx-auto flex min-h-[150vh] max-w-full flex-col items-center
    justify-evenly overflow-hidden px-10 md:flex-row"
    >
      <FaChevronCircleLeft
        size={50}
  //      onClick={slideLeft}
        className="opacity-0 md:opacity-50 cursor-pointer hover:opacity-100"
      />
      <h3 className="absolute top-80 text-2xl uppercase tracking-[20px] text-purple-800 opacity-0 md:opacity-100">
        Services
      </h3>
      <div
        id="slider"
        className="scroll-smooth relative inset-0 flex max-w-2xl
         snap-x snap-mandatory space-x-5 overflow-x-scroll overflow-y-scroll p-10 xl:overflow-y-hidden"
      >
        <ServiceCard1 />
        <ServiceCard2 />
        <ServiceCard4 />
        <ServiceCard3 />
      </div>
      <FaChevronCircleRight
        size={50}
   //     onClick={SliderRight}
        className="opacity-0 md:opacity-50 cursor-pointer hover:opacity-100"
      />
    </motion.div>
  );
};

export default Services;