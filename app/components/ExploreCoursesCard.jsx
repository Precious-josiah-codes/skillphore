import Image from "next/image";
import Link from "next/link";

const ExploreCoursesCard = ({ data }) => {
  return (
    <>
      {/* card image */}
      <div
        className={`sm:w-[20rem] w-[19rem] h-[20rem] bg-white flex flex-col justify-center space-y-6 rounded-xl mb-6 sm:mb-0 shadow-xl overflow-hidden`}
      >
        <div className="h-full relative">
          {/* course image */}
          <Image
            class="object-cover w-full h-full "
            src={data.image}
            fill
            alt=""
            priority
          />
        </div>
        <div className="bg-slate-800 text-white rounded-full w-fit absolute top-0 left-4 px-3 py-1 text-xs">
          {data.category}
        </div>

        <div className="flex items-center space-x-3 absolute bottom-[6rem] left-4">
          {/* profile photo */}
          <div className="flex w-[2rem] h-[2rem] rounded-full overflow-hidden border-2">
            <Image
              className="object-cover"
              src={data.tutorImage}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          {/* name and occupation */}
          <div className="block ">
            <h1 className="text-white font-medium text-base">{data.tutor}</h1>
          </div>
        </div>
      </div>

      {/* card text */}
      <div className="mt-6">
        <Link href={data.link}>
          <h1 className="text-xl text-gray-900 font-medium w-[20rem]">
            {data.name}
          </h1>
        </Link>
        <h3>{data.duration}</h3>
      </div>
    </>
  );
};
export default ExploreCoursesCard;
