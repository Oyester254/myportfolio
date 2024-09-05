 import React from "react";
import { useState } from "react";
import { FaRProject } from "react-icons/fa";

const Data = ({ handleExit }) => {
  const handleExitClick = () => {
    handleExit();
  };

  const [view, viewData] = useState(false);
  const displayData = () => {
    viewData(!view);
  };
  const [view2, viewData2] = useState(false);
  const displayData2 = () => {
    viewData2(!view2);
  };
  return (
    <div className="h-auto w-full bg-[#afdde5] rounded-md my-4 mx-2 relative">
      <button
        onClick={handleExitClick}
        className="group bg-gradient-to-r top-right-b from-teal-500 to-blue-500 w-fit rounded-sm absolute top-0 right-0 h-10 px-2 py-2 m-2   text-white"
      >
        Exit
        <span className="group-hover:rotate-90 duration-500"></span>
      </button>
      <h1 className=" text-2xl text-teal-950 font-bold p-2  text-left sm:text-center">
        Data Analysis
      </h1>
      {/* </h1> this button exits the art analysis page it receives handleExit parameter as a propss from project component */}

      <div className="grid sm:grid-cols-1 gap-2 m-2 pb-10 pl-2 pr-2">
        <div className="bg-white w-full h-auto m-auto p-2 shadow-2xl rounded-sm ">
          <h3>Project 1</h3>
          <button
            onClick={displayData}
            className="group bg-gradient-to-r from-teal-500 to-blue-500 w-fit h-4 p-4 mb-2 flex justify-center items-center rounded-md text-white"
          >
            <FaRProject className="text-white " />
            <p className="p-2"> {view ? "Close " : "View"}</p>
          </button>
          <div className="p-2">
            {view ? (
              <div className="aspect-video ">
                <iframe
                  title="dat1"
                  src="/myportfolio/loan.pdf#toolbar=0"
                  type="application/pdf"
                  className="w-full h-full"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="bg-slate-100 w-full h-auto m-auto p-2  shadow-2xl rounded-sm">
          <h3>Project 2</h3>
          <button
            onClick={displayData2}
            className="group bg-gradient-to-r from-teal-500 to-blue-500 w-fit h-4 p-4 mb-2 flex justify-center items-center rounded-md text-white"
          >
            <FaRProject className="text-white " />
            <p className="p-2"> {view2 ? "Close " : "View"}</p>
          </button>
          <div className="p-2">
            {view2 ? (
              <div className="aspect-video">
                <iframe
                  title="dat2"
                  src="myportfolio/cle.pdf"
                  type="application/pdf"
                  className="w-full h-full"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Data;
