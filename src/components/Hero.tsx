import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Tess",
      "I am a HCPC registered Music Therapist",
      "Licensed Makaton Tutor and Music Teacher",
    ],
    loop: true,
    delaySpeed: 1750,
  });
  return (
    <div
      className="min-h-[150vh] relative inset-0 md:h-screen flex flex-col space-y-8 items-center justify-center text-center 
    overflow-hidden"
    >
      
      <BackgroundCircles />
      <img
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        src=".\.\images\Tess.jpg" alt="Hero picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-purple-800 pb-2 font-bold tracking-[15px]">
          Music Therapy
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="rgb(135,209,172)AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton font-bold bg-[rgb(187,226,251)]" >About</button>
          </Link>
          <Link href="#services">
            <button className="heroButton font-bold bg-[rgb(187,226,251)]">Services</button>
          </Link>
          <Link href="#testimonials">
            <button className="heroButton font-bold bg-[rgb(187,226,251)]">Testimonials</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton font-bold bg-[rgb(187,226,251)]">Contact</button>
          </Link>
        </div>
        <br></br>
        <div className="flex items-center space-x-5 justify-center">
          <SocialIcon
          url="https://www.facebook.com/signingmt"
          target="_blank"
          rel="noreferrer"
        />
                <SocialIcon
          url="https://www.instagram.com/signingmusictherapist"
          target="_blank"
          rel="noreferrer"
          />
          </div>
      </div>
      
    </div>
  );
}
