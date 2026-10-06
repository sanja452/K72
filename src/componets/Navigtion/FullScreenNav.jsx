import React, { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const { isOpen, setIsOpen } = useContext(NavContext);
function openAnimation() {
  const tl = gsap.timeline();
  tl.to(".fullscreennav", { display: "block", duration: 0 });
  tl.to(".stairing", { height: "100%", stagger: { amount: -0.2 } });
  tl.to(".link", { opacity: 1, rotateX: 0, stagger: { amount: 0.2 } });
  return tl;
}

function closeAnimation() {
  const tl = gsap.timeline();
  tl.to(".link", { opacity: 0, rotateX: 90, stagger: { amount: 0.2 } });
  tl.to(".stairing", { height: 0, stagger: { amount: 0.1 } });
  tl.to(".fullscreennav", { display: "none", duration: 0 });
  return tl;
}
  useGSAP(() => {
    if (isOpen) {
      openAnimation();
    } else {
      closeAnimation();
    }
  }, [isOpen]);
  return (
 
<div
  ref={fullScreenRef}
  id="fullScreennav"
  className="fullscreennav z-40 hidden h-screen uppercase w-full absolute text-white overflow-hidden"
>
      <div ref={fullNavLinkRef} className="h-screen w-full fixed flex">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div className="relative">
        <div className="z-10 flex items-start justify-between top-0 fixed w-full overflow-hidden">
          {/* Logo */}
          <div className="m-3 w-30">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              />
            </svg>
          </div>

          {/* Close Button */}
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className=" icon relative  h-24 w-30 cursor-pointer flex items-center justify-center"
          >
            <div className="absolute h-28 w-0.5  rotate-45 bg-[#D3FD50]"></div>

            <div className="absolute h-28 w-0.5 -rotate-45 bg-[#D3FD50]"></div>
          </div>
        </div>

        <div className=" py-40">
          {/* 1st */}
          <div id="navlinkes" className="">
            <div id="link" className=" link relative origin-top ">
              <h1 className="border-t-2 border-[#808080] font-[font2]        text-8xl text-center  ">
                Project
              </h1>
              <div className=" movelink   absolute top-0 flex w-max bg-[#D3fd50]">
                <div className="movexflex flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>

                <div className="movexlink flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2sec*/}
          <div id="navlinkes" className="">
            <div id="link" className=" link relative origin-top ">
              <h1 className="border-t-2 border-[#808080] font-[font2]        text-8xl text-center  ">
                Agence
              </h1>
              <div className=" movelink   absolute top-0 flex w-max bg-[#D3fd50]">
                <div className="movexflex flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout savoir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3 object-center"
                    src="https://k72.ca/images/teamMembers/Michele_640x290.jpg?w=640&h=290&s=fc2d5857a514aaf26bec2eb052a2d734"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout savoir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365"
                    alt=""
                  />
                </div>

                <div className="movexlink flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3thr */}
          <div id="navlinkes" className="">
            <div id="link" className=" link relative origin-top ">
              <h1 className="border-t-2 border-[#808080] font-[font2]        text-8xl text-center  ">
                contact
              </h1>
              <div className=" movelink   absolute top-0 flex w-max bg-[#D3fd50]">
                <div className="movexflex flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    POUR ENVOYER UN FAX
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    POUR ENVOYER UN FAX
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>

                <div className="movexflex flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4fort */}

          <div id="navlinkes" className="">
            <div id="link" className=" link relative origin-top ">
              <h1 className="border-y-2 border-[#808080] font-[font2]        text-8xl text-center  ">
                blogue
              </h1>
              <div className=" movelink   absolute top-0 flex w-max bg-[#D3fd50]">
                <div className="movexflex flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                    alt=""
                  />
                </div>

                <div className="movexflex flex items-center flex-nowrap">
                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                    alt=""
                  />

                  <h2 className="whitespace-nowrap font-[font2] text-8xl text-black">
                    Pour tout voir
                  </h2>

                  <img
                    className="h-20 w-70 mt-1 rounded-full shrink-0 px-3"
                    src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
