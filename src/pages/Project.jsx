
import React from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "../componets/Project/ProjectCard";

import image1 from "../assets/img1.png";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpg";
import image9 from "../assets/img9.jpg";
import image10 from "../assets/img10.jpg";
import image11 from "../assets/img11.jpg";
import image12 from "../assets/img12.jpg";
import image13 from "../assets/img13.jpg";
import image14 from "../assets/img14.jpg";
import image15 from "../assets/img15.jpg";
import image16 from "../assets/img16.jpg";
import image17 from "../assets/img17.jpg";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const project = [
    { imge1: image1, imge2: image2 },
    { imge1: image3, imge2: image4 },
    { imge1: image5, imge2: image6 },
    { imge1: image7, imge2: image8 },
    { imge1: image9, imge2: image10 },
    { imge1: image11, imge2: image12 },
    { imge1: image13, imge2: image14 },
    { imge1: image15, imge2: image16 },
    { imge1: image17 },
  ];

  useGSAP(() => {
    gsap.from(".imgCard", {
      height: "100px",

      stagger: {
        amount: 0.4,
      },

      scrollTrigger: {
        trigger: ".card",
        start: "top 90%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div
      className="
        pt-32
        sm:pt-40
        md:pt-52
        lg:pt-64
        px-3
        sm:px-5
        md:px-8
        overflow-x-hidden
      "
    >
      {/* TITLE */}

      <div
        className="
          font-[font2]
          uppercase
          text-[clamp(55px,12vw,141px)]
          leading-[0.9]
        "
      >
        <h1>projets</h1>
      </div>

      {/* PROJECT CARDS */}

      <div
        className="
          mt-8
          sm:-mt-4
          md:-mt-10
          lg:-mt-2
          card
        "
      >
        {project.map((elem, index) => (
          <div
            key={index}
            className="
              w-full
              h-[22rem]
              sm:h-[24rem]
              md:h-[25rem]
              imgCard
              flex
              flex-col
              md:flex-row
              gap-3
              mb-3
            "
          >
            <ProjectCard
              imge1={elem.imge1}
              imge2={elem.imge2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

