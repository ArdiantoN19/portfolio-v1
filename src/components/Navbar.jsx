import React, { useState, useEffect } from "react";
import { links } from "../utils/config";

const Navbar = () => {
  const [top, setTop] = useState(true);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTop(false);
      } else {
        setTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hamburgerOnHandler = () => {
    setHamburger((state) => !state);
  };

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
        top ? "" : "navbar-fixed"
      }`}
    >
      <div className="container lg:px-20">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-xl text-primary block py-4"
            >
              Ardiantonugroho
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              type="button"
              className={`${hamburger ? "hamburger-active" : ""} lg:hidden`}
              onClick={hamburgerOnHandler}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              className={`${
                hamburger ? "scale-100" : "scale-0 lg:scale-100"
              } absolute py-4 bg-navy bg-opacity-90 shadow shadow-slate-700 rounded max-w-[210px] w-full right-4 top-full transition-all duration-500 origin-top-right md:max-w-[240px] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                {links.map(({ href, text }, index) => (
                  <li className="group" key={index}>
                    <a
                      href={href}
                      className="text-base text-light py-2 mx-8  flex group-hover:text-primary capitalize font-fira lg:mx-4 lg:text-sm"
                    >
                      <span className="text-primary mr-1">0{index + 1}.</span>{" "}
                      {text}
                    </a>
                  </li>
                ))}
                <li className="my-5 ml-5 lg:my-0 lg:ml-0 lg:py-2">
                  <a
                    href="#"
                    className="ml-2 px-5 py-[.65rem] border border-primary rounded text-primary lg:text-sm hover:bg-primary hover:bg-opacity-10"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
