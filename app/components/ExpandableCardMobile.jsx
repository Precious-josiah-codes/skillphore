import Image from "next/image";

const ExpandableCardMobile = ({
  bgColor,
  image,
  text_1,
  text_2,
  text_3,
  text_4,
}) => {
  return (
    <div className={`h-[30rem] w-[18rem] ${bgColor}`}>
      <Image src={image} fill size="100vw" alt="Picture of the author" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0000009c] to-transparent "></div>
      <div className="absolute bottom-[1rem] w-full z-20 text-white text-2xl">
        <div className="flex items-center justify-between px-6 w-[100%]">
          <div>
            <h1>{text_1}</h1>
            <h1>{text_2}</h1>
          </div>
          <div className="text-center">
            <h1 className="text-3xl">{text_3}</h1>
            <h1 className="text-sm">{text_4}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCardMobile;
