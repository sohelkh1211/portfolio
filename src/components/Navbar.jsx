import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Resume from '../assets/Resume.pdf'
import { TabTitle } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
      <nav className="flex items-center z-20 fixed top-5 px-6 py-5 w-full mx-auto max-w-6xl">
        <div className="flex border shadow-2xl lg:right-60 lg:left-60 justify-between rounded-xl mx-auto lg:md:sm:w-[550px] items-center fixed px-6 py-3 md:space-x-14 lg:space-x-16 xl:space-x-20 md:left-30 md:right-30 sm:left-20 sm:right-20 xs:left-10 xs:right-10 xs:px-6 bg-slate-50">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              window.scrollTo(0, 0);
              setActive("");
            }}
          >
            <p id='nav-sohel' className="text-[18px] font-extrabold font-diphylleia bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
              Sohel
            </p>
          </Link>
          <ul className="list-none hidden justify-between gap-4 sm:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-green-600" : "text-black-100"
                  } cursor-pointer font-sans text-[18px] hover:text-green-600 hover:scale-110`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li className={`${active === 'resume' ? 'text-green-600' : 'text-black-100'} cursor-pointer hover:text-green-600 hover:scale-110 text-[18px]`}>
              <a href={Resume} target="_blank" rel="noopener noreferrer" title="Sohel Resume">
                resume
              </a>
            </li>
          </ul>
          <button
            className="sm:hidden md:hidden lg:hidden group relative"
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`${toggle && "-rotate-[45deg] -translate-y-[1px]"
                } flex h-[20px] w-[20px] cursor-pointer origin-center transform flex-col justify-between transition-all duration-300`}
            >
              <div
                className={`${toggle && "-rotate-90"
                  } h-[2px] w-1/2 origin-right transform rounded bg-purple-500 transition-all delay-75 duration-300 group-focus:h-[1px]`}
              ></div>
              <div
                className={`${toggle ? "h-[2px]" : "h-[1px]"
                  } rounded bg-purple-500`}
              ></div>
              <div
                className={`${toggle && "-rotate-90 translate-y-[1px]"
                  } h-[2px] w-1/2 origin-left transform self-end rounded bg-purple-500 transition-all delay-75 duration-300`}
              ></div>
            </div>
          </button>
          <div
            className={`${toggle ? "flex slide-down" : "hidden"
              } absolute top-[65px] right-0 z-10 border bg-white w-full h-auto rounded-2xl flex-col sm:hidden`}
          >
            <ul className={`list-none flex flex-col justify-between gap-4 px-4 py-3`}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-green-600" : "text-black-100"
                    } cursor-pointer font-sans text-[18px] hover:text-green-600`}
                  onClick={() => {
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className={`${active === 'resume' ? 'text-green-600' : 'text-black-100'} cursor-pointer hover:text-green-600 hover:scale-110 text-[18px]`}>
                <a href={Resume} target="_blank" rel="noopener noreferrer" title="Sohel Resume">
                  resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;