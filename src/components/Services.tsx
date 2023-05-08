import React from "react";
import { motion } from "framer-motion";
import ServiceCard1 from "./ServiceCards/ServiceCard1";
import ServiceCard2 from "./ServiceCards/ServiceCard2";
import ServiceCard3 from "./ServiceCards/ServiceCard3";
import ServiceCard4 from "./ServiceCards/ServiceCard4";

type Props = {};

const Services = (props: Props) => {
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
      <h3 className="absolute top-80 text-2xl uppercase tracking-[20px] text-purple-800 opacity-0 md:opacity-100">
        Services
      </h3>
      <div
        className=" scrollbar-thin scrollbar-track-purple-500/20 scrollbar-thumb-purple-500/40 relative inset-0 flex max-w-2xl snap-x snap-mandatory space-x-5
         overflow-x-scroll overflow-y-scroll p-10 xl:overflow-y-hidden"
      >
        <ServiceCard1 />
        <ServiceCard2 />
        <ServiceCard4 />
        <ServiceCard3 />
      </div>
    </motion.div>
  );
};

export default Services;
