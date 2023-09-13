import React, { useState } from "react";
import { motion } from "framer-motion";

import Faq from "../components/Faq";
import Btn from "../components/Btn";
import { animationOne, animationThree } from "../animation";

function AccordionContainer() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question:
        "I have professional certificates but I still want to work on a few more projects, can I join your community for free?",
      answer:
        "Yes you can join for free where you will join other aspiring data analysts who are also doing data analysis projects",
    },
    {
      id: 2,
      question: "What are your paid services?",
      answer:
        "Our paid services include the following:\n\n- We will help you get financial aid for Data Analytics certificate courses. (This is optional. Also, the course is for a lifetime so even if your membership expires, you'll still have the course)\n- One on one mentorship for guidance and accountability\n- Access to the other groups in the community where you will sharpen other important skills like storytelling, presentation, formulating business questions, and giving recommendations besides learning Excel, SQL, etc.\n- Learn programming languages (Python, R) and do projects on them.\n- Help you build a portfolio website and your Resume (CV)\n- You will also get one-on-one reviews and advise from Professionals in the field.\n\nThese services cost 20,000 naira for 3 months (After which you renew your subscription)",
    },
    {
      id: 3,
      question:
        "As a beginner with no prior knowledge or experience, which course or tool should I learn first?",
      answer:
        "You should learn a professional certification course because they provide a clear roadmap of what you should learn from beginning to end and they offer certificates which increases your credibility. Examples of such courses include:\n\n- Google Data Analytics Certificate Course\n- IBM Data Analyst Professional Certificate Course\n- Microsoft Certified: Power BI Data Analyst Associate Course",
    },
    {
      id: 4,
      question: "Do I need a laptop to start learning?",
      answer:
        "Yes. Although, you can start learning with just your phone, you’ll need a laptop in the long run.",
    },
    {
      id: 5,
      question: "Do I need a degree to become a Data Analyst?",
      answer:
        "Not necessarily. Getting a certificate in Data Analysis is just as good.",
    },
    {
      id: 6,
      question: "Do I need any prior knowledge to start the beginner courses?",
      answer: "No you don’t.",
    },
    {
      id: 7,
      question:
        "How many certificates do I need to become a Professional Data Analyst?",
      answer: "One is more than enough. But you can get as much as you want.",
    },
    {
      id: 8,
      question: "How many projects do I need in my portfolio to land a job.",
      answer:
        "Having 3-4 projects where your core skills are showcased is a good start.",
    },
    {
      id: 9,
      question:
        "Do I need to learn to use all the tools in working with Data before I can start working on projects or sending out job applications?",
      answer:
        "It depends. But generally, having knowledge of Excel, SQL, Tableau, and Power BI is good enough.",
    },
    {
      id: 10,
      question: "Will I get a job within 6 months of learning the Data skills?",
      answer:
        "It depends on your commitment and speed. While there’s no guarantee, it’s possible.",
    },
    {
      id: 11,
      question: "Will being a Data Analyst make me rich?",
      answer:
        "It depends on the organization you work for and their renumeration. But Data Analytics on average is a high paying skill.",
    },
    {
      id: 12,
      question: "How long does it take to master all the data skills?",
      answer:
        "This depends on your commitment and the amount of time you give to it. Anywhere from 6 months to 2 years.",
    },
    {
      id: 13,
      question:
        "Will your community give me a job after I sign up and finish all learning paths?",
      answer:
        "While we cannot provide a job guarantee, we are committed to sharing job opportunities across our platforms and assisting our premium members in enhancing their CVs and preparing for interviews.",
    },
  ]);
  const [faqDisplay, setFaqDisplay] = useState(4);

  const handleAccordionClick = (clickedId) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => ({
        ...faq,
        isExpanded: faq.id === clickedId ? !faq.isExpanded : false,
      }))
    );
  };

  return (
    <div className="h-auto sm:mt-[4rem] mt-[1rem]">
      <motion.div
        variants={animationOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="heading-text text-center"
      >
        <h1>You have questions.</h1>
        <h1>We have answers.</h1>
      </motion.div>
      {faqs.slice(0, faqDisplay).map((faq, index) => (
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.01 }}
          onClick={() => handleAccordionClick(faq.id)}
          key={faq.id}
        >
          <Faq
            key={faq.id}
            answer={faq.answer}
            isExpanded={faq.isExpanded}
            question={faq.question}
          />
        </motion.div>
      ))}

      <div
        className="w-fit mx-auto py-10"
        onClick={() => {
          if (faqDisplay < faqs.length) {
            setFaqDisplay(faqDisplay + 4);
          }
        }}
      >
        <motion.div
          variants={animationThree}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Btn content="More Questions?" />
        </motion.div>
      </div>
    </div>
  );
}

export default AccordionContainer;
