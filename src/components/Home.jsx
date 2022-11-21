import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "atropos/css";
import Atropos from "atropos/react";

AOS.init();

function Home() {
  return (
    <div
      className="w-screen h-screen text-wh md:flex md:items-center "
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <div className="HOVER_ELEMENT absolute left-12 top-8 font-semibold { text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.25rem] } cursor-none duration-500 hover:scale-125 hover:font-bold">
        <Link to="/">Home </Link>
      </div>
      <div className="INTRO [mobile= rounded-full mx-auto pt-40 pb-36 w-fit ] md:p-[] md:ml-10 lg:ml-20 xl:ml-40 ">
        <Atropos className="w-full h-full rounded-full p-5 hover:scale-125">
          <div className="NAME font-semibold mb-4 rounded-full text-3xl hover:font-bold duration-500">
            Vaibhav Garg
          </div>
          <div className="text-1xl md:text-2xl">
            Software Engineer during the day. <br /> Explorer during the night.
          </div>
        </Atropos>
      </div>

      <div className="OTHER_LINKS cursor-none relative || [ mx-auto text-7xl md:ml-auto md:mr-10 lg:mr-20 lg:text-8xl xl:mr-40  || space-y-6 w-fit flex flex-col ">
        <Link
          className=" hover:scale-110 lg:hover:scale-125 duration-500 "
          to="/work"
        >
          Work
        </Link>

        <Link
          className="hover:scale-110 lg:hover:scale-125 duration-500"
          to="/about"
        >
          About
        </Link>
        <a
          className="hover:scale-110 lg:hover:scale-125 duration-500"
          href="https://blog.vaibhavgarg.tech/"
        >
          Blog
        </a>
        <Link
          className="hover:scale-110 lg:hover:scale-125 duration-500"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <footer className="absolute [ right-12 top-10 , md:right-auto md:top-auto md:left-12 md:bottom-8 ] text-white font-medium { text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] } opacity-80">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Home;
