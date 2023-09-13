"use client";

import Link from "next/link";
import Btn from "./Btn";

const SideMenu = ({ displaySideMenu, setDisplaySideMenu }) => {
  const links = [
    { url: "hero", urlName: "Home" },
    { url: "exploreCourses", urlName: "Courses" },
    { url: "financialAid", urlName: "Financial Aid" },
    { url: "mentorship", urlName: "Mentorship" },
  ];
  const linkStyle = "mb-6";
  return (
    <div
      className={` top-0 right-0 w-[90vw] bg-white  p-10 pl-20 text-black fixed h-full z-[999] ease-in-out duration-300 uppercase border-l border-[#7571852d] ${
        displaySideMenu ? "translate-x-0 " : "translate-x-full sm:hidden"
      }`}
    >
      {/* start close sidemenu */}
      <div
        className="w-fit"
        onClick={() => setDisplaySideMenu(!displaySideMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {/* end close sidemenu */}
      {/* start links */}
      <h2
        className="mt-20 text-2xl font-semibold text-black"
        onClick={() => setDisplaySideMenu(!displaySideMenu)}
      >
        {links.map((link, index) => (
          <Link
            href="#"
            className="navbar-link"
            data-target={link.url}
            key={index}
          >
            <div className={`${linkStyle}`}>{link.urlName}</div>
          </Link>
        ))}
      </h2>
      {/* end links */}

      {/* start authentication btn */}
      <div className="space-y-8 absolute bottom-[3rem]">
        <a href="https://wa.me/2349167641202?text=Hey%20I'm%20interested%20in%20joining%20the%20Skillphore%20community.">
          <Btn content="JOIN COMMUNITY" />
        </a>
      </div>
      {/* end authentication btn */}
    </div>
  );
};

export default SideMenu;
