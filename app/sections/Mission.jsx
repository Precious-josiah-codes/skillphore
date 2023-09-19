"use client";
import { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../custom-swiper2.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import MissionCard from "../components/MissionCard";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { animationOne, animationTwo } from "../animation";

const Mission = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const data = [
    {
      head: "Data Learning Revolution",
      body: "Join us in revolutionizing data learning. Say farewell to old methods and embrace accessible, engaging education",
      color: "#CCAB00",
      height: "20rem",
    },
    {
      head: "Accessible Data Education",
      body: "Data education shouldn't be exclusive to experts. We break barriers, making it accessible and exciting for everyone.",
      color: "rgb(74 222 128)",
      height: "23rem",
    },
    {
      head: "Empower with Data Skills",
      body: "Our mission is to empower you with data skills for success. From mastering analysis to navigating the data-driven world, we're here to guide you",
      color: "#5a57ffd5",
      height: "25rem",
    },
    {
      head: "Data Analytics Mastery",
      body: "Confidently navigate the dynamic realm of data analytics with our expert-designed courses and resources. Unlock your potential for success in this evolving field – join us today",
      color: "#c137cef5",
      height: "27rem",
    },
  ];

  // swiper navigation element
  const swiperNavLeft = useRef(null);
  const swiperNavRight = useRef(null);

  // right navigation click
  // to turn off display for left navigation
  const rightNav = () => (swiperNavLeft.current.style.display = "flex");

  // left navigation click
  // to turn off display for right navigation
  const leftNav = () => (swiperNavRight.current.style.display = "flex");

  // styles
  const styles = {
    myswiper: "",
    swiperNav:
      "w-fit hover:border hover:border-gray-400 p-3 cursor-pointer rounded-full hidden sm:flex justify-center items-center mt-6",
    swiperNavIcons: "w-6 h-6 text-basic text-black",
  };

  return (
    <section className="sm:h-[90vh] h-auto sm:space-y-[1rem] ">
      {/* heading text */}
      <div className=" text-center">
        <motion.h1
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:text-[2rem] text-[1.75rem] sm:leading-[3.75rem] font-[400] heading-text"
        >
          Mission.
        </motion.h1>
      </div>

      {/* Mission */}
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavLeft.current;
          swiper.params.navigation.nextEl = swiperNavRight.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={"auto"}
        spaceBetween={isMobile ? 10 : 30}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: swiperNavLeft.current,
          nextEl: swiperNavRight.current,
        }}
        className="mySwiper"
      >
        {data.map((dt, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={animationTwo}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <MissionCard stepNum={index} data={dt} />
            </motion.div>
          </SwiperSlide>
        ))}

        <div className="flex w-fit mx-auto space-x-6">
          {/* left navigation */}
          <div
            ref={swiperNavLeft}
            className={styles.swiperNav}
            onClick={leftNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${styles.swiperNavIcons} w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>

          {/* right navigation */}
          <div
            ref={swiperNavRight}
            className={styles.swiperNav}
            onClick={rightNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${styles.swiperNavIcons} w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Mission;
