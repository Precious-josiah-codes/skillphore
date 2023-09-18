import Image from "next/image";

import { motion } from "framer-motion";
import {
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";

import learn from "../../public/learn.gif";

export const Skilled = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[#CCAB00]"
    >
      <path
        fillRule="evenodd"
        d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const Trained = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[#CCAB00]"
    >
      <path
        fillRule="evenodd"
        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
        clipRule="evenodd"
      />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>
  );
};

export const Mentored = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[#CCAB00]"
    >
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
  );
};

const Skills = () => {
  const skills = [
    {
      icon: <Skilled />,
      title: "Skilled",
      body: "In today's job market, diverse skills are vital for success.",
    },
    {
      icon: <Trained />,
      title: "Trained",
      body: "We've trained 100 skillers for job-market success.",
    },
    {
      icon: <Mentored />,
      title: "Mentored",
      body: "Our mentoring benefited 300, fostering career success.",
    },
  ];

  return (
    <section className="sm:pt-[1rem] pt-[3rem] text-black">
      {/* top text */}
      <div className="sm:flex sm:items-start sm:h-[15rem] h-auto">
        <motion.h1
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[2.5rem] sm:w-[24rem] leading-[3.5rem] font-semibold sm:mb-0 mb-6"
        >
          Get the skills you need for a job that is in demand.
        </motion.h1>
        <motion.h1
          variants={animationTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:w-[34rem] sm:ml-[12.6rem] text-[1.25rem] font-light"
        >
          The modern labor market dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills.
        </motion.h1>
      </div>

      {/* timeline and video */}
      <div className="flex sm:flex-row flex-col-reverse sm:items-center sm:justify-between w-full sm:h-full h-auto sm:mt-0 mt-[5rem]">
        {/* mission timeline */}
        <div className="w-[20rem] h-fit sm:mt-0 mt-11">
          <ol class="relative border-l-4 border-gray-300 border-dotted ml-7">
            {skills.map(({ title, body, icon }, index) => (
              <motion.li
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                }}
                class="mb-10 ml-6"
                key={index}
              >
                <span class="absolute flex items-center justify-center w-[3rem] h-[3rem] rounded-full -left-6 ring-8 ring-white bg-white shadow-2xl">
                  {icon}
                </span>
                <h3 class="flex items-center mb-3 text-lg font-semibold ml-6">
                  {title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 ml-6">
                  {body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* video */}
        <motion.div
          variants={animationFour}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:w-[68%] w-full sm:h-[85vh] h-[53vh] relative "
        >
          <img
            src="./learn.gif"
            alt=""
            className="rounded-[10px] object-cover h-full w-full"
          />
          <div class="absolute sm:-top-[4rem] -top-[2rem] sm:left-[13rem] left-[6rem] inset-0 bg-[#CCAB00] sm:h-[8rem] sm:w-[34rem] h-[4rem] w-[14rem] flex justify-center items-center divide-x-2 divide-black">
            <div className="flex items-center space-x-3 sm:pr-9">
              <h1 className="text-5xl sm:block hidden">100</h1>
              <h1 className="text-5xl sm:hidden block">400</h1>
              <div className="text-sm font-semibold">
                <h1>SKILLERS</h1>
                <h1>TRAINED</h1>
              </div>
            </div>
            <div className="sm:flex hidden items-center space-x-3 pl-9 ">
              <h1 className="text-5xl">300</h1>
              <div className="text-sm font-semibold">
                <h1>SKILLERS</h1>
                <h1>MENTORED</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
