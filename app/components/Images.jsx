import Image from "next/image";

const Images = ({ image }) => {
  return (
    <div className="hidden sm:flex w-[3rem] h-[3rem] rounded-full overflow-hidden bg-[#7918f0]">
      <Image src={image} width={500} height={500} alt="Picture of the author" />
    </div>
  );
};

export default Images;
