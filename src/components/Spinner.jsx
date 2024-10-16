import React from "react";
import SpinnerSvg from "../assets/Spinner.svg";

const Spinner = () => {
  return (
    <div className=" bg-black bg-opacity-50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50">
      <div>
        <img src={SpinnerSvg} alt="Loading..." className="h-28" />
      </div>
    </div>
  );
};

export default Spinner;
