import { useState, useEffect } from "react";
import ML from "../assets/ml.png";

const Body = () => {
  return (
    <div className="absolute items-center flex flex-row flex-wrap sm:flex sm:mx-auto max-w-4xl lg:left-60 md:left-[110px] sm:left-[100px] xs:left-[60px] gap-4 top-[130px] w-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="h-4 w-4 rounded-full fun-gradient1" />
        <div className="violet-gradient h-8 w-1" />
      </div>
      <h1 className="text-[50px] fun-gradient">Sohel</h1>
      <div className="container flex flex-wrap xs:flex-wrap xs:flex">
        <p className="text-[16px] fitness-about sm:max-w-[520px] xs:max-w-[245px] flex-row">
          Currently pursuing degree in AI & ML Engineering. Have interest in web
          development, Machine Learning
          & Data Analysis. I'm always eager to learn new technologies.
        </p>
      </div>
        <div className="container flex-col sm:top-56 xs:top-[275px] c-scroll-icon scroll-smooth" onClick={() => window.scrollTo(0,400)}>
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