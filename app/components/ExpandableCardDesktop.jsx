import { motion } from "framer-motion";

const ExpandableCardDesktop = ({
  index,
  expandedIndex,
  handleCardClick,
  cardVariants,
  card,
}) => {
  return (
    <motion.div
      key={index}
      className={`h-[33rem] cursor-pointer  bg-cover ${
        card.color
      } bg-center rounded-[20px] overflow-hidden  ${
        index === expandedIndex ? "expanded" : ""
      }`}
      variants={cardVariants}
      initial="collapsed"
      animate={index === expandedIndex ? "expanded" : "collapsed"}
      transition={{ duration: 0.5 }}
      onHoverStart={() => handleCardClick(index)}
      style={{
        position: "relative",
        backgroundImage: `url(${card.image})`,
      }}
    >
      <div class="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
      <div className=" h-full flex flex-col justify-end">
        <div className="min-h-[100px] flex flex-col items-center justify-center text-3xl  text-white font-medium ">
          {/* title text */}
          {index !== expandedIndex && (
            <h2 className="lg:rotate-[-90deg] lg:origin-[0,0] -mt-[17rem] w-[15rem]">
              {card.title}
            </h2>
          )}
          {/* sub text */}
          {index === expandedIndex && (
            <div className="-mt-[6.3rem] text-center flex justify-between w-full px-[4rem] z-20">
              {/* {cardDescription[index]} */}

              <div className="text-left">
                <h1>{card.text_1}</h1>
                <h1>{card.text_2}</h1>
              </div>
              <div>
                <h1 className="text-5xl">{card.text_3}</h1>
                <h1 className="text-base"> {card.text_4}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandableCardDesktop;
