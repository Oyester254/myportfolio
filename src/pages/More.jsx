import React from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
// rgba(255, 255, 255, 1)
const More = ({ onBack }) => {
  useEffect(() => {
    // On component mount, ensure page is scrolled to the top
    window.scrollTo(0, 0);

    // Optionally, you can save the scroll position on unmount
    const handleScroll = () => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up scroll event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 overflow-y-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <motion.section
        className="bg-cyan-900 rounded-lg shadow-lg p-auto max-w-[60%] overflow-y-auto m-auto overflow-x-hidden"
        style={{ maxHeight: "90vh", margin: "5vh 0" }} // Ensures the modal is centered with margin
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="w-full sm:flex sm:flex-col mx-2 ">
          <div className="w-full flex flex-col justify-center content-center px-4 py-4">
            <p className="text-designColor uppercase font-bold lg:text-xl">
              continuation
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              ...
            </h1>
            <p className="text-justify sm:text-[15px]  text-[12px] tracking-tight">
              Beyond my technical expertise, I am also an artist and graphic
              designer with a deep appreciation for the creative process. I find
              inspiration in analyzing artistic paintings and historical
              artifacts, where I explore the stories and cultural significance
              behind each piece. This passion for art and history fuels my
              creative work, allowing me to incorporate rich, historical
              perspectives and artistic sensibilities into my designs.
              <p className="py-4 text-justify sm:text-[15px]  text-[12px] tracking-tight">
                I am continuously learning and expanding my knowledge of
                history, as I believe that understanding the past is key to
                creating impactful and timeless work. Whether through visual art
                or digital design, I aim to merge creativity with analytical
                rigor, producing work that resonates on both an aesthetic and
                intellectual level. This holistic approach ensures that every
                project I take on is not only functional but also rich in
                meaning and artistry.
              </p>
            </p>
            <p className="py-8 text-justify sm:text-[15px]  text-[12px] tracking-tight">
              Proficient in multiple programming languages and development
              frameworks, ensuring efficient and innovative project
              delivery.languages and development frameworks, ensuring efficient
              and innovative project delivery
            </p>
            <div className="grid grid-cols-3 text-justify sm:text-[15px]  text-[12px] tracking-tight">
              <div>HTML</div>
              <div>REACT</div>
              <div>PYTHON</div>
              <div>NODE.JS</div>
              <div>PHP</div>
              <div>EXCEL</div>
              <div>SPSS</div>
              <div>Google Collab</div>
              <div>Tableau</div>
            </div>
          </div>
        </div>
      </motion.section>
      <button
        onClick={onBack}
        className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-fit px-6 py-3 m-4 flex items-center rounded-full text-white  "
      >
        Go Back
        <span className=" group-hover:rotate-90 duration-500">
          <MdOutlineKeyboardArrowRight size={25} />
        </span>
      </button>
    </motion.div>
  );
};

export default More;
