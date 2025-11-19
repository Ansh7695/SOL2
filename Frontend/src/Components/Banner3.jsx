import React from "react";
import { Assets } from "../assets/Assets";

const Banner3 = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <img
        src={Assets.Ib4} 
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner3;
