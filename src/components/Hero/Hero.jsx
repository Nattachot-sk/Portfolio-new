import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSpring, animated } from "@react-spring/web";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  const spring = useSpring({
    from: { translateX: 300 },
    to: [
      { translateX: 0, config: { duration: 300 } },
      { translateX: -30, config: { duration: 500 } },
      { translateX: 0, config: { duration: 300 } },
    ],
    config: { tension: 280, friction: 120 },
  });
  const Textspring = useSpring({
    from: { translateX: -300 },
    to: { translateX: 0 },
    config: { tension: 280, friction: 120 },
  });
  

  return (
    <div className="w-full h-auto min-h-screen relative slanted-bg" id="hero">
      <div className="relative z-10">

        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row mt-20 sm:mt-40">
        <div className="flex-1 flex justify-center items-center">
          <div className="md:w-[650px] md:h-[650px] mt-10 md:mt-[120px] px-6 md:px-20 text-center sm:text-left">
            <h1 className="text-[24px] md:text-[40px]">My Portfolio</h1>
            <h1 className="font-bold text-[36px] sm:text-[70px]">Natthachot</h1>
            <h1 className="text-[20px] md:text-[26px] font-bold text-violet-700">
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "UX/UI",
                    "Designer",
                    "Landing Website",
                    "Full Stack Web",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <animated.div style={Textspring}>
            <p className="text-[16px] sm:text-[24px] mt-4 sm:mt-6">
              I am a Junior Developer. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Nihil, ea.
            </p>
            </animated.div>
            <div className="mt-10">
              <hr className="w-[80%] sm:w-full mb-10 sm:mb-20 mx-auto sm:mx-0" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-10 sm:mt-0">
          <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[650px] md:h-[650px] flex justify-center items-center rounded-full bg-white shadow-2xl shadow-indigo-700 relative sm:-left-20">
            <div className="absolute">
              <div className="surprise-bg">
                <animated.div style={spring}>
                  <img
                    src="../img/ntc.jpg"
                    alt=""
                    className="w-[200px] h-[250px] md:w-[450px] md:h-[450px] mx-auto rounded-full object-cover border-2 border-black"
                  />
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
