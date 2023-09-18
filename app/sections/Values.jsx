// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../custom-swiper2.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

import ValueCard from "../components/ValueCard";
import { useMediaQuery } from "react-responsive";
import { animationOne, animationTwo } from "../animation";
import SlideArrowRight from "../components/SlideArrowRight";
import SlideArrowLeft from "../components/SlideArrowLeft";

const Values = () => {
  const [isIFlipped, setIsIFlipped] = useState(true);
  const [isNFlipped, setIsNFlipped] = useState(true);
  const [isCFlipped, setIsCFlipped] = useState(true);
  const [isIIFlipped, setIsIIFlipped] = useState(true);
  const [isTFlipped, setIsTFlipped] = useState(true);
  const [isEFlipped, setIsEFlipped] = useState(true);
  // const [slide, setSlide] = useState(true);

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

  const valuesStyle = `w-[20rem] h-[20rem] bg-white flex flex-col justify-center items-center space-y-6 rounded-xl mb-6 sm:mb-0 shadow-xl text-6xl relative rounded-[20px] cursor-pointer overflow-hidden text-white `;
  const valueTitle = ` text-[1.2rem] font-medium  w-fit pb-1`;
  const valueSubTitle = `text-base leading-8 mt-6 font-light`;

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <section className="sm:h-[80vh] h-[65vh] sm:mt-[4rem] mt-[2rem]">
      <motion.h1
        variants={animationOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading-text"
      >
        Our Core Values
      </motion.h1>

      {/* values */}
      <motion.div
        variants={animationTwo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[23rem]"
      >
        {/* values card */}
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavLeft.current;
            swiper.params.navigation.nextEl = swiperNavRight.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          // onReachEnd={() => setSlide(!slide)}
          // onReachBeginning={() => setSlide(!slide)}
          slidesPerView={"auto"}
          spaceBetween={isMobile ? 8 : 20}
          modules={[Navigation]}
          navigation={{
            prevEl: swiperNavLeft.current,
            nextEl: swiperNavRight.current,
          }}
          className="mySwiper"
        >
          {/* I */}
          <SwiperSlide>
            <div
              className={`${valuesStyle} value_card_innovation`}
              onMouseEnter={() => setIsIFlipped(!isIFlipped)}
              onMouseLeave={() => setIsIFlipped(!isIFlipped)}
            >
              {isIFlipped && <ValueCard content="I" />}
              {!isIFlipped && (
                <ValueCard
                  content={
                    <div>
                      <div className={valueTitle}>Innovation</div>
                      <div className={valueSubTitle}>
                        We embrace innovation in our teaching methods and
                        content delivery, constantly seeking new and effective
                        ways to make data learning engaging and exciting.
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          </SwiperSlide>
          {/* N */}
          <SwiperSlide>
            <div
              className={`${valuesStyle} value_card_curiousity`}
              onMouseEnter={() => setIsNFlipped(!isNFlipped)}
              onMouseLeave={() => setIsNFlipped(!isNFlipped)}
            >
              {isNFlipped && <ValueCard content="N" />}
              {!isNFlipped && (
                <ValueCard
                  content={
                    <div>
                      <div className={valueTitle}>Never-ending curiosity</div>
                      <div className={valueSubTitle}>
                        Never-ending curiosity: Cultivate a thirst for knowledge
                        and continuous learning, instilling a passion for
                        exploring the ever-evolving world of data analytics.
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          </SwiperSlide>
          {/* C */}
          <SwiperSlide>
            <div
              className={`${valuesStyle} value_card_collaboration`}
              onMouseEnter={() => setIsCFlipped(!isCFlipped)}
              onMouseLeave={() => setIsCFlipped(!isCFlipped)}
            >
              {isCFlipped && <ValueCard content="C" />}
              {!isCFlipped && (
                <ValueCard
                  content={
                    <div>
                      <div className={valueTitle}>Collaboration</div>
                      <div className={valueSubTitle}>
                        We foster a collaborative and supportive community where
                        learners can interact with peers, mentors, and experts,
                        promoting knowledge-sharing and collective growth.
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          </SwiperSlide>
          {/* I */}
          <SwiperSlide>
            <div
              className={`${valuesStyle} value_card_integrity`}
              onMouseEnter={() => setIsIIFlipped(!isIIFlipped)}
              onMouseLeave={() => setIsIIFlipped(!isIIFlipped)}
            >
              {isIIFlipped && <ValueCard content="I" />}
              {!isIIFlipped && (
                <ValueCard
                  content={
                    <div>
                      <div className={valueTitle}>Integrity</div>
                      <div className={valueSubTitle}>
                        We uphold the highest standards of ethical conduct in
                        data analytics, emphasizing the responsible and
                        trustworthy handling of data.
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          </SwiperSlide>
          {/* T */}
          <SwiperSlide>
            <div
              className={`${valuesStyle} value_card_inclusion`}
              onMouseEnter={() => setIsTFlipped(!isTFlipped)}
              onMouseLeave={() => setIsTFlipped(!isTFlipped)}
            >
              {isTFlipped && <ValueCard content="T" />}
              {!isTFlipped && (
                <ValueCard
                  content={
                    <div>
                      <div className={valueTitle}>Toward Inclusivity</div>
                      <div className={valueSubTitle}>
                        We are committed to breaking down barriers and ensuring
                        that anyone with a passion for data analytics can
                        benefit from our platform, making data learning
                        available to all.
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          </SwiperSlide>
          {/* E */}
          <SwiperSlide>
            <div
              className={`${valuesStyle} value_card_empowerment`}
              onMouseEnter={() => setIsEFlipped(!isEFlipped)}
              onMouseLeave={() => setIsEFlipped(!isEFlipped)}
            >
              {isEFlipped && <ValueCard content="E" />}
              {!isEFlipped && (
                <ValueCard
                  content={
                    <div>
                      <div className={valueTitle}>Empowerment</div>
                      <div className={valueSubTitle}>
                        We believe in empowering individuals to take charge of
                        their data learning journey, equipping them with the
                        knowledge and skills to succeed in the field of data
                        analytics.
                      </div>
                    </div>
                  }
                />
              )}
            </div>
          </SwiperSlide>
        </Swiper>

        {/* navigations */}
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
              className={`${styles.swiperNavIcons}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>

          {/* sliding animation arrow */}
          {/* <div className="sm:hidden">
            {slide ? <SlideArrowRight /> : <SlideArrowLeft />}
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Values;
