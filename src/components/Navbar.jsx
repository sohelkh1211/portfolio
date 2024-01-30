import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import Resume from '../assets/Resume.pdf';
import { animate, motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { TabTitle } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center z-20 fixed top-5 px-6 py-5 w-full mx-auto max-w-6xl">
      <motion.div className="flex border shadow-2xl lg:right-60 lg:left-60 justify-between rounded-xl mx-auto lg:md:sm:w-[550px] items-center fixed px-6 py-3 md:space-x-14 lg:space-x-16 xl:space-x-20 md:left-30 md:right-30 sm:left-20 sm:right-20 xs:left-10 xs:right-10 xs:px-6 bg-slate-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 80, duration: 10, delay: 0.5 }}
      >
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            window.scrollTo(0, 0);
            if(toggle){
              setToggle(!toggle);
            }
            setActive("");
          }}
        >
          <motion.p id='nav-sohel' className="text-[18px] font-extrabold font-diphylleia bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.14, transition: { duration: 0.3 } }}
            variants={fadeIn("right", "spring", 1, 2.5)}
            initial="hidden"
            animate="show"
          >
            Sohel
          </motion.p>
        </Link>
        <motion.ul className="list-none hidden justify-between gap-4 sm:flex"
          initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0.6, duration: 1.8, delay: 1.5 }}>
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
        </motion.ul>
        <motion.button
          initial={{ rotate: 0 }}
          animate={{ rotate: 180 }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
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
        </motion.button>
        <motion.div
          className={`flex absolute top-[65px] right-0 z-10 border bg-white w-full h-auto rounded-2xl flex-col sm:hidden`}
          animate = { toggle ? "show_1" : "hide"}
          variants={{
            hide: {
              x: -100,
              opacity: 0,
              transition: {
                type: "spring",
                duration: 1,
                delay: 0.2,
              }
            },
            show_1:{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.5,
                delay: 0.2,
              }
            }
          }}
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
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;