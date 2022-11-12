import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Contact() {
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
      className="w-screen h-screen flex justify-center items-center "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      {/* POINTER */}
      <div
        className="CIRCLE w-14 h-14 left-[20vw] top-[80vh] bg-white rounded-full z-[1] mix-blend-difference absolute duration-100  pointer-events-none"
        ref={ref}
      ></div>
      <div className="HOVER_ELEMENT absolute left-12 top-8 w-fit font-semibold { text-[1.2rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.25rem] } cursor-none duration-500 hover:text-[2.75rem] hover:font-bold">
        <Link to="/">Home </Link>
      </div>
      {/* CONTACT-CONTENT */}
      <div className="flex flex-col -mt-32 md:mt-[0]">
        <div className="text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem]">
          Namaste!
        </div>
        <div className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] lg:ml-4">
          Just keeping things simple. <br />
          <br />
          <a href="mailto:vaibhavgarg237@gmail.com">
            Email me: vaibhavgarg237@gmail.com
          </a>
          <br />
          On the internet:{" "}
          <a href="https://github.com/vaibhavgarg237"> GitHub / </a>
          <a href="https://www.linkedin.com/in/vaibhavgargdtu/">Linkedin / </a>
          <a href="https://twitter.com/vaibhavgarg237">Twitter</a>
        </div>
      </div>
      <footer className="absolute [ right-12 top-9 , md:right-auto md:top-auto md:left-12 md:bottom-8 ] text-white font-medium { text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] } opacity-80">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Contact;
