"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { exploreWorlds } from "../constants";
// import { staggerContainer } from "../utils/motion";
// import { ExploreCard, TitleText, TypingText } from "../components";
import styles from "./styles";
import { exploreWorlds } from "./constants";
import { staggerContainer } from "./utils/motion";
import ExploreCard from "./components/ExploreCard";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [active, setActive] = useState("world-2");
  const [isOpen, setisOpen] = useState(false);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [
    "/planet-01.png",
    "/planet-02.png",
    "/planet-03.png",
    "/planet-04.png",
  ];

  const cardDescription = [
    "this is just a card description",
    "this is just a card description",
    "this is just a card description",
    "this is just a card description",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          {/* <TypingText title="| The World" textStyles="text-center" />
          <TitleText
            title={
              <>
                Choose the world you want <br className="md:block hidden" /> to
                explore
              </>
            }
            textStyles="text-center"
          /> */}
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </section>
      {/* <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        className="bg-white px-[5rem] py-[3rem]"
        onClick={() => setisOpen(!isOpen)}
      >
        <motion.h1 layout="position">hello</motion.h1>

        {isOpen && (
          <motion.div className="w-[30rem]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, magnam!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              ducimus quos nisi necessitatibus voluptas totam odio quia. Qui
              rerum voluptates asperiores labore optio incidunt consectetur
              consequuntur. Fuga rem laborum ipsum?
            </p>
          </motion.div>
        )}
      </motion.div> */}

      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        className="bg-white px-[5rem] py-[3rem]"
        onClick={() => setisOpen(!isOpen)}
      >
        {/* <motion.h1 layout="position">new</motion.h1> */}

        {isOpen && (
          <motion.div className="min-w-[170px] h-[700px] relative lg:flex-[0.5] flex-[2]">
            <img
              src="/planet-04.png"
              alt="planet-04"
              className="absolute w-full h-full object-cover rounded-[24px]"
            />
          </motion.div>
        )}
      </motion.div>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5 h-[500px]">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`h-[30rem] cursor-pointer bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className=" h-full flex flex-col justify-end">
              <div className="bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="lg:rotate-[-90deg] lg:origin-[0,0]">Business</h2>
                {/* <h2 className="text-xl font-semibold text-white text-center">
                  Card {index + 1}
                </h2> */}
                {index === expandedIndex && (
                  <div className="mt-2 text-gray-300 text-center">
                    {/* {cardDescription[index]} */}
                    <h1>Writing Course</h1>
                    <h1>100 TOPICS</h1>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
