import React from "react";
import Vedio from "./Vedio";

const HomeText = () => {
  return (
    <div
      className="
        uppercase
        text-white
        mt-90
        min-[956px]:mt-0
        text-center
        selection:bg-[#d3fd50]
        selection:text-black
      "
    >
      {/* Line 1 */}
      <div
        className="
          flex
          items-center
          justify-center
          font-[font1]
          font-light
          text-[clamp(42px,10vw,119px)]
          leading-[0.95]
        "
      >
        L'étincelle
      </div>

      {/* Line 2 */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          font-[font1]
          font-light
          text-[clamp(42px,10vw,119px)]
          leading-[0.95]
        "
      >
        <span>qui</span>

        <div
          className="
            h-[42px]
            w-[120px]
            overflow-hidden
            rounded-full
            -mt-1
            sm:h-[60px]
            sm:w-[150px]
            md:h-[90px]
            md:w-[190px]
            lg:h-[120px]
            lg:w-[240px]
            xl:h-[145px]
            xl:w-[260px]
            lg:-mt-3
          "
        >
          <Vedio />
        </div>

        <span>génère</span>
      </div>

      {/* Line 3 */}
      <div
        className="
          flex
          items-center
          justify-center
          font-[font1]
          font-light
          text-[clamp(42px,10vw,119px)]
          leading-[0.95]
        "
      >
        la créativité
      </div>
    </div>
  );
};

export default HomeText;
