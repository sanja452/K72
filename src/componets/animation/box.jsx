import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Box = (props) => {
  const currnentPath = useLocation().pathname;
  console.log(currnentPath);
  const boxRef = useRef(null);
  const pageRef =useRef(null)

  useGSAP(() => {
    const time = gsap.timeline();

    time.to(boxRef.current, {
      display: "block",
    });

    time.from(".box", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });

    time.to(".box", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });

    time.to(boxRef.current, {
      display: "none",
    });

    time.to(".box", {
      y: "0%",
    });

    gsap.from(pageRef.current,{
        opacity:0,
        delay:1.3,
        scale:2
    })
  }, [currnentPath]);
  return (
    <div>
      <div ref={boxRef} className="h-screen w-full fixed z-10 top-0">
        <div className=" h-screen w-full flex  ">
          <div className="box h-full w-1/5 bg-black"></div>
          <div className="box h-full w-1/5 bg-black"></div>
          <div className="box h-full w-1/5 bg-black"></div>
          <div className="box h-full w-1/5 bg-black"></div>
          <div className="box h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div 
       ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Box;
