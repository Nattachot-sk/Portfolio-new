import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Skill.css";

function Skill() {
  const frontend = [
    {
      id: "1",
      name: "HTML",
      img: "./img/frontend/html.png",
    },
    {
      id: "2",
      name: "CSS",
      img: "./img/frontend/css.png",
    },
    {
      id: "3",
      name: "Javascript",
      img: "./img/frontend/javascript.png",
    },
    {
      id: "4",
      name: "React",
      img: "./img/frontend/react.png",
    },
    {
      id: "5",
      name: "Next.js",
      img: "./img/frontend/nextjs.png",
    },
    {
      id: "6",
      name: "Tailwind",
      img: "./img/frontend/tailwind.png",
    },
  ];
  const backend = [
    {
      id: "1",
      name: "Node.js",
      img: "./img/backend/node.png",
    },
    {
      id: "2",
      name: "Express.js",
      img: "./img/backend/express.png",
    },
    {
      id: "3",
      name: "MySQL",
      img: "./img/backend/mysql.png",
    },

  ];
  const tools = [
    {
      id: "1",
      name: "Github",
      img: "./img/tools/github.png",
    },
    {
      id: "2",
      name: "Git",
      img: "./img/tools/git.png",
    },
    {
      id: "3",
      name: "Postman",
      img: "./img/tools/postman.png",
    },
  ];
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(200px)",
    config: { tension: 280, friction: 60 },
  });
  const underprops = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(200px)",
    config: { tension: 280, friction: 60 },
  });
  const leftprops = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-200px)",
    config: { tension: 280, friction: 60 },
  });
  const rightprops = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(200px)",
    config: { tension: 280, friction: 60 },
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="w-full h-[1300px] flex justify-center items-center skill-bg " id="skill">
      <animated.div style={props} ref={ref}>
      <div className="  mx-auto grid grid-cols-2 gap-5 ">
        <div className="col-span-2 sm:col-span-1 ">
          <div className="w-full flex justify-center ">
            <h1 className="text-[36px]">Frontend</h1>
          </div>
          <animated.div style={leftprops} ref={ref}>
          <div className="grid grid-cols-3 gap-5 mx-auto mt-10  p-5">
            {frontend.map((fend, index) => {
              return (
                <div className="w-[150px] h-[150px] duration-300 hover:scale-110 border-2 border-blue-900 col-span-1 flex justify-center mx-auto rounded-xl shadow-md bg-violet-500">
                  <div className="w-full h-full  "  key={index}>
                    <img
                      src={fend.img}
                      alt=""
                      className="w-[100px] h-[100px] mx-auto "
                    />
                    <p className="text-center text-[24px] font-bold text-white">
                      {fend.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </animated.div>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <div className="w-full flex justify-center">
            <h1 className="text-[36px]">Backend</h1>
          </div>
          <animated.div style={rightprops} ref={ref}>
          <div className="grid grid-cols-3 gap-5 mx-auto mt-10  p-5 ">
            {backend.map((bend, index) => {
              return (
                <div className="w-[150px] h-[150px] duration-75 hover:scale-110 border-2 border-blue-900 col-span-1 flex justify-center mx-auto rounded-xl shadow-md bg-violet-500">
                  <div className="w-full h-full"  key={index}>
                    <img
                      src={bend.img}
                      alt=""
                      className="w-[100px] h-[100px] mx-auto"
                    />
                    <p className="text-center text-[24px] font-bold text-white">
                      {bend.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </animated.div>
        </div>

        <div className="col-span-2 mx-auto">
          <div className="w-full flex justify-center">
            <h1 className="text-[36px]">Tools</h1>
          </div>
          <animated.div style={underprops} ref={ref}>
          <div className="grid grid-cols-3 gap-5 mx-auto mt-10  p-5">
            {tools.map((tool, index) => {
              return (
                <div className="w-[150px] h-[150px] duration-75 hover:scale-110 border-2 border-blue-900 col-span-1 flex justify-center mx-auto rounded-xl shadow-md bg-violet-500">
                  <div className="w-full h-full " >

                    <img
                      src={tool.img}
                      alt=""
                      className="w-[100px] h-[100px] mx-auto "
                    />
                    <p className="text-center text-[24px] font-bold text-white">
                      {tool.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </animated.div>
        </div>
      </div>
      </animated.div>
    </div>
  );
}

export default Skill;
