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
        "Skillphore changed my data analytics journey with a clear roadmap, a vibrant community, and supportive mentors—a true empowering ecosystem for success in the world of data analytics.",
      image: "/anonymous.png",
    },
    {
      name: "Nwume Victor",
      testimony:
        "Got a data analytics role this month, thanks to this platform. Sandra kept us active with projects, added 4 to my portfolio. Emmanuel was a lifesaver, especially with SQL. Grateful for their help!",
      image: "/victor.png",
    },
    {
      name: "Blessing Ekwere",
      testimony:
        "Skillphore, thank you. Your guidance and mentorship shaped my data skills at the start of my journey. I encourage data enthusiasts to join this supportive community for growth.",
      image: "/blessing.png",
    },
    {
      name: "Okene Maureen",
      testimony:
        "Before data analytics, teamwork was a challenge. Joining this community  changed that; project collaborations taught valuable analytics skills. Now, I’m more focused on enhancing my portfolio with personal projects.",
      image: "/maureen.png",
    },
    {
      name: "Jennifer Anene",
      testimony:
        "The Google Data Analytics Course was tough for me; I almost gave up, but a Skillphore mentor kept me going. I have completed the program and now diving into my first data analytics project.",
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
