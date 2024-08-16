import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faComment,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLine,
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div
      className="w-full sm:h-[950px] h-auto flex justify-center items-center contact-bg "
      id="contact"
    >
      <div className="w-[1200px] sm:h-[650px] bg-amber-500 shadow-lg">
        <div className="sm:flex w-full h-full">
          <div className="flex-1 bg-white">
            <div className="flex justify-center items-center">
              <h1 className="text-[36px]">Contact Us</h1>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-center items-center">
              <img src="./gif/contact.gif" alt="" className="w-[350px]" />
            </div>
            <div className="flex justify-center items-center">
              <ul>
                <li>
                  {" "}
                  <div className="w-full flex">
                    <div className="w-[30px] h-[30px] rounded-full relative mb-3">
                      <p className="text-purple-400 text-[24px] absolute left-[10px] ">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </p>
                    </div>
                    <div className="relative left-8 top-2">
                      <h1 className="font-bold text-[18px]">
                        natthachot.ntc19@gmail.com
                      </h1>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="w-full flex">
                    <div className="w-[30px] h-[30px] rounded-full  relative mb-3">
                      <p className="text-purple-400 text-[24px] absolute left-[10px] ">
                        <FontAwesomeIcon icon={faPhone} />
                      </p>
                    </div>
                    <div className="relative left-8 top-2">
                      <h1 className="font-bold text-[18px]">097-260-XXXX</h1>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="w-full flex">
                    <div className="w-[30px] h-[30px] rounded-full   relative mb-3">
                      <p className="text-purple-400 text-[24px] absolute left-[10px] ">
                      <FontAwesomeIcon icon={faLocationDot} />
                      </p>
                    </div>
                    <div className="relative left-8 top-2">
                      <h1 className="font-bold text-[18px]">316 tha wung lopburi 15150</h1>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="mt-10" />
            <div className="flex justify-center items-center">
              <ul className="flex gap-5 mt-3 mb-2 sm:mb-0">
                <li className="w-[40px] h-[40px] flex justify-center items-center border-2 border-purple-500 rounded-full bg-purple-400 relative">
                  <a
                    href="https://www.facebook.com/profile.php?id=100008407035436"
                    className=" text-white text-[24px] "
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="w-[40px] h-[40px] flex justify-center items-center border-2 border-purple-500 rounded-full bg-purple-400 relative">
                  <a
                    href="https://www.instagram.com/ntc_sk/"
                    target="_blank"
                    className=" text-white text-[24px] "
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="w-[40px] h-[40px] flex justify-center items-center border-2 border-purple-500 rounded-full bg-purple-400 relative">
                  <a
                    href="https://github.com/ntc-dodo"
                    className=" text-white text-[24px] "
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="w-[40px] h-[40px] flex justify-center items-center border-2 border-purple-500 rounded-full bg-purple-400 relative">
                  <a
                    href="https://www.tiktok.com/@ntc_dodo"
                    className=" text-white text-[24px] "
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
                <li className="w-[40px] h-[40px] flex justify-center items-center border-2 border-purple-500 rounded-full bg-purple-400 relative">
                  <a
                    href="https://www.youtube.com/@115-lo9gf"
                    className=" text-white text-[24px] "
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-center mt-20">
              <form action="">
                <div className="relative mt-5 mb-5">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon icon={faUser} className="text-[24px] " />
                  </label>
                  <input
                    type="text"
                    className="w-[350px] h-[60px] rounded-xl px-12 border-2 border-purple-500 bg-white"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mt-5 mb-5">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[24px] "
                    />
                  </label>
                  <input
                    type="text"
                    className="w-[350px] h-[60px] rounded-xl px-12 border-2 border-purple-500 bg-white"
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="" className="absolute top-4 left-4">
                    <FontAwesomeIcon icon={faComment} className="text-[24px]" />
                  </label>
                  <textarea
                    type="textarea"
                    className="w-[350px] rounded-xl h-32 max-h-52 min-h-20 pt-4 px-12 border-2 border-purple-500 bg-white"
                    placeholder="Message"
                  />
                </div>
                <div>
                  <button
                    className="w-full h-10 bg-purple-400 mt-10 rounded-xl mb-5 sm:mb-0"
                    type="submit"
                  >
                    <span className="font-bold text-[20px] text-white ">
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
