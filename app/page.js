"use client";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Testimonies from "./sections/Testimonies";
import Values from "./sections/Values";
import ExploreCourses from "./sections/ExploreCourses";
import Mentorship from "./sections/Mentorship";
import FinancialAid from "./sections/FinancialAid";
import Footer from "./sections/Footer";
import Faqs from "./sections/Faqs";
import Skills from "./sections/Skills";
import { useEffect, useRef, useState } from "react";
import SideMenu from "./components/SideMenu";

export default function Home() {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const sectionRefs = {
    hero: useRef(null),
    exploreCourses: useRef(null),
    mentorship: useRef(null),
    mission: useRef(null),
    skills: useRef(null),
    values: useRef(null),
    financialAid: useRef(null),
    testimonies: useRef(null),
    faqs: useRef(null),
    footer: useRef(null),
  };

  useEffect(() => {
    const handleSmoothScroll = (e, targetId) => {
      e.preventDefault();
      if (sectionRefs[targetId].current) {
        window.scrollTo({
          top: sectionRefs[targetId].current.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const navbarLinks = document.querySelectorAll(".navbar-link");
    console.log(navbarLinks, "hjelek");
    navbarLinks.forEach((link) => {
      const targetId = link.getAttribute("data-target");
      console.log(targetId, "dskdlk");
      link.addEventListener("click", (e) => handleSmoothScroll(e, targetId));
    });
  }, []);

  return (
    <main className="h-auto bg-[#cacaca38] sm:px-[5rem] px-3 text-primaryText">
      {/* start navbar section*/}
      <section ref={sectionRefs.hero} id="hero">
        <Navbar
          displaySideMenu={displaySideMenu}
          setDisplaySideMenu={setDisplaySideMenu}
        />
      </section>
      {/* end navbar section */}

      {/* start side menu */}
      <SideMenu
        displaySideMenu={displaySideMenu}
        setDisplaySideMenu={setDisplaySideMenu}
      />
      {/* start side menu */}

      {/* start hero section */}
      <Hero />
      {/* end hero section */}

      {/* start explore courses */}
      <section ref={sectionRefs.exploreCourses} id="exploreCourses">
        <ExploreCourses />
      </section>
      {/* end explore courses */}

      {/* start mentorship */}
      <section ref={sectionRefs.mentorship} id="mentorship">
        <Mentorship />
      </section>
      {/* end mentorship */}

      {/* start mission section */}
      <Mission />
      {/* end mission section */}

      {/* start skills */}
      <Skills />
      {/* end skills */}

      {/* start values */}
      <Values />
      {/* end values */}

      {/* start financial aid */}
      <section ref={sectionRefs.financialAid} id="financialAid">
        <FinancialAid />
      </section>
      {/* end financial aid */}

      {/* start testimonies section */}
      <Testimonies />
      {/* end testimonies section */}

      {/* start frequently asked questions */}
      <Faqs />
      {/* end frequently asked questions */}

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </main>
  );
}
