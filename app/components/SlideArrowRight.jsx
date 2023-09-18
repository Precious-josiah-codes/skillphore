import React from "react";
import { motion } from "framer-motion";

const SlideArrowRight = () => {
  return (
    <motion.div
      initial={{ x: -20 }} // Initial position (left)
      animate={{ x: 20 }} // Bounce to the right
      transition={{
        repeat: Infinity, // Infinite animation
        repeatType: "reverse", // Bounce back to the left
        duration: 1, // Duration of each bounce
        ease: "easeInOut", // Easing function
      }}
    >
      <div className="w-fit border border-gray-400 p-3 cursor-pointer rounded-full flex justify-center items-center mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-basic text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default SlideArrowRight;
