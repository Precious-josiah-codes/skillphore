"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../custom-swiper2.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// import { StoreContext } from "../context/Store";
// import { useContext } from "react";
import TestimonyCard from "../components/TestimonyCard";
import { useMediaQuery } from "react-responsive";
import { animationOne, animationTwo } from "../animation";

const Testimonies = () => {
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          spaceBetween={isMobile ? 7 : 30}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={isMobile ? false : true}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <TestimonyCard testimony={testimony} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonies;
