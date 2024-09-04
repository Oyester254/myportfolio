import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-10 mx-5">
      <h3 className="text-5m uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize sm:text-left text-center">
        {des}
      </h1>
    </div> //title and des are passed as props from the parent components
  );
};

export default Title;
