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

  return (
    <div className="w-full h-[950px] relative slanted-bg " id="hero">
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="sm:flex block mt-40">
        <div className="sm:flex-1 flex justify-center items-center ">
          <div className="sm:w-[650px] sm:h-[650px] sm:mt-[120px] sm:flex-col justify-center items-center ml-10 sm:pl-20">
            <h1 className="text-[16px] sm:text-[30px]">My Portfolio</h1>
            <h1 className="font-bold text-[70px]">My name</h1>

            <h1 className="text-[14px] sm:text-[26px] font-bold text-violet-700">
              {" "}
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
            <p className="text-[14px] sm:text-[24px] text-wrap">
              I am a Junior Developer Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nihil, ea.
            </p>
            <div className="mt-10">
              <hr className="w-[80%] sm:w-[100%] mb-20"/>
            </div>
          </div>
        </div>
        <div className="sm:flex-1 ">
          <div className="w-[300px] h-[300px] sm:w-[650px] sm:h-[650px] flex justify-center items-center rounded-full bg-white shadow-2xl  shadow-indigo-700 relative left-20 sm:-left-20">
            <div className="absolute ">
              <div className="surprise-bg">
                <animated.div style={spring}>
                  <img
                    src="../img/human.png"
                    alt=""
                    className="sm:w-[650px] sm:h-[650px] w-[200px] h-[250px] mx-auto -z-10"
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
