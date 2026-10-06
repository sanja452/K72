import React from "react";

const Vedio = () => {
  return (
    <div className="w-full h-full ">
      <video
        autoPlay loop muted
        className="w-full h-full object-cover"
        src="/video.mp4"
      />
    </div>
  );
};

export default Vedio;

