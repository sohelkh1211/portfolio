import React from "react";
import { useState, useEffect } from "react";
import { color, motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { experience } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { lazy } from "react";
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
            contentStyle={{ hover: 'color:red', width: '350px', ...{ ...size <= 580 ? width1 : '' }, display: 'flex', ... { ...size >= 1280 ? marginLeft1 : marginLeft2 }, ... { ...size >= 1280 ? marginRight1 : marginRight2 } }}
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
                <div className="mt-2 justify-between sm:space-x-3 xs:space-x-2">
                    {experience.buttons.map((button, index) => (
                        <button
                            key={`experience-button-${index}`}
                            className={`${experience.title === 'Python Programming' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[14px] xs:text-[12px] bg-gradient-to-r from-[#83EAF1] to-[#60A5FA] hover:shadow-blue-400 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} ${experience.title === 'Web Dev' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[14px] xs:text-[12px] bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] hover:shadow-[#AD1DEB] hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} ${experience.title === 'Machine learning' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[12px] xs:text-[10px] bg-gradient-to-tr from-[#20DED3] to-[#F6FBA2] hover:shadow-emerald-400 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} ${experience.title === 'Data Science' ? 'relative rounded-full sm:px-3 xs:py-0.5 xs:px-2 sm:text-[14px] xs:text-[12px] bg-gradient-to-tr from-[#B0F3F1] to-[#FFCFDF] hover:shadow-[#B0F3F1] hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]' : ''} `}>{button}</button>
                    ))}
                </div>
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

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
        <>
            <TabTitle newtitle="Sohel Khan | Portfolio" />
            <div className="absolute flex flex-col sm:flex top-[550px] lg:mt-6 sm:left-[40%] xs:left-[30%] items-center mx-auto">
                <Tilt>
                    <div className="flex flex-col m-4 p-6 w-40 h-40 rounded-xl fun-gradient1">
                        <div className="container flex m-0.8 w-11 h-11 items-center justify-center mx-auto">
                            <h1 className="font-bold text-[40px] stylish_number">04</h1>
                        </div>
                        <div className="container flex w-22 h-18 mx-auto mt-7">
                            <p className="font-bold text-[13px] text-white">Years of learning Experience</p>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className="container absolute top-[780px] mx-auto xs:left-[0.1%] xs:right-[1%] flex flex-row items-center justify-center">
                <p className="lg:text-[18px] md:sm:text-[15px] xs:text-[14px] font-semibold md:max-w-[600px] sm:max-w-[500px] xs:max-w-[550px]">During this 4 years of learning I've acquired comprehensive set of skills and knowledge. I have honed my ability to analyze complex data sets, develop predictive models, and deploy them effectively & I also developed strong problem-solving skills. </p>
            </div>
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