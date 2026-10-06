import React from "react";
import Vedio from "../componets/Home/Vedio";
import HomeText from "../componets/Home/HomeText";
import HomeBottom from "../componets/Home/HomeBottom";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
    <div className="w-screen h-screen fixed">
      <Vedio />
    </div>
    <div className="w-screen h-screen relative flex flex-col justify-between text-center">
     <HomeText/>
     <HomeBottom/>
    </div>

   

    </div>
  );
};

export default Home;