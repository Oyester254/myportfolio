import React from "react";
import { useState } from "react";

const Test = () => {
  const [view, viewSet] = useState(false);
  const displayTest = () => {
    viewSet(!view);
  };
  return (
    <div>
      <button onClick={displayTest}></button>
      {view ? (
        <div className="">
          <embed
            src="Formal Analysis.pdf#toolbar=0"
            type="application/pdf"
            width="500px"
            height="500px"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Test;
