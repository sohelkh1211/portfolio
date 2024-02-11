import React, { useEffect } from "react";
import { technologies } from '../constants'
import { TabTitle } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Footer from "./Footer";
import { TypeAnimation } from "react-type-animation";

const tech = () => {
    const [current, setCurrent] = useState(0);
    const size = technologies.length;
    const [show,setShow] = useState(false);
    const text = "Tech-Stack";
    const text_split = text.split("");

    const nextSlide = () => {
        setCurrent(current === size - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? size - 1 : current - 1);
    };

    if (!Array.isArray(technologies) || technologies.length <= 0) {
        return null;
    }

    const useMediaQuery = (query) => { // Custom hook to check whether a given media query matches the current viewport size or window size.
        const [matches, setMatches] = useState(false); // State variable to track whether the provided query matches with current window size.
        // used useEffect hook which executes whenever component mounts or query changes or window size changes
        useEffect(() => {
            const media = window.matchMedia(query); // Create a MediaQueryList object using window.matchMedia() method based on the provided query.
            // MediaQueryList: {media: '(min-width: 250px)', matches: true, onchange: null}
            // console.log(media);

            if (media.matches !== matches) { // Update the matches state if the initial match state doesn't match the provided media query(props).
                setMatches(media.matches);
            }

            const listener = () => { // Callback function to update the matches state when the media query result changes
                setMatches(media.matches);
            }

            media.addEventListener("change", listener); // Add event listener for media query changes. It triggers whenever there is change.

            return () => { // Cleanup function to remove event listener when the component unmounts or when the query changes
                media.removeEventListener("change", listener);
            };
        }, [matches, query]); // Dependencies include matches state and query string

        return matches; // Return the current matches state
    }

    const isLarge = useMediaQuery("(min-width: 1024px)");
    const isMedium = useMediaQuery("(min-width: 768px)");
    const isSmall = useMediaQuery("(min-width: 650px)");
    // console.log(isSmall);
    const isxsmall = useMediaQuery("(min-width: 250px)");
    // console.log(isxsmall);

    return (
        <>
            <TabTitle newtitle="Tech & Tools I've used" />
            <div className="relative top-[100px] md:w-[40%] lg:ml-[34%] md:ml-[28%] sm:ml-[20%] xs:ml-[2.2%] border-none border-blue-400 justify-center">
                <motion.span className="flex overflow-visible sm:ml-[15%] xs:ml-[13%]" >
                    {text_split.map((ele, l) => (
                        <motion.p key={l} initial={{ opacity: 0, rotateY: -180 }} animate={{ opacity: 1, rotateY: 0 }} transition={{ duration: 2, delay: (l + 1) * 0.2 }} className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F6EA41] to-[#f940cb]">
                            {ele}
                        </motion.p>
                    ))}
                </motion.span>
            </div>
            <div className="relative flex top-[120px] lg:w-[45%] md:w-[50%] sm:w-[60%] xs:w-[80%] xs:ml-[12%] sm:mx-auto border-none border-gray-600">
                <TypeAnimation sequence={[`Throughout my educational journey 🎓, I've used variety of tools that have enriched my learning experience 👨‍💻.`]} speed={75} cursor={false} className="tech-font lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[15px]" />
            </div>
            <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: isLarge ? "40%" : isMedium ? "52%" : isSmall ? "62%" : isxsmall ? "82%" : "100" }} transition={{ duration: 2.5, delay: 0.2 }} className="relative top-[145px] flex flex-row lg:w-[40%] md:w-[52%] sm:w-[62%] xs:w-[82%] lg:ml-[30%] md:ml-[25%] sm:ml-[20%] xs:ml-[10%] pl-[2%] sm:py-3 xs:pb-4 slider border-none border-blue-700 rounded-xl">
                {technologies.map((technology, index) => (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 2 }} className='relative flex flex-row border-none border-green-400' key={index}>
                        {index === current && (
                            <>
                                <img src={technology.icon} className="lg:w-[128px] lg:h-[128px] md:w-[100px] sm:w-[90px] xs:w-[60px] md:h-[100px] sm:h-[90px] xs:h-[60px] sm:mr-9 xs:mr-4 sm:mt-0 xs:mt-4" />
                                <div className="relative flex flex-wrap mt-[4%] sm:mr-0 xs:mr-2 border-none border-red-500 w-[280px]">
                                    <h1 className="lg:text-[22px] md:text-[20px] sm:text-[18px] xs:text-[17px] lg:font-normal xs:font-semibold text-white fitness">{technology.name}</h1>
                                    <p className="lg:text-[16px] xs:text-[14px] text-white">{technology.about}</p>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </motion.div>
            {/* <div className="relative w-full lg:top-[78px] md:top-[84px] sm:top-[88px] border border-red-700"></div> */}
            <motion.div initial={{ opacity: 0, translateX: -200 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: "spring", duration: 1, delay: 1.2 }} >
                <ArrowCircleLeftIcon fontSize="large" onClick={prevSlide} className="relative lg:ml-[25%] md:ml-[18%] sm:ml-[12%] xs:ml-[78%] lg:top-[60px] md:top-[66px] sm:top-[70px] xs:top-[150px] fade-left border-none border-green-800 cursor-pointer" />
            </motion.div>
            <motion.div initial={{ opacity: 0, translateX: 200 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: "spring", duration: 1, delay: 1.2 }}>
                <ArrowCircleRightIcon fontSize="large" onClick={nextSlide} className="relative lg:ml-[72%] md:ml-[79.8%] sm:ml-[85%] xs:ml-[87%] lg:top-[23.5px] md:top-[29px] sm:top-[33.5px] xs:top-[114px] cursor-pointer" />
            </motion.div>
            <div className="relative lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[90%] sm:top-[160px] xs:top-[140px] lg:ml-[25%] md:ml-[20%] sm:ml-[16%] xs:ml-[6%] lg:pl-[6%] md:pl-[8%] sm:pl-[5%] xs:pl-[5%] flex flex-row flex-wrap sm:gap-x-12 xs:gap-x-6 gap-y-6 border-none border-green-900 justify-start">
                {technologies.map((technology, d) => (
                    <motion.div initial={{ opacity: 0, rotateY: 360 }} animate={{ opacity: 1, rotateY: 0 }} transition={{ type: "spring", duration: 1, delay: (d+1)*0.45 }} className="sm:w-[14.55%] xs:w-[18%] pb-2 border-none rounded-lg border-red-900 overflow-hidden tech ease-in-out cursor-pointer" onClick={() => setCurrent(technologies.indexOf(technology))} key={technology.name}>
                        <img src={technology.icon} className="w-[70%] mx-auto mt-3 hover:scale-[1.1] transition ease-out duration-1000" />
                    </motion.div>
                ))}
            </div>
            <Footer space_above={180} />
        </>
    )
}

export default tech;