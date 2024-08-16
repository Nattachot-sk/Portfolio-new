import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLine } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="w-full h-[950px]  flex about-bg " id="about">
      <div className="my-auto mx-auto w-[1200px] h-[650px] bg-[#0f172a] rounded-xl shadow-md  ">
        <div className="block sm:flex text-white">
          <div className="block sm:flex-1">
            <h1 className="text-center font-extrabold text-[24px] sm:text-[42px] underline">
              About Me
            </h1>
            <img src="./gif/coding.gif" alt="" className="sm:size-full w-[100px] h-[100px] flex justify-center mx-auto"/>
          </div>
          <div className="flex-1">
            <div className="flex-col justify-center text-[14px] sm:text-[24px] sm:mt-20 mb-10 pl-5">
              <p>Name : Natthachot Sankhum</p>
              <p>Nick name : Guy</p>
              <p>Age : 23</p>
              <p>Birtday : September 19/09/2000</p>
            </div>
            <div className="mb-10 text-[14px] sm:text-[18px] indent-8 pl-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                vero placeat sit eos quam accusamus exercitationem natus
                pariatur, mollitia qui similique, modi voluptatum nulla corrupti
                adipisci esse repudiandae. Facilis magnam delectus suscipit
                dolorem exercitationem unde quibusdam commodi, veritatis,
                voluptates dignissimos eligendi? Aut quidem placeat molestias id
                exercitationem asperiores corporis cumque.
              </p>
            </div>
            <div className="flex-col">
              <div className="w-full flex  pl-10">
                <div className="w-[40px] h-[40px] rounded-full bg-white relative mb-5">
                  <p className="text-indigo-700  text-[20px] absolute left-[10px] top-[4px]">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </p>
                </div>
                <div className="relative left-10">
                  <h1 className="font-bold text-[20px]">
                    natthachot.ntc19@gmail.com
                  </h1>
                </div>
              </div>
              <div className="w-full flex pl-10">
                <div className="w-[40px] h-[40px] rounded-full bg-white relative mb-5">
                  <p className="text-indigo-700 text-[20px] absolute left-[10px] top-[4px]  ">
                    <FontAwesomeIcon icon={faPhone} />
                  </p>
                </div>
                <div className="relative left-10">
                  <h1 className="font-bold text-[20px]">097-260-XXXX</h1>
                </div>
              </div>
              <div className="w-full flex pl-10">
                <div className="w-[40px] h-[40px] rounded-full bg-white relative mb-5">
                  <p className="text-indigo-700 text-[20px] absolute left-[10px] top-[4px] ">
                    <FontAwesomeIcon icon={faLine} />
                  </p>
                </div>
                <div className="relative left-10">
                  <h1 className="font-bold text-[20px]">097-260-XXXX</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
