import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactMe from "@/components/ContactMe";

const Home = () => {
  return (
    <div
      className=" bg-[rgb(248,248,223)] text-purple-800 fixed inset-0 snap-center w-full snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scroll scrollbar-thin scrollbar-track-purple-500/20 scrollbar-thumb-purple-500/40"
    >
      <Head>
        <title>TNT Music Therapy</title>
      </Head>
      <Header />

      <section id="Hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="services" className="snap-center">
        <Services />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};
export default Home;