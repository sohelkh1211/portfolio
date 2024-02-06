import { useEffect, useState } from 'react';
import pic from '../assets/sohel.jpg'
import { TabTitle } from '../constants';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const text = "About ";
  const text_split = text.split("");

  const [visible,setVisible] = useState(false);

  const fade = ( direction, x, y ) => {
    return {
      hidden: {
        opacity: 0,
        translateY: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      },
      show: {
        opacity: 1,
        translateY: 0,
        transition: {
          duration: x,
          delay: y,
        }
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);


  return (
    <>
      <TabTitle newtitle="About Me" />
      <div className="relative flex top-20 w-full">
        <div className="flex flex-col lg:ml-[40%] md:ml-[32%] sm:ml-[30%] xs:ml-[15%] border-none border-green-800">
          <motion.div className='flex overflow-hidden'>
            {text_split.map((element, index) => (
              <motion.h1 key={index} initial = {{ opacity: 0, translateY: -100 }} animate = {{ opacity: 1, translateY: 0 }} transition={{ duration: 0.7, delay: index*0.1 }} className="flex sm:mr-[-66px] xs:mr-[-67px] sm:text-[55px] xs:text-[40px] fun-gradient pl-[24%]">{element}</motion.h1>
            ))}
          </motion.div>
          <motion.img initial = {{ opacity: 0, scale: 0.002 }} animate = {{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.2 }} className='mt-2 sm:w-[54%] sm:h-[60%] xs:w-[38%] xs:h-[60%] xs:ml-[25%] rounded-xl mx-auto' src={pic}></motion.img>
        </div>
        <div className='absolute flex flex-col xs:top-[200px] sm:top-[270px] sm:w-[35%] sm:h-[30%] xs:w-[35%] border-none border-green-900 lg:ml-[35.8%] md:ml-[34%] sm:ml-[38.5%] xs:ml-[32%]'>
          <TypeAnimation sequence={[`Sohel Khan`]} speed={{type: 'keyStrokeDelayInMs', value: 180}} cursor={false} className="md:text-[30px] sm:text-[25px] xs:text-[20px] lg:pl-[28.7%] md:pl-[21%] sm:pl-[9%] xs:pl-[10%]"/>
          {visible && <p className='pt-1 lg:pl-[34.5%] md:pl-[29%] sm:pl-[14%] xs:pl-[13.4%] xs:text-[14px] sm:text-[16px] font-medium text-gray-700'>Web Developer</p>}
        </div>
        <div className='absolute flex flex-row sm:top-[370px] xs:top-[270px] mx-auto justify-between sm:px-8 xs:py-2 sm:gap-12 xs:gap-6 border-none border-green-900 lg:ml-[30%] md:ml-[15%] sm:ml-[13%] xs:ml-[10%]'>
          <motion.button initial="hidden" animate="show" variants={fade("up" , 1, 0.2)} className='rounded-full sm:text-[16px] xs:text-[10px] sm:px-3 sm:py-1 xs:px-4 xs:py-1 bg-gradient-to-tr from-[#B0F3F1] to-[#FFCFDF] hover:shadow-[#B0F3F1] hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]'>Design</motion.button>
          <motion.button initial="hidden" animate="show" variants={fade("down" , 1, 0.4)} className='rounded-full sm:text-[16px] xs:text-[10px] sm:px-3 sm:py-1 xs:px-2 bad-trip hover:shadow-[#ef959d] hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]'>Web Dev</motion.button>
          <motion.button initial="hidden" animate="show" variants={fade("up" , 1, 0.2)} className='rounded-full sm:text-[16px] xs:text-[10px] sm:px-3 sm:py-1 xs:px-2 bg-gradient-to-r from-[#83EAF1] to-[#60A5FA] hover:shadow-blue-400 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]'>ML</motion.button>
          <motion.button initial="hidden" animate="show" variants={fade("down" , 1, 0.4)} className='rounded-full sm:text-[16px] xs:text-[10px] sm:px-3 sm:py-1 xs:px-2 bg-gradient-to-tr from-[#20DED3] to-[#F6FBA2] hover:shadow-emerald-400 hover:shadow-[0px_0px_30px_rgba(0,0,0,0.56)]'>Data Analysis</motion.button>
        </div>
        <div className='absolute flex flex-col sm:top-[440px] xs:top-[350px] w-[75%] h-[120%] ml-[15%] border-none border-green-800'>
          <TypeAnimation sequence={[`Hello World 👋, Sohel here. I'm a skilled web developer and Data Analyst with a focus on front-end, Motion, Interactive 3D Designs, Data visualization, Statistical analysis and SQL. My proficiency includes languages such as HTML, CSS, JavaScript, and Python. In additon to these technologies, I have expertise in font-end framework such as Reactjs and styling using Tailwind CSS.`]} speed={90} />
          <TypeAnimation sequence={[`I am currently pursuing a 4-year Bachelor's program in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.`]} speed={60} className='list-item pt-10'></TypeAnimation>
          <TypeAnimation sequence={[`I have a proven track record of designing and developing responsive, user-friendly websites. Apart from these, I'm also interested in working with complex datasets to extract meaningful insights.`]} speed={70} className='list-item pt-10'></TypeAnimation>
          <TypeAnimation sequence={[`In my free time, I enjoy watching mind-blowing Netflix web series and exploring new places and cultures that inspire me.`]} speed={50} className='list-item pt-10'></TypeAnimation>
        </div>
        <div className='absolute flex lg:top-[280%] md:top-[310%] sm:top-[330%] xs:top-[550%] lg:ml-[36%] md:ml-[30%] sm:ml-[25%] xs:ml-[10%] w-fit pb-4 mb-1 border-none border-green-800'>
          <p className='sm:text-[35px] xs:text-[28px] thanks'>💫 Thanks for visiting 💫</p>
        </div>
      </div>
    </>
  )
};

export default About;