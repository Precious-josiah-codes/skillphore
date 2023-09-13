import Image from "next/image";

const TestimonyCard = ({ testimony }) => {
  return (
    <div className="w-[20rem] h-[20rem] bg-white  flex flex-col justify-between p-6 rounded-xl shadow-xl">
      {/* testimony */}
      <h1 className="font-light">{testimony.testimony}</h1>

      <div className="flex items-center space-x-3">
        {/* profile photo */}
        <div className="flex w-[3rem] h-[3rem] rounded-full overflow-hidden bg-[#CCAB00]">
          <Image
            className="object-cover"
            src={testimony.image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>

        {/* name and occupation */}
        <div className="block ">
          <h1 className="text-black font-bold text-base">{testimony.name}</h1>
          <h1 className="text-[#CCAB00] text-sm">Data Analyst</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
