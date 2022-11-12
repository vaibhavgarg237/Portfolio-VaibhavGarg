import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  //Pointer navigation
  const ref = useRef();
  const handleMouseMove = (event) => {
    const pointer = ref.current.style;
    pointer.transition = "0.2s";
    pointer.transform = "scale(1)";
    pointer.left = `${event.pageX - 30}px`;
    pointer.top = `${event.pageY - 30}px`;
  };
  const handleMouseLeave = () => {
    const pointer = ref.current.style;
    pointer.transition = "0.2s";
    pointer.transform = "scale(0)";
  };

  return (
    <div
      className="w-screen h-screen text-wh md:flex md:items-center "
      // style={{ fontFamily: "Cutive Mono" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      {/* POINTER */}
      <div
        className="CIRCLE w-14 h-14 left-[50vw] top-[50vh] bg-white rounded-full z-[1] mix-blend-difference absolute duration-100  pointer-events-none"
        ref={ref}
      ></div>
      <div className="HOVER_ELEMENT absolute left-12 top-8 font-semibold text-4xl cursor-none duration-500 hover:text-[2.75rem] hover:font-bold">
        <Link to="/">Home </Link>
      </div>

      <div className="INTRO [mobile= mx-auto pt-40 pb-36 w-fit ] md:p-[] md:ml-10 lg:ml-20 xl:ml-40 ">
        <div className="NAME font-semibold mb-4 text-3xl hover:text-4xl hover:font-bold duration-500">
          Vaibhav Garg
        </div>
        <div className="text-1xl md:text-2xl">
          Software Engineer during the day. <br /> Explorer during the night.
        </div>
      </div>

      <div className="OTHER_LINKS cursor-none relative || [ mx-auto text-7xl md:ml-auto md:mr-10 lg:mr-20 lg:text-8xl xl:mr-40  || space-y-6 w-fit flex flex-col ">
        <Link
          className="hover:text-8xl lg:hover:text-9xl duration-500 "
          to="/work"
        >
          Work
        </Link>

        <Link
          className="hover:text-8xl lg:hover:text-9xl duration-500"
          to="/about"
        >
          About
        </Link>
        <a
          className="hover:text-8xl lg:hover:text-9xl duration-500"
          href="https://blog.vaibhavgarg.tech/"
        >
          Blog
        </a>
        <Link
          className="hover:text-8xl lg:hover:text-9xl duration-500"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <footer className="absolute [ right-12 top-10 , md:right-auto md:top-auto md:left-12 md:bottom-8 ] text-white font-medium text-2xl opacity-80">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Home;
