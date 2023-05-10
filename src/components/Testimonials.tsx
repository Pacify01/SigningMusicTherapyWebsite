import { motion } from "framer-motion";

import Testimonial1 from "./TestimonialCards/TestimonialCard1";
import Testimonial2 from "./TestimonialCards/TestimonialCard2";
import Testimonial3 from "./TestimonialCards/TestimonialCard3";
import Testimonial4 from "./TestimonialCards/TestimonialCard4";
import Testimonial5 from "./TestimonialCards/TestimonialCard5";
import Testimonial6 from "./TestimonialCards/TestimonialCard6";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type Props = {};

const Testimonials = (props: Props) => {
  const SlideLeftT = () => {
    var sliderT = document.getElementById("testimonialSlider");
    sliderT.scrollLeft = sliderT.scrollLeft - 500;
  };

  const SliderRightT = () => {
    var sliderT = document.getElementById("testimonialSlider");
    sliderT.scrollLeft = sliderT.scrollLeft + 500;
  };
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
        onClick={SlideLeftT}
        className="opacity-0 md:opacity-50 cursor-pointer hover:opacity-100"
      />
      <h3 className="absolute top-80 text-2xl uppercase tracking-[20px] text-purple-800 opacity-0 md:opacity-100">
        Testimonials
      </h3>
      <div
        id="testimonialSlider"
        className=" scrollbar-none relative inset-0 flex max-w-2xl snap-x snap-mandatory space-x-5
         overflow-x-scroll overflow-y-scroll p-10 xl:overflow-y-hidden"
      >
        <Testimonial1 />
        <Testimonial2 />
        <Testimonial3 />
        <Testimonial4 />
        <Testimonial5 />
        <Testimonial6 />
      </div>
      <FaChevronCircleRight
        size={50}
        onClick={SliderRightT}
        className="opacity-0 md:opacity-50 cursor-pointer hover:opacity-100"
      />
    </motion.div>
  );
};

export default Testimonials;
