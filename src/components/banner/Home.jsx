import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaPython, FaReact } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { SiFiverr, SiTailwindcss } from "react-icons/si";
import Title from "../../layouts/Title";
import { BsFiletypeSql, BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Data Analyst", "Web Developer", " Mathematician"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const links = [
    {
      id: 1,
      child: (
        <>
          Fiverr <SiFiverr size={30} />
        </>
      ),
      href: "https://www.fiverr.com/login",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Linkedin <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/misheck-mwangi-345804208/",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:misheckmwas97@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  const soc = [
    {
      id: 1,
      child: <SiFiverr />,
      href: "https://events.fiverr.com/?source=explore-tab",
    },

    {
      id: 2,
      child: <HiOutlineMail />,
      href: "mailto:misheckmwas97@gmail.com",
    },
    {
      id: 3,
      child: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/misheck-mwangi-345804208/",
    },
  ];
  const languages = [
    {
      id: 1,
      child: <FaReact />,
    },

    {
      id: 2,
      child: <FaPython />,
    },
    {
      id: 3,
      child: <SiTailwindcss />,
    },
    {
      id: 3,
      child: <BsFiletypeSql />,
    },
  ];
  return (
    <section
      id="home"
      className="w-full py-10 px-10 border-b-[1px]  border-b-gray-600 mx-2"
    >
      <Title title="Portfolio" des="" />
      <div className="w-full flex flex-col items-center">
        <h1 className="sm:text-4xl md:text-6xl text-4xl font-bold md:py-4 text-center">
          I'm {""}
          <span className="text-designColor">Mish_254+</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          <span>{text}</span>

          <Cursor>
            {""}
            cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f"
          </Cursor>
        </h2>
        <p className="w-10/12 text-base font-bodyFont text-center sm:text-[16px]  text-[12px] tracking-tight p-6">
          Skilled mathematician, web developer, and data analyst; excels in
          problem-solving, coding, data visualization, and creating efficient
          web solutions. Looking forward to actualize your designs using code!
        </p>
        <a href="https://www.linkedin.com/in/misheck-mwangi-345804208/">
          <button className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-fit px-6 py-3 my-2  flex items-center rounded-md text-white text-[15px] sm:text-md ">
            ReadMore
            <span className=" group-hover:rotate-90 duration-500">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </button>
        </a>
        <div className="w-full sm:flex mt-10 h-auto px-2 py-5">
          <div className="sm:w-6/12 w-full h-full flex flex-col items-center">
            <h2 className="text-base uppercase text-center mb-4 font-semibold sm:text-lg  text-[12px] tracking-tight">
              My Social Links
            </h2>
            <div className="flex gap-2 justify-center items-center py-2 ">
              <ul className="flex justify-center items-center gap-4">
                {soc.map(({ href, child, id }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className="bannerIcon  ">{child}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* <span className="bannerIcon ">
                <SiFiverr />
              </span> */}
              {/* <span className="bannerIcon">
                <HiOutlineMail />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
              note that its only the ul that can flex the items since its the parent element in this case
              the commented code is usable -remove the content of ul and paste it there + also remove the array soc */}
            </div>
          </div>
          <div className="sm:w-6/12 w-full h-full flex flex-col items-center">
            <h2 className="text-base uppercase text-center mb-4 mt-2 font-semibold sm:text-[15px]  text-[12px] tracking-tight">
              Proficient In
            </h2>
            <div className="flex gap-2 justify-center items-center py-2 ">
              <ul className="flex  justify-center items-center gap-4">
                {languages.map(({ child, id }) => (
                  <li key={id}>
                    <span className="bannerIcon  ">{child}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" flex flex-col top-[35%] left-0 fixed ">
          {/*this is where the links are generated using map function
          the parameter of the map function are distructured to individual objects for simplicity
          the step involves first creating a single item then using it as a basis to create other similar items impelementing using arrays and items as objects
          id helps in looping through the array to generate the links */}
          <ul>
            {links.map(({ id, href, style, download, child }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-teal-500 to-blue-500" +
                  "" +
                  style
                }
              >
                <a
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center w-full text-white font-bold"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
// the styles on bg-gradient-to-r from-teal-500 to-blue-500 in the link tag can be replaced by a simple bg-white
