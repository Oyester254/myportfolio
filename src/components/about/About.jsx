import React from "react";
import Title from "../../layouts/Title";
import { d20 } from "../../assets/index";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const About = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="w-full py-10 px-10 border-b-[1px]  border-b-gray-600 mx-2"
    >
      <Title title="Profile" des="About Me" />
      <div className="w-full sm:flex mx-2 ">
        <div className="w-full flex justify-center items-center mx-2">
          <img src={d20} alt="" className="w-[500px] rounded-lg mx-2 my-2" />
        </div>
        <div className="w-full flex flex-col justify-center content-center px-4 py-4">
          <p className="text-designColor uppercase font-bold lg:text-xl">
            Bsc. Holder Mathematics & Computer Science
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            My Profile
          </h1>
          <p className="text-left">
            I am a versatile professional with a strong foundation in
            mathematics, web development, and data analysis. My passion lies in
            blending analytical thinking with technical expertise to craft
            dynamic web solutions and insightful data visualizations. With
            proficiency in a wide array of programming languages and development
            frameworks, I approach each project with creativity, precision, and
            a commitment to excellence.ry.
          </p>
          <p className="py-8 text-left">
            I thrive on solving complex challenges and delivering impactful
            results. Whether it’s designing user-friendly web applications or
            extracting actionable insights from data, I bring a unique
            combination of skills that ensures innovative and efficient project
            delivery. My work is driven by a deep understanding of mathematics
            and a keen interest in leveraging the latest technologies to make a
            meaningful difference in every project I undertake.
          </p>
          <button
            onClick={onNavigate}
            className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md text-white  "
          >
            ReadMore
            <span className=" group-hover:rotate-90 duration-500">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
