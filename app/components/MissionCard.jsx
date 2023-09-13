const MissionCard = ({ data, stepNum }) => {
  return (
    <div
      className={`w-[20rem] h-[20rem] bg-white flex flex-col justify-center space-y-6 p-6 rounded-xl mb-6 sm:mb-0 shadow-xl`}
    >
      <div>
        <h1 className="text-xs">0{stepNum + 1}.</h1>
        <h1 className="text-[1.5rem] mb-3 font-semibold">{data.head}</h1>
      </div>
      <p>{data.body}</p>
    </div>
  );
};
export default MissionCard;
