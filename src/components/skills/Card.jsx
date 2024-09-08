import React from "react";

const Card = ({ title, des, icon, icon2 }) => {
  return (
    <div className="w-full text-white shadow-shadowThree bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl h-50 rounded-md flex items-center ">
      <div className="p-6 m-2 flex flex-col h-full gap-4 ">
        <div className="pb-2 flex flex-col  items-start">
          <span className="text-4xl text-designColor1 shadow-shadowTwo">
            {icon}
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-start ">
          <h2 className="text-xl sm:text-2xl font-titleFont font-bold text-white">
            {title}
          </h2>
          <p className="py-1 text-black font-bodyFont text-[8pt] text-justify  sm:text-[16px] whitespace-normal tracking-tight">
            {des}
            <span className=" flex pt-1 cursor-pointer text-white font-bold">
              {icon2}
              ...
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
