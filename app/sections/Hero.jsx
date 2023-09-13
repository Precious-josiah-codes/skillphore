"use client";
import { useState } from "react";
import ExpandableCardMobile from "../components/ExpandableCardMobile";
import ExpandableCardDesktop from "../components/ExpandableCardDesktop";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, stagger } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  animationFive,
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";
// import "../custom-swiper.css";

const Hero = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [active, setActive] = useState("world-2");
  const [isOpen, setisOpen] = useState(false);

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  const handleCardClick = (index) => {
    if (index !== expandedIndex) {
      setExpandedIndex(index === expandedIndex ? -1 : index);
    }
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const card = [
    {
      image: "/learn.png",
      color: "bg-stone-500",
      title: "Courses",
      text_1: "Curated",
      text_2: "Courses",
      text_3: "100",
      text_4: "over",
    },
    {
      image: "/communityy.png",
      color: "bg-slate-500",
      title: "Community",
      text_1: "Social",
      text_2: "Synergy",
      text_3: "200",
      text_4: "Members",
    },
    {
      image: "/mentorship.png",
      color: "bg-teal-500",
      title: "Mentorship",
      text_1: "Guiding",
      text_2: "Growth",
      text_3: "500",
      text_4: "Learners",
    },
  ];

  return (
    <section className="flex sm:flex-row flex-col sm:items-center justify-between sm:pt-[8rem] sm:pb-[8rem] pt-[6rem] pb-[4rem] overflow-hidden">
      <div className="space-y-12">
        {/* Hero text */}
        <div className="sm:text-[5rem] text-[4rem] leading-[4.75rem] font-semibold sm:-mt-[5rem]">
          <motion.h1 variants={animationOne} initial="hidden" animate="visible">
            Learn.
          </motion.h1>
          <motion.h1 variants={animationTwo} initial="hidden" animate="visible">
            Engage.
          </motion.h1>
          <motion.h1
            variants={animationThree}
            initial="hidden"
            animate="visible"
          >
            Grow.
          </motion.h1>
        </div>

        {/* get started button */}
        <motion.div
          variants={animationFour}
          initial="hidden"
          animate="visible"
          className="relative z-20"
        >
          <a href="https://wa.me/2349167641202?text=Hey%20I'm%20interested%20in%20joining%20the%20Skillphore%20community.">
            <div className="sm:absolute h-[5rem] sm:w-[24rem] w-[21rem] flex justify-between items-center bg-white z-[20] shadow-2xl">
              <h1 className="pl-6">Join our community</h1>
              <button className="bg-primaryColor px-9 h-full text-white">
                Go
              </button>
            </div>
          </a>
        </motion.div>
      </div>

      {/* expandable  for desktop */}
      <div className="sm:flex hidden flex-col md:flex-row justify-center items-center gap-5 h-[500px]">
        {[0, 1, 2].map((_, index) => (
          <motion.div
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2, type: "spring" }}
            key={index}
          >
            <ExpandableCardDesktop
              key={index}
              index={index}
              expandedIndex={expandedIndex}
              handleCardClick={handleCardClick}
              cardVariants={cardVariants}
              card={card[index]}
            />
          </motion.div>
        ))}
      </div>

      {/* expandable  for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4, type: "spring" }}
        className="sm:hidden flex sm:justify-between sm:space-x-6 h-[25rem] mt-12"
      >
        <Swiper slidesPerView={"auto"} spaceBetween={30} className="mySwiper">
          {card.map((cd, index) => (
            <SwiperSlide>
              <div key={index} className="w-full">
                <ExpandableCardMobile
                  image={cd.image}
                  bgColor={cd.color}
                  text_1={cd.text_1}
                  text_2={cd.text_2}
                  text_3={cd.text_3}
                  text_4={cd.text_4}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Hero;
