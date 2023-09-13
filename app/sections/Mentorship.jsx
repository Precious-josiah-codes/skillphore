import Image from "next/image";
import Btn from "../components/Btn";
import {
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";

import { motion } from "framer-motion";

const Mentorship = () => {
  return (
    <section className="flex sm:flex-row flex-col justify-between items-center h-[90vh] sm:pb-0 pb-[4rem]">
      {/* left section */}
      <motion.div
        variants={animationOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="sm:w-[30rem] w-full h-[20rem] sm:mb-0 mb-9  shadow-xl relative"
      >
        {/* course image */}
        <Image
          class="object-cover w-full h-full "
          src="/mentors.jpg"
          fill
          size="100vw"
          alt=""
          priority
        />
      </motion.div>

      {/* right section */}
      <div className="sm:w-[40rem] space-y-6">
        <motion.h1
          variants={animationTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[2.5rem] sm:w-[24rem] leading-[3.5rem] font-semibold"
        >
          Experienced Course Mentor.
        </motion.h1>
        <motion.p
          variants={animationThree}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Discover mentors brimming with expertise and a love for teaching,
          Whether you're aiming to master new skills, broaden your horizons, or
          overcome hurdles, our mentors offer tailored guidance.
        </motion.p>
        <motion.div
          variants={animationFour}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a href="https://wa.me/2349167641202?text=I'm%20looking%20for%20some%20mentorship%20in%20[Subject/Field].%20Could%20you%20help%20me%20out%20and%20share%20your%20insights?😊.">
            <Btn content="Get Mentorship" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentorship;
