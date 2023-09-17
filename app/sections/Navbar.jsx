import Link from "next/link";
import { motion } from "framer-motion";

export const LogoIcon = ({ color }) => {
  return (
    <div>
      <svg
        viewBox="0 0 9 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth={2}
        className="w-[.6rem] h-[.6rem]"
      >
        <path
          d="M4.13355 1.95133L1.0579 5.26464L0.681531 4.8583L4.5 0.735796L8.31847 4.8583L7.9421 5.26464L4.86645 1.95133L4.5 1.55656L4.13355 1.95133Z"
          fill={color}
          stroke={color}
        />
      </svg>
    </div>
  );
};

const Navbar = ({ displaySideMenu, setDisplaySideMenu }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      className="fixed z-50 right-0 w-full h-[5rem] px-6 sm:px-[5rem] flex items-center justify-between bg-white text-white py-4"
    >
      {/* logo */}
      <div className="text-black text-xl font-bold flex items-center space-x-2">
        <div className="-space-y-4">
          <LogoIcon color="black" />
          <LogoIcon color="black" />
          <LogoIcon color="black" />
          <LogoIcon color="black" />
        </div>
        <div className="leading-4 ">
          <h1>SKILLPHORE</h1>
          <p className="text-xs font-light text-[#CCAB00]">
            Transforming data learning.
          </p>
        </div>
      </div>

      {/* links */}
      <div className="hidden sm:flex space-x-6 text-black">
        <Link href="#" className="navbar-link" data-target="exploreCourses">
          Courses
        </Link>

        <Link href="#" className="navbar-link" data-target="financialAid">
          <span>Financial Aid</span>
        </Link>
        <Link
          href="#mentorship"
          className="navbar-link"
          data-target="mentorship"
        >
          <span>Mentorship</span>
        </Link>
        <Link href="#footer">
          <span>Contact</span>
        </Link>
      </div>

      {/* register */}
      <div className="hidden sm:flex ">
        <a href="https://wa.me/2349167641202?text=Hey%20I'm%20interested%20in%20joining%20the%20Skillphore%20community.">
          <button className="bg-[#CCAB00] text-white px-6 py-2">
            Join Community
          </button>
        </a>
      </div>

      {/* hamburger menu */}
      <div
        className="sm:hidden flex bg-[#CCAB00] p-1 text-white"
        onClick={() => setDisplaySideMenu(!displaySideMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
    </motion.nav>
  );
};

export default Navbar;
