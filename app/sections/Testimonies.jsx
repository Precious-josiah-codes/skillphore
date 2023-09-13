"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../custom-swiper2.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { motion } from "framer-motion";

// import { StoreContext } from "../context/Store";
// import { useContext } from "react";
import TestimonyCard from "../components/TestimonyCard";
import { useMediaQuery } from "react-responsive";
import { animationOne, animationTwo } from "../animation";

const Testimonies = () => {
  //   const { isMobile } = useContext(StoreContext);
  const testimonies = [
    {
      name: "Jessica Atari-Ata",
      testimony:
        "Skillphore transformed my data analytics journey with structured guidance, a vibrant community, and dedicated mentors, creating an empowering ecosystem for success.",
      image: "/anonymous.png",
    },
    {
      name: "Nwume Victor",
      testimony:
        "In my recent achievement, I secured a data analytics role. This platform significantly contributed to honing my skills, with Sandra and Emmanuel playing pivotal roles in my growth.",
      image: "/victor.png",
    },
    {
      name: "Blessing Ekwere",
      testimony:
        "Skillphore's guidance and mentorship shaped my data skills. I urge data enthusiasts to join this supportive community for growth and thriving.",
      image: "/blessing.png",
    },
    {
      name: "Okene Maureen",
      testimony:
        "Before diving into data analytics, I struggled with teamwork. Joining the community taught me collaboration, enhanced my skills, and now I'm focused on personal projects and portfolio improvement.",
      image: "/maureen.png",
    },
    {
      name: "Jennifer Anene",
      testimony:
        "In my Google Data Analytics Certificate Course, I encountered numerous challenges but persevered with Skillphore mentors' support. Now, I'm completing my first data analytics project triumphantly.",
      image: "/anonymous.png",
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
  const leftNav = () => {
    swiperNavRight.current.style.display = "flex";
    console.log("hello");
  };

  // styles
  const styles = {
    myswiper: "",
    swiperNav:
      "w-fit hover:border hover:border-gray-400 p-3 cursor-pointer rounded-full hidden sm:flex justify-center items-center",
    swiperNavIcons: "w-6 h-6 text-basic text-black",
  };

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <section className="h-auto sm:mt-[4rem] mt-[3rem]">
      {/* heading text */}
      <motion.h1
        variants={animationOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading-text"
      >
        What our community say.
      </motion.h1>

      {/* testimony card */}
      <motion.div
        variants={animationTwo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[23rem] cursor-grab"
      >
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavLeft.current;
            swiper.params.navigation.nextEl = swiperNavRight.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          slidesPerView={"auto"}
          spaceBetween={isMobile ? 7 : 30}
          modules={[Navigation]}
          navigation={{
            prevEl: swiperNavLeft.current,
            nextEl: swiperNavRight.current,
          }}
          className="mySwiper"
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <TestimonyCard testimony={testimony} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* navigations */}
      <div className="flex w-fit mx-auto space-x-6">
        {/* left navigation */}
        <div ref={swiperNavLeft} className={styles.swiperNav} onClick={leftNav}>
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
    </section>
  );
};

export default Testimonies;
