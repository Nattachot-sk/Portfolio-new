import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gototop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Navbarspring = useSpring({
    from: { translateY: -300 },
    to: { translateY: 0 },
    config: { tension: 280, friction: 50 },
  });

  return (
    <>

      <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
        <div className="md:flex md:justify-between md:items-center mt-5 px-4 md:px-10">
          <div className="w-full h-full flex justify-start items-center">
            <button onClick={gototop} className="mx-auto">
              <img
                className="md:w-24 md:h-24 lg:w-20 lg:h-20 w-16 h-16 md:block hidden"
                src="/img/logo.png"
                alt="Logo"
              />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className=" focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:flex  md:items-center md:justify-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex  gap-5 md:flex-row md:justify-center md:items-center font-bold ">
              <li className="md:mr-10 mb-2 md:mb-0 hover:-translate-y-2 duration-300">
                <a
                  href="#hero"
                  className="hover:text-indigo-600 text-[16px] md:text-[26px] under"
                >
                  Home
                </a>
              </li>
              <li className="md:mr-10 mb-2 md:mb-0 hover:-translate-y-2 duration-300">
                <a
                  href="#about"
                  className="hover:text-indigo-600 text-[16px] md:text-[26px] under"
                >
                  About
                </a>
              </li>
              <li className="md:mr-10 mb-2 md:mb-0 hover:-translate-y-2 duration-300">
                <a
                  href="#skill"
                  className="hover:text-indigo-600 text-[16px] md:text-[26px] under"
                >
                  Skill
                </a>
              </li>
              <li className="md:mr-10 mb-2 md:mb-0 hover:-translate-y-2 duration-300">
                <a
                  href="#mywork"
                  className="hover:text-indigo-600 text-[16px] md:text-[26px] under"
                >
                  Work
                </a>
              </li>
              <li className="hover:-translate-y-2 duration-300">
                <a
                  href="#contact"
                  className="hover:text-indigo-600 text-[16px] md:text-[26px] under"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default Navbar;
