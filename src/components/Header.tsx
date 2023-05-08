import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="top-0 p-5 flex sticky items-start justify-between max-w-7xl mx-auto z=21 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center "
        
      ><img
      className="relative h-24 w-24 xl:h-32 xl:w-32 mx-auto object-cover z-50 opacity-0 md:opacity-100"
      src="https://res.cloudinary.com/ddsmswmsz/image/upload/v1683562759/SIGNING-4_kasyjg.png"
      alt=""></img>
        {/* Social Icons */}
        
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-blue-300 cursor-pointer"
        onClick={() => (window.location.href = "#contact")}
        
      ></motion.div>
    </header>
  );
}

export default Header;
