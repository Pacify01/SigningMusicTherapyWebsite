import { motion } from "framer-motion";

import Testimonial1 from "./TestimonialCards/TestimonialCard1";
import Testimonial2 from "./TestimonialCards/TestimonialCard2";
import Testimonial3 from "./TestimonialCards/TestimonialCard3";
import Testimonial4 from "./TestimonialCards/TestimonialCard4";
import Testimonial5 from "./TestimonialCards/TestimonialCard5";
import Testimonial6 from "./TestimonialCards/TestimonialCard6";

type Props = {};

const Testimonials = (props: Props) => {
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
        Testimonials
      </h3>
      <div
        className=" scrollbar-thin scrollbar-track-purple-500/20 scrollbar-thumb-purple-500/40 relative inset-0 flex max-w-2xl snap-x snap-mandatory space-x-5
         overflow-x-scroll overflow-y-scroll p-10 xl:overflow-y-hidden"
      >
        <Testimonial1 />
        <Testimonial2 />
        <Testimonial3 />
        <Testimonial4 />
        <Testimonial5 />
        <Testimonial6 />
      </div>
    </motion.div>
  );
};

export default Testimonials;
