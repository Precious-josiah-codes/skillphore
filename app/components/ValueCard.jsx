import { motion } from "framer-motion";

const ValueCard = ({ content }) => {
  return (
    <motion.h1
      className="px-6"
      style={{ zIndex: "20" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "linear",
        delay: 0.1,
        type: "spring",
        stiffness: 100,
      }}
    >
      {content}
    </motion.h1>
  );
};

export default ValueCard;
