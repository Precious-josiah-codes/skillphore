"use client";
import { useEffect, useRef } from "react";
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
import { useMediaQuery } from "react-responsive";

const ExploreCourses = () => {
  const data = [
    {
      name: "What is Data?",
      category: "Data Analytics",
      link: "https://www.youtube.com/watch?v=WnP6jDvupiY",
      image: "/data_analytics.jpg",
      duration: "2 Minutes",
      tutor: "University of Houston Libaries",
      tutorImage:
        "https://yt3.ggpht.com/ytc/AOPolaQYa-SdoV64gdCdhamVSRiOGUiEOWLPELmUEDekRg=s48-c-k-c0x00ffffff-no-rj",
    },

    {
      name: "Python",
      category: "Programming",
      link: "https://youtu.be/6sLkF-F9Oh0?si=QGVN9GrjkAbNb5Ye",
      image: "/programming.png",
      duration: "2 Hours 56 Minutes",
      tutor: "Analytics Vidhya",
      tutorImage:
        "https://yt3.googleusercontent.com/ytc/AOPolaQmXVg7tRM7pMT_NPfBcAbAxUNHLp1URuKnulxEsik=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Data Analysis With SQL",
      category: "Database",
      link: "https://youtu.be/8rO7ztF4NtU?si=7vD5vCc-uivfW2s-",
      image: "/database.png",
      duration: "54 Minutes",
      tutor: "Alex the Analyst",
      tutorImage:
        "https://yt3.ggpht.com/ytc/AOPolaQx_x_pSH8wDisQQhQh9Y9K9MOaylGdX7UqpsKF=s48-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "R",
      category: "Programming",
      link: "https://youtu.be/_V8eKsto3Ug?si=yit9lfvarSOSR9HJ",
      image: "/programming.png",
      duration: "2 Hours 10 Minutes",
      tutor: "FreeCodeCamp",
      tutorImage:
        "https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s48-c-k-c0x00ffffff-no-rj",
    },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

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
        spaceBetween={isMobile ? 1 : 20}
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
