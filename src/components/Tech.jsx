import React from "react";
import { technologies } from '../constants'
import { TabTitle } from "../constants";
import { useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const tech = () => {
    const [current, setCurrent] = useState(0);
    const size = technologies.length;

    const nextSlide = () => {
        setCurrent(current === size - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? size - 1 : current - 1);
    };

    if (!Array.isArray(technologies) || technologies.length <= 0) {
        return null;
    }

    return (
        <>
            <TabTitle newtitle="Tech & Tools I've used" />
            <div className="relative top-[100px] md:w-[40%] lg:ml-[34%] md:ml-[28%] sm:ml-[20%] xs:ml-[2.2%] border-none border-blue-400 justify-center">
                <p className="text-[50px] font-bold pl-[15%] text-transparent bg-clip-text bg-gradient-to-br from-[#F6EA41] to-[#f940cb]">
                    Tech-Stack
                </p>
            </div>
            <div className="relative flex top-[120px] lg:w-[45%] md:w-[50%] sm:w-[60%] xs:w-[90%] xs:ml-[10%] sm:mx-auto border-none border-gray-600">
                <p className="tech-font lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[15px]">Throughout my educational journey 🎓, I've used variety of tools that have enriched my learning experience 👨‍💻.</p>
            </div>
            <div className="relative top-[145px] flex flex-row lg:w-[40%] md:w-[52%] sm:w-[62%] xs:w-[82%] lg:ml-[30%] md:ml-[25%] sm:ml-[20%] xs:ml-[10%] pl-[2%] sm:py-3 xs:pb-4 slider border-none border-blue-700 rounded-xl">
                {technologies.map((technology, index) => (
                    <div className='relative flex flex-row border-none border-green-400' key={index}>
                        {index === current && (
                            <>
                                <img src={technology.icon} className="lg:w-[128px] lg:h-[128px] md:w-[100px] sm:w-[90px] xs:w-[60px] md:h-[100px] sm:h-[90px] xs:h-[60px] sm:mr-9 xs:mr-4 sm:mt-0 xs:mt-4" />
                                <div className="relative flex flex-wrap mt-[4%] sm:mr-0 xs:mr-2 border-none border-red-500 w-[280px]">
                                    <h1 className="lg:text-[22px] md:text-[20px] sm:text-[18px] xs:text-[17px] lg:font-normal xs:font-semibold text-white fitness">{technology.name}</h1>
                                    <p className="lg:text-[16px] xs:text-[14px] text-white">{technology.about}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            {/* <div className="relative w-full lg:top-[78px] md:top-[84px] sm:top-[88px] border border-red-700"></div> */}
            <ArrowCircleLeftIcon fontSize="large" onClick={prevSlide} className="relative lg:ml-[25%] md:ml-[18%] sm:ml-[12%] xs:ml-[78%] lg:top-[60px] md:top-[66px] sm:top-[70px] xs:top-[150px] border-none border-green-800 cursor-pointer" />
            <ArrowCircleRightIcon fontSize="large" onClick={nextSlide} className="relative lg:ml-[44.6%] md:ml-[57%] sm:ml-[67%] xs:ml-[87%] lg:top-[59.4px] md:top-[66px] sm:top-[70px] xs:top-[114px] cursor-pointer" />
            <div className="relative lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[90%] sm:top-[160px] xs:top-[140px] lg:ml-[25%] md:ml-[20%] sm:ml-[16%] xs:ml-[6%] lg:pl-[6%] md:pl-[8%] sm:pl-[5%] xs:pl-[5%] flex flex-row flex-wrap sm:gap-x-12 xs:gap-x-6 gap-y-6 border-none border-green-900 justify-start">
                {technologies.map((technology) => (
                    <div className="sm:w-[14.55%] xs:w-[18%] pb-2 border-none rounded-lg border-red-900 overflow-hidden tech ease-in-out cursor-pointer" onClick={() => setCurrent(technologies.indexOf(technology))} key={technology.name}>
                        <img src={technology.icon} className="w-[70%] mx-auto mt-3 hover:scale-[1.1] duration-1000" />
                    </div>
                ))}
            </div>


        </>
    )
}

export default tech;