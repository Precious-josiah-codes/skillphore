"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../custom-swiper2.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import ExploreCoursesCard from "../components/ExploreCoursesCard";
import {
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";

const ExploreCourses = () => {
  const data = [
    {
      name: "What is Data?",
      category: "Data Analytics",
      link: "https://www.youtube.com/watch?v=WnP6jDvupiY",
      image: "/data_analytics.jpg",
      duration: "26 Minutes",
    },

    {
      name: "Data Analytics With Excel",
      category: "Spreadsheet",
      link: "https://www.youtube.com/playlist?list=PLUaB-1hjhk8Hyd5NiPQ9CND82vNodlFF5",
      image: "/spreadsheet.jpeg",
      duration: "2 Hours 47 Minutes",
    },

    {
      name: "Data Analysis With SQL",
      category: "Database",
      link: "https://www.youtube.com/playlist?list=PLUaB-1hjhk8GT6N5ne2qpf603sF26m2PW",
      image: "/database.png",
      duration: "2 Hours 47 Minutes",
    },

    {
      name: "Tableau",
      category: "Visualization",
      link: "https://www.youtube.com/playlist?list=PLUaB-1hjhk8GwbqoVmo_5zuhOa0Tcl3xC",
      image: "/visualization.png",
      duration: "1 Hour 36 Minutes",
    },
    {
      name: "Basic Statistics",
      category: "Statistics",
      link: "https://www.youtube.com/playlist?list=PLyLpEs0x9Bnkdzf7bx1J3hMZwZfBhan0e",
      image: "/statistics.jpeg",
      duration: "54 Minutes",
    },

    {
      name: "Python",
      category: "Programming",
      link: "https://youtu.be/6sLkF-F9Oh0?si=QGVN9GrjkAbNb5Ye",
      image: "/programming.png",
      duration: "2 Hours 54 Minutes",
    },
    {
      name: "How to present your data",
      category: "Data Storytelling & Presentation",
      link: "https://drive.google.com/drive/folders/1-wtkkR0UASkT4F-ZPW7iKiCdBBwbEVDv",
      image: "/story_telling.jpeg",
      duration: "2 Hours 10 Minutes",
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
    <section className="sm:h-[100vh] h-auto sm:space-y-[1rem] sm:pb-0 pb-[4rem]">
      {/* heading text */}
      <div className="heading-text">
        <motion.h1
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Unlimited access to 100+ curated courses.
        </motion.h1>
        <motion.p
          variants={animationTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-lg font-normal mt-3 text-[#1e1e2f]"
        >
          Explore few of our curated courses
        </motion.p>
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
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: swiperNavLeft.current,
          nextEl: swiperNavRight.current,
        }}
        className="mySwiper cursor-grabbing"
      >
        {data.map((dt, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={animationThree}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ExploreCoursesCard data={dt} />
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

export default ExploreCourses;
