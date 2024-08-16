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
      <div className="flex mt-40">
        <div className="flex-1 flex justify-center items-center ">
          <div className="w-[650px] h-[650px] mt-[120px] ml-40">
            <h1 className="text-[30px]">My Portfolio</h1>
            <h1 className="font-bold text-[70px]">My name</h1>

            <h1 className="text-[24px] font-bold text-violet-700">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "UX/UI",
                    "Designer",
                    "Landing Website",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-[24px]">
              I am a Junior Developer Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nihil, ea.
            </p>
            <div className="mt-10">
              <hr />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-[650px] h-[650px] rounded-full bg-white shadow-2xl  shadow-indigo-700 relative ">
            <div className="absolute ">
              <div className="surprise-bg">
                <animated.div style={spring}>
                  <img
                    src="../img/human.png"
                    alt=""
                    className="w-[650px] h-[650px]  mx-auto -z-10"
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
