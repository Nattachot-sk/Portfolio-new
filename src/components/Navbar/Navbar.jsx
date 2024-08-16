import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    }
     else {
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

  return (
    <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="flex justify-around items-center mt-5">
        <div className="w-full h-full flex">
          <button onClick={gototop} className="mx-auto">
            <img className="w-24 h-24 " src="/img/logo.png" alt="Logo" />
          </button>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <ul className="flex justify-center items-center font-bold font-sans">
            <li className="mr-10 hover:-translate-y-2 duration-300">
              <a href="#hero" className="hover:text-indigo-600 text-[26px] under">
                Home
              </a>
            </li>
            <li className="mr-10 hover:-translate-y-2 duration-300">
              <a href="#about" className="hover:text-indigo-600 text-[26px] under">
                About
              </a>
            </li>
            <li className="mr-10 hover:-translate-y-2 duration-300">
              <a href="#skill" className="hover:text-indigo-600 text-[26px] under">
                Skill
              </a>
            </li>
            <li className="mr-10 hover:-translate-y-2 duration-300">
              <a href="#mywork" className="hover:text-indigo-600 text-[26px] under">
                Work
              </a>
            </li>
            <li className="mr-10 hover:-translate-y-2 duration-300">
              <a href="#contact" className="hover:text-indigo-600 text-[26px] under">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
