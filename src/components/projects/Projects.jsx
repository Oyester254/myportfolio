import React, { useState } from "react";
import Title from "../../layouts/Title";
import Art from "../../pages/Art";
import Math from "../../pages/Math";
import Web from "../../pages/Web";
import Data from "../../pages/Data";
import Graphics from "../../pages/Graphics";

const Projects = () => {
  const [artNav, setartNav] = useState(false);
  const [mathNav, setmathNav] = useState(false);
  const [datNav, setdatNav] = useState(false);
  const [webNav, setwebNav] = useState(false);
  const [graphicsNav, setgraphicsNav] = useState(false);
  const handleArt = () => {
    setartNav(true);
  };
  const handleMath = () => {
    setmathNav(true);
  };
  const handleDat = () => {
    setdatNav(true);
  };

  const handleWeb = () => {
    setwebNav(true);
  };
  const handleGraphics = () => {
    setgraphicsNav(true);
  };
  const handleExitArt = () => {
    setartNav(false);
  };
  const handleExitMath = () => {
    setmathNav(false);
  };
  const handleExitWeb = () => {
    setwebNav(false);
  };
  const handleExitDat = () => {
    setdatNav(false);
  };
  const handleExitGraphics = () => {
    setgraphicsNav(false);
  };

  return (
    <section
      id="projects"
      className="w-full py-10 px-10  mx-2 border-b-[1px] border-b-gray-600 bg-bgColor"
    >
      <Title title="Projects" des="My Projects" />
      <div className="">
        <div className="sm:grid grid-cols-3 gap-2 ">
          {/* //flex flex-col gap-4 */}
          <div className="w-full text-[15px] sm:text-lg">
            <button
              onClick={handleArt}
              className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-60 px-6 py-3 font-bodyFont my-2 flex justify-center items-center rounded-sm text-white h-20 "
            >
              Artworks Projects
              <span className=" group-hover:rotate-90 duration-500"></span>
            </button>
            <>{artNav && <Art handleExit={handleExitArt} />}</>
          </div>
          <div className="w-full text-[15px] sm:text-lg">
            <button
              onClick={handleMath}
              className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-60 px-6 font-bodyFont py-3 my-2 flex justify-center items-center rounded-sm text-white h-20 "
            >
              Mathematics
              <span className=" group-hover:rotate-90 duration-500"></span>
            </button>
            <>{mathNav && <Math handleExit={handleExitMath} />}</>
          </div>
          <div className="w-full text-[15px] sm:text-lg">
            <button
              onClick={handleDat}
              className=" group bg-gradient-to-r from-teal-500 to-blue-500 font-bodyFont w-60 px-6 py-3 my-2 flex justify-center items-center rounded-sm text-white h-20 "
            >
              Data Analysis
              <span className=" group-hover:rotate-90 duration-500"></span>
            </button>
            <>{datNav && <Data handleExit={handleExitDat} />}</>
          </div>
          <div className="w-full text-[15px] sm:text-lg">
            <button
              onClick={handleWeb}
              className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-60 font-bodyFont px-6 py-3 my-2 flex items-center justify-center rounded-sm text-white h-20  "
            >
              Web Development
              <span className=" group-hover:rotate-90 duration-500"></span>
            </button>
            <>{webNav && <Web handleExit={handleExitWeb} />}</>
          </div>
          <div className="w-full text-[15px] sm:text-lg">
            <button
              onClick={handleGraphics}
              className=" group bg-gradient-to-r from-teal-500 to-blue-500 w-60 font-bodyFont px-6 py-3 my-2 flex items-center justify-center rounded-sm text-white h-20  "
            >
              Graphics Design
              <span className=" group-hover:rotate-90 duration-500"></span>
            </button>
            <>{graphicsNav && <Graphics handleExit={handleExitGraphics} />}</>
          </div>
          {/* <div className="w-full  group bg-gradient-to-r from-teal-500 to-blue-500  px-6 py-3 my-2 flex justify-center items-center rounded-sm text-white ">
          <Test />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
