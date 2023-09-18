import Image from "next/image";
import { motion } from "framer-motion";

import Btn from "../components/Btn";
import { animationOne, animationThree, animationTwo } from "../animation";

const FinancialAid = () => {
  return (
    <section className="flex justify-between w-full sm:h-auto h-[124vh] sm:mt-[4rem]">
      <div className="flex sm:flex-row flex-col-reverse justify-between w-full">
        {/* left section */}
        <motion.div
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`sm:w-[30rem] h-[25rem] bg-white rounded-xl shadow-xl overflow-hidden sm:mt-0 mt-8`}
        >
          <div className="h-full relative ">
            {/* course image */}
            <Image
              class="object-cover w-full h-full "
              src="/financial_aid.jpg"
              fill
              alt=""
              priority
            />
          </div>
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
            Skill Up With Financial Aid.
          </motion.h1>
          <motion.p
            variants={animationTwo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Looking to enhance your skills and advance your career? We're here
            to help you achieve your goals through financial aid options
            tailored to your educational journey. Start your journey to skill up
            and reach new heights with the support of financial aid. Your
            ambitions are our priority. Hit that button to explore the various
            financial aid options available to you.
          </motion.p>
          <motion.div
            variants={animationThree}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href="https://wa.me/2349167641202?text=Hey%20there!%20👋%20I'm%20excited%20to%20start%20a%20Skillphore%20course%20📚%20but%20could%20use%20some%20financial%20aid..">
              <Btn content="Get Financial Aid" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAid;
