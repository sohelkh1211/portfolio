import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'
import numpy from '../assets/numpy.png'
import pandas from '../assets/pandas.svg'
import materialui from '../assets/material-ui.png'
import rapid from '../assets/rapid-api.svg'
import tensor from '../assets/tensorflow.png'
import House from '../assets/House.png'
import Fitness from '../assets/Fitness_Exercise_App.png'
import Plant from '../assets/Plant.jpg'
import Portfolio from '../assets/Portfolio.png'
import { TabTitle } from '../constants'
import Footer from './Footer'
import { TypeAnimation } from 'react-type-animation'

const Work = () => {
    const text = "Projects";
    const text_split = text.split("");
    const ref1 = useRef(null); // To get referrence to Fitness Project div.
    const ref2 = useRef(null);

    const useInView = (ref) => {
        const [isIntersecting, setIsIntersecting] = useState(false); // Initialize state variable to track visibility
        // Create an IntersectionObserver object using useMemo to memoize it
        const observer = useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );
        // Observe the target element using useEffect
        useEffect(() => {
            // Since, we are using this function for multiple DOM element i.e div. Hence, we used current.
            observer.observe(ref.current);
            // Cleanup function to disconnect the observer when component unmounts or ref changes
            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const fade = (dir, view, x) => {
        return {
            hidden: {
                opacity: 0,
                translateY: dir === "up" ? -200 : dir === "down" ? 200 : 0,
                translateX: dir === "left" ? -200 : dir === "right" ? 200 : 0
            },
            visible: {
                opacity: view ? 1 : 0,
                translateY: dir === "up" ? view ? 0 : -200 : dir === "down" ? view ? 0 : 200 : 0,
                translateX: dir === "left" ? view ? 0 : -200 : dir === "right" ? view ? 0 : 200 : 0,
                transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: x,
                }
            }
        }
    }

    return (
        <>
            <TabTitle newtitle="Projects 💫" />
            <div className="relative flex top-[90px] xs:mx-auto w-fit h-fit border-none border-green-900">
                <motion.div className='flex overflow-hidden'>
                    {text_split.map((x, s) => (
                        <motion.p key={s} initial={{ opacity: 0, rotate: -55 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.8, delay: (s + 1) * 0.2 }} className="text-[50px] text-transparent bg-clip-text bg-gradient-to-tr from-[#B621FE] to-[#1FD1F9]">{x}</motion.p>
                    ))}
                </motion.div>
            </div>
            <div className="relative flex top-[115px] lg:w-[33%] md:w-[45%] sm:w-[55%] xs:w-[70%] xs:mx-auto border-none border-green-900">
                <TypeAnimation sequence={[`Here is the list 📃 of projects ✨ that I've built ⚒️ so far. Kindly take a look. Thank you 😊`]} cursor={false} speed={75} className="sm:text-[16px] tech-font xs:text-[14px]" />
            </div>
            <div ref={ref1} className="relative flex flex-row flex-wrap top-[165px] lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[80%] mx-auto shadow-md bg-gradient-to-br from-[#f9e5de] to-[#fedcfe] rounded-xl">
                <div className='sm:absolute xs:relative flex container1 sm:w-[34%] xs:w-[90%] md:h-[110px] mt-[20px] sm:ml-[3%] xs:mx-auto rounded-xl overflow-hidden cursor-pointer border-none border-black'>
                    <motion.img initial="hidden" animate="visible" variants={fade("left",isInView1, 0.4)} src={Fitness} className='xs:w-full rounded-xl child' />
                </div>
                <div className='relative flex items-center justify-between w-full mt-[20px] sm:ml-[40%] xs:ml-[5%] overflow-hidden border-none border-green-500'>
                    <motion.h1 initial="hidden" animate="visible" variants={fade("up",isInView1, 0.4)} className="font-bold fitness">Fitness Exercise App</motion.h1>
                    <motion.div initial="hidden" animate="visible" variants={fade("up",isInView1, 0.4)} className="flex gap-x-2 lg:mr-4 xs:mr-2 border-none border-violet-600">
                        <FontAwesomeIcon className='w-[24px] h-full text-xl border-none border-black cursor-pointer' icon={faReact} />
                        <svg initial={{ pathLength: 0, fill: "rgba(0,0,0,0)" }} animate={{ pathLength: 1, fill: "rgba(0,0,0,1)"}} className='w-[25px] border-none border-green-400 cursor-pointer' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                        </svg>
                        <img src={materialui} className='sm:hidden xs:w-[26px] xs:h-[24px] border-none border-black cursor-pointer' />
                        <img src={rapid} className='w-[25px] h-full border-none border-black fill-black cursor-pointer' />
                    </motion.div>
                </div>
                <p className="lg:text-[15px] md:text-[14px] sm:text-[13px] xs:text-[15px] sm:ml-[40%] sm:pb-[9%] xs:pb-3 xs:ml-[5%] mt-[2%] border-none border-blue-500 fitness-about">This is a dynamic web application which empower users on their fitness journeys.</p>
            </div>
            <div ref={ref2} className="relative flex flex-row flex-wrap top-[200px] lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[80%] mx-auto shadow-md bg-gradient-to-br from-[#f9e5de] to-[#fedcfe] rounded-xl">
                <div className='sm:absolute flex xs:relative container1 sm:w-[34%] md:h-[120px] xs:w-[90%] mt-[20px] sm:ml-[3%] xs:mx-auto border-none border-green-900 overflow-hidden rounded-xl cursor-pointer'>
                    <motion.img initial="hidden" animate="visible" variants={fade("right",isInView2, 0.4)} src={House} className='xs:w-full sm:h-full xs:h-[180px] rounded-xl child' />
                </div>
                <div className='relative flex items-center justify-between w-full h-fit mt-[20px] sm:ml-[40%] xs:ml-[5%] border-none border-green-500'>
                    <h1 className="font-bold fitness">House Price Prediction</h1>
                    <div className='flex flex-row gap-x-2 lg:mr-4 xs:mr-2 border-none border-violet-600'>
                        <FontAwesomeIcon icon={faPython} className='w-[20px] h-full text-xl border-none border-green-500 cursor-pointer' />
                        <img src={numpy} className='w-[22px] h-full border-none border-purple-800 cursor-pointer' />
                        <img src={pandas} className='w-[20.5px] h-full border-none border-purple-800 cursor-pointer' />
                    </div>
                </div>
                <p className="sm:pl-[40%] xs:pl-[5%] pt-[2%] md:pb-[5%] sm:pb-[8%] xs:pb-4 xs:pr-1 fitness-about lg:text-[15px] md:text-[14px] sm:text-[13px] xs:text-[15px]">An ML based project aims to predict the house price based on given features such as number of
                    bedrooms, age of the house, ocean_proximity etc.</p>
            </div>
            <div className="relative flex flex-row flex-wrap top-[235px] lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[80%] mx-auto shadow-md bg-gradient-to-br from-[#f9e5de] to-[#fedcfe] rounded-xl">
                <div className='sm:absolute xs:relative flex sm:w-[34%] lg:h-[110px] md:h-[100px] sm:h-[100px] xs-h-[70px] xs:w-[90%] mt-[20px] sm:ml-[3%] xs:mx-auto container1 rounded-xl overflow-hidden border-none border-pink-500 cursor-pointer'>
                    <img src={Plant} className='w-full object-cover rounded-xl child' />
                </div>
                <div className='relative flex flex-row w-full items-center justify-between mt-[20px] sm:ml-[40%] xs:ml-[5%] border-none border-green-600'>
                    <h1 className="font-bold fitness">Plant Disease Classification</h1>
                    <div className='flex flex-row lg:gap-x-2 xs:gap-x-1 lg:mr-4 xs:mr-2'>
                        <FontAwesomeIcon icon={faPython} className='lg:w-[22.5px] sm:w-[17px] xs:w-[22.5px] h-full border-none border-fuchsia-500 cursor-pointer' />
                        <FontAwesomeIcon className='lg:w-[24px] sm:w-[19px] xs:w-[24px] h-full text-xl border-none border-black cursor-pointer' icon={faReact} />
                        <img src={tensor} className='lg:w-[23px] lg:h-[23.5px] sm:w-[19px] sm:h-[19px] xs:w-[23px] xs:h-[23.5px] border-none border-fuchsia-500 cursor-pointer' />
                    </div>
                </div>
                <p className="sm:pl-[40%] xs:pl-[5%] pt-[2%] pb-[4%] lg:text-[15px] md:text-[14px] sm:text-[13px] xs:text-[15px] fitness-about">A deep learning based project which can accurately identify & classify diseases in plants using images of leaves of plant.</p>
            </div>
            <div className="relative flex flex-row flex-wrap top-[272px] lg:w-[50%] md:w-[60%] sm:w-[70%] xs:w-[80%] mb-[200px] mx-auto shadow-md bg-gradient-to-br from-[#f9e5de] to-[#fedcfe] rounded-xl">
                <div className='sm:absolute xs:relative flex container1 sm:w-[34%] sm:h-[110px] xs:w-[90%] xs:h-[180px] mt-[20px] sm:ml-[3%] xs:ml-[5%] rounded-xl overflow-hidden cursor-pointer'>
                    <img src={Portfolio} className='w-full object-cover child' />
                </div>
                <div className='relative flex flex-row items-center justify-between w-full mt-[20px] sm:ml-[40%] xs:ml-[5%] border-none border-sky-600'>
                    <h1 className="font-bold fitness">Portfolio</h1>
                    <div className='flex flex-row justify-between gap-x-2 sm:mr-4 xs:mr-2 border-none border-purple-800'>
                        <FontAwesomeIcon className='w-[24px] h-full border-none border-black text-xl cursor-pointer' icon={faReact} />
                        <FontAwesomeIcon className='w-[21px] h-full text-xl border-none border-black cursor-pointer' icon={faSquareJs} />
                        <svg className='w-[25px] border-none border-black cursor-pointer' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                        </svg>
                        <img src={materialui} className='w-[24px] h-[22px] cursor-pointer border-none border-emerald-700' />
                    </div>
                </div>
                <p className="sm:pl-[40%] xs:pl-[5%] pt-[2%] pb-[4%] lg:text-[15px] md:text-[14px] sm:text-[13px] xs:text-[15px] fitness-about">I have developed a dynamic, creative, and visually engaging portfolio, showcasing my proficiency in crafting innovative UI designs.</p>
            </div>
            {/* <div className='relative flex top-[100px] border'></div> */}
            <Footer space_above={120} />
        </>
    )
}

export default Work;