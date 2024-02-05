import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Body = () => {
  return (
    <div className="absolute items-center flex flex-row flex-wrap sm:flex sm:mx-auto max-w-4xl lg:left-60 md:left-[110px] sm:left-[100px] xs:left-[60px] gap-4 top-[130px] w-auto">
      <motion.div className="flex flex-col items-center justify-center" variants={fadeIn("right", "spring", 0.2, 1.5)}
        initial="hidden"
        animate="show">
        <div className="h-4 w-4 rounded-full fun-gradient1" />
        <div className="violet-gradient h-8 w-1" />
      </motion.div>
      <motion.div variants={fadeIn("left", "spring", 0.2, 1.5)}
        initial="hidden"
        animate="show">
        <h1 className="text-[50px] fun-gradient">Sohel</h1>
      </motion.div>
      <motion.div className="container flex flex-wrap xs:flex-wrap xs:flex" variants={fadeIn("up", "spring", 0.4, 2)}
        initial="hidden"
        animate="show">
        <p className="text-[16px] fitness-about sm:max-w-[520px] xs:max-w-[245px] flex-row">
          Currently pursuing degree in AI & ML Engineering. Have interest in web
          development, Machine Learning
          & Data Analysis. I'm always eager to learn new technologies.
        </p>
      </motion.div>
      <div className="container flex-col sm:top-56 xs:top-[275px] c-scroll-icon scroll-smooth" onClick={() => window.scrollTo(0, 400)}>
        <div className="c-scroll-icon-line-mask">
          <div className="c-scroll-icon-line"></div>
        </div>
        <div className="c-scroll-icon-triangle">
          <div className="c-scroll-icon-triangle-mask first">
            <div className="c-scroll-icon-triangle-line first"></div>
          </div>
          <div className="c-scroll-icon-triangle-mask right">
            <div className="c-scroll-icon-triangle-line right"></div>
          </div>
          <div className="c-scroll-icon-triangle-mask left">
            <div className="c-scroll-icon-triangle-line left"></div>
          </div>
          <div className="c-scroll-icon-triangle-mask last">
            <div className="c-scroll-icon-triangle-line last"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;