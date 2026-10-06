
import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div
      className="
        flex
        justify-center
        items-center
        gap-4
        sm:gap-6
        md:gap-7
        font-[font2]
        font-semibold
        text-white
        select-none
        px-4
      "
    >
      {/* Project */}
      <div
        className="
          uppercase
          border-[3px]
          border-white
          rounded-full
          hover:text-[#d3fd50]
          hover:border-[#d3fd50]
          transition-colors
          duration-300
          leading-none
          text-[clamp(22px,5vw,65px)]
          px-5
          py-3
          sm:px-6
          sm:py-3
          md:px-7
          md:py-4
        "
      >
        <Link to="/project">Project</Link>
      </div>

      {/* Agence */}
      <div
        className="
          uppercase
          border-[3px]
          border-white
          rounded-full
          hover:text-[#d3fd50]
          hover:border-[#d3fd50]
          transition-colors
          duration-300
          leading-none
          text-[clamp(22px,5vw,65px)]
          px-5
          py-3
          sm:px-6
          sm:py-3
          md:px-7
          md:py-4
        "
      >
        <Link to="/agence">Agence</Link>
      </div>
    </div>
  );
};

export default HomeBottom;

