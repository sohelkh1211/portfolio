import React from "react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { experience } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TabTitle } from "../constants";

const ExperienceCard = ({ experience }) => {
    let marginLeft1 = { marginLeft: '190px' };
    let marginRight1 = { marginRight: '190px' };
    let marginLeft2 = { marginLeft: '80px' };
    let marginRight2 = { marginRight: '80px' };
    let width1 = { width: '270px' };

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const [view, setView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 800 && window.scrollY <= 2100) {
                setView(true);
            }
            else {
                setView(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    }, []);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const size = windowSize[0];

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ hover: 'scale:1.2', width: '350px', ...{ ...size <= 580 ? width1 : '' }, display: 'flex', ... { ...size >= 1280 ? marginLeft1 : marginLeft2 }, ... { ...size >= 1280 ? marginRight1 : marginRight2 } }}
            // contentArrowStyle={{ borderRight: "7px solid green" }}
            iconStyle={{ display: 'none' }}
        >
            <div>
                <h3 className={`${experience.title === 'Python Programming' ? 'text-blue-400' : ''} ${experience.title === 'Web Dev' ? 'text-purple-950' : ''} ${experience.title === 'Machine learning' ? 'text-green-500' : ''} ${experience.title === 'Data Science' ? 'text-purple-400' : ''} text-[18px] text-center font-bold`}>{experience.title}</h3>
                <ul className="mt-4 list-disc px-2">
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-[14px] vertical_content pl-1'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
                <motion.div className="mt-2 justify-between sm:space-x-3 xs:space-x-2">
                    {experience.buttons.map((button, index) => (
                        <motion.button
                            key={`experience-button-${index}`}
                            initial={{ opacity: 0, translateX: -100 }}
                            animate={{ opacity: view ? 1 : 0, translateX: view ? 0 : -100 }}
                            transition={{
                                type: "spring",
                                duration: 0.7,
                                delay: index
                            }}
                            className={`${experience.title === 'Python Programming' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[14px] xs:text-[12px] bg-gradient-to-r from-[#83EAF1] to-[#60A5FA] hover:shadow-blue-400 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} ${experience.title === 'Web Dev' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[14px] xs:text-[12px] bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] hover:shadow-[#AD1DEB] hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} ${experience.title === 'Machine learning' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[12px] xs:text-[10px] bg-gradient-to-tr from-[#20DED3] to-[#F6FBA2] hover:shadow-emerald-400 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} ${experience.title === 'Data Science' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[14px] xs:text-[12px] bg-gradient-to-tr from-[#B0F3F1] to-[#FFCFDF] hover:shadow-[#B0F3F1] hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} `}>{button}</motion.button>
                    ))}
                </motion.div>
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    const [view, setView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && window.scrollY < 800) {
                setView(true);
            }
            else {
                setView(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <TabTitle newtitle="Sohel Khan | Portfolio" />
            <div className="absolute flex flex-col sm:flex lg:top-[520px] xs:top-[550px] lg:mt-6 sm:left-[40%] xs:left-[23%] items-center mx-auto">
                <Tilt>
                    {/* Specify view only for animate  */}
                    {/* initial means origin of animation and animate means the end position of animation */}
                    {/* Note :- view ? value1: value2. Here, the value2 should be the value of initial. E.g :- value of opacity in initial is 0. Therefore, in animate value2 of opacity should be 0. */}
                    <motion.div className="flex flex-col m-4 p-6 w-40 h-40 rounded-xl fun-gradient1"
                        initial={{ opacity: 0, translateX: -1000 }}
                        animate={{ opacity: view ? 1 : 0, translateX: view ? 0 : -1000 }}
                        transition={{
                            type: "spring",
                            duration: 4,
                            delay: 0
                        }}
                    >
                        <motion.div className="container flex m-0.8 w-11 h-11 items-center justify-center mx-auto"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: view ? 1 : 0, opacity: view ? 1 : 0 }}
                            transition={{
                                type: "spring",
                                bounce: 0.4,
                                duration: 3,
                                delay: 0.6,
                                ease: "easeOut"
                            }}
                        >
                            <h1 className="font-bold text-[40px] stylish_number">04</h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: view ? 1 : 0, rotate: view ? 360 : 0, }} transition={{
                            type: "spring",
                            duration: view ? 2 : 0,
                            delay: view ? 0.8 : 0
                        }} className="container flex w-22 h-18 mx-auto mt-7">
                            <p className="font-bold text-[13px] text-white">Years of learning Experience</p>
                        </motion.div>
                    </motion.div>

                </Tilt>
            </div>
            <motion.div initial={{ opacity: 0, translateY: -500 }} animate={{ opacity: view ? 1 : 0, translateY: view ? 0 : -500 }} transition={{ type: "spring", duration: view ? 2 : 0, delay: view ? 0.8 : 0 }} className="container absolute top-[780px] mx-auto xs:left-[0.1%] xs:right-[1%] flex flex-row items-center justify-center">
                <p className="lg:text-[18px] md:sm:text-[15px] xs:text-[14px] font-semibold md:max-w-[600px] sm:max-w-[500px] xs:max-w-[550px]">During this 4 years of learning I've acquired comprehensive set of skills and knowledge. I have honed my ability to analyze complex data sets, develop predictive models, and deploy them effectively & I also developed strong problem-solving skills. </p>
            </motion.div>
            <div className="container relative top-[950px] xs:right-[60px] sm:right-[15px] flex flex-col mx-auto">
                <VerticalTimeline layout="2-columns" lineColor="linear-gradient(to bottom, #60A5FA 5%, #3B0764 , #38A169 50%, #9F7AEA)">
                    {experience.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    )
                    )}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;