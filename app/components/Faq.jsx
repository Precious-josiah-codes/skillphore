function Faq({ isExpanded, question, answer }) {
  return (
    <div className=" rounded-md border  mb-4">
      <div
        className={`py-4 sm:px-8 px-3 cursor-pointer flex justify-between items-center ${
          isExpanded ? "bg-primaryColor text-white" : " text-black"
        }`}
      >
        <span className="text-lg font-medium w-[49rem]">{question}</span>
        <span
          className={`sm:flex hidden transform transition-transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div
        className={`sm:px-8 px-3 transition-max-h duration-500  ${
          isExpanded ? "max-h-screen py-8" : "max-h-0 py-0"
        } overflow-hidden`}
      >
        {answer}
      </div>
    </div>
  );
}

export default Faq;
