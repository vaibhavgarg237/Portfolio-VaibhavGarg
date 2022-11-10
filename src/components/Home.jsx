import React, { useRef } from "react";

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
      className="w-screen h-screen bg-[#1f1f1f] text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* POINTER */}
      <div
        className="CIRCLE w-14 h-14 bg-white rounded-full z-[1] mix-blend-difference absolute duration-100  pointer-events-none"
        ref={ref}
      ></div>
    </div>
  );
}

export default Home;
