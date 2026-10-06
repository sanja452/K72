
import React, { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const sectionRef = useRef(null);
  const imgDivRef = useRef(null);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      y: 600,
      scale: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div className="overflow-x-clip">
      {/* ================= SECTION 1 ================= */}

      <div
        ref={sectionRef}
        className="
          section1
          relative
          min-h-[200vh]
          py-1
        "
      >
        {/* IMAGE */}

        <div
          ref={imgDivRef}
          className="
            absolute
            z-0
            top-[18vh]
            left-1/2
            -translate-x-1/2
            w-[55vw]
            max-w-[420px]
            h-[65vw]
            max-h-[560px]
            sm:w-[45vw]
            sm:h-[60vw]
            md:w-[38vw]
            md:h-[50vw]
            lg:w-[32vh]
            lg:h-[53vh]
          "
        >
          <img
            className="
              w-full
              h-full
              object-cover
              rounded-2xl
            "
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="Team member"
          />
        </div>

        {/* TEXT */}

        <div className="relative z-10 font-[font2]">
          {/* TITLE */}

          <div
            className="
              mt-[55vh]
              px-3
              sm:px-5
              md:px-8
              lg:text-[20vh]
            "
          >
            <h1
              className="
                text-center
                
                uppercase
                font-normal
                selection:bg-[#d3fd50]
                selection:text-black
                text-[clamp(48px,19vw,221px)]
                leading-[0.85]
               
              "
            >
              Soixan7e Douze
            </h1>
          </div>

          {/* DESCRIPTION */}

          <div
            className="
              mt-16
              sm:mt-20
              md:mt-24
              ml-auto
              w-full
              sm:w-[85%]
              md:w-[70%]
              lg:w-[60%]
              px-6
              sm:px-8
              md:px-10
              lg:px-0
              lg:pr-10
            "
          >
            <p
              className="
                text-[18px]
                sm:text-[20px]
                md:text-[24px]
                lg:text-[30px]
                leading-[1.45]
                font-normal
                select-none
              "
            >
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante.
              Elle a des valeurs, une personnalité, une histoire. Si on oublie
              ça, on peut faire de bons chiffres à court terme, mais on la tue
              à long terme. C’est pour ça qu’on s’engage à donner de la
              perspective, pour bâtir des marques influentes.
            </p>
          </div>

          {/* EXPERTISE */}

          <div
            className="
              select-none
              mt-16
              sm:mt-20
              md:mt-24
              px-6
              sm:px-10
              md:px-16
              lg:px-20
            "
          >
            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                gap-8
                sm:gap-12
                md:gap-20
                w-full
                sm:w-[80%]
                md:w-[65%]
              "
            >
              <div className="w-full sm:w-1/2">
                <h1
                  className="
                    font-[font2]
                    text-xl
                    sm:text-2xl
                  "
                >
                  Expertise
                </h1>
              </div>

              <div
                className="
                  font-[font2]
                  text-xl
                  sm:text-2xl
                "
              >
                <h1>Stratégie</h1>
                <h1>Publicité</h1>
                <h1>Branding</h1>
                <h1>Design</h1>
                <h1>Contenu</h1>
              </div>
            </div>
          </div>
        </div>

        {/* THREE TEXT COLUMNS */}

        <div
          className="
            w-full
            selection:bg-[#d3fd50]
            selection:text-black
            mt-20
            sm:mt-28
            md:mt-32
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              gap-6
              md:gap-10
              items-stretch
              p-5
              sm:p-8
              md:p-10
            "
          >
            <p
              className="
                p-4
                sm:p-6
                md:p-10
                font-[font2]
                text-[1rem]
                sm:text-[1.05rem]
                md:text-[1.1rem]
                w-full
                md:w-1/3
              "
            >
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses
              formes.
            </p>

            <p
              className="
                p-4
                sm:p-6
                md:p-10
                font-[font2]
                text-[1rem]
                sm:text-[1.05rem]
                md:text-[1.1rem]
                w-full
                md:w-1/3
              "
            >
              Notre création_ bouillonne dans un environnement où le talent a
              le goût d’exploser. Où on se sent libre d’être la meilleure
              version de soi-même.
            </p>

            <p
              className="
                p-4
                sm:p-6
                md:p-10
                font-[font2]
                text-[1rem]
                sm:text-[1.05rem]
                md:text-[1.1rem]
                w-full
                md:w-1/3
              "
            >
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2 ================= */}

      <div className="wrapper transition-all">
        {/* STICKY TEXT */}

        <div
          className="
            sticky
            top-0
            z-50
            h-0
            flex
            justify-center
            pt-2
            text-white
            pointer-events-none
            px-4
          "
        >
          <h1
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-[font2]
              tracking-tight
              leading-[120%]
              text-center
            "
          >
            Voir tous les projets
          </h1>
        </div>

        {/* PROJECT 1 */}

        <section
          className="
            h-screen
            w-full
            text-white
            grid
            place-content-center
            sticky
            top-0
          "
        >
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757"
              alt=""
            />
          </div>

          <div className="relative px-5">
            <h1
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-[font2]
                text-center
                tracking-tight
                leading-[120%]
              "
            >
              Opto-Réseau
            </h1>

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-[font2]
                text-center
                tracking-tight
                leading-[120%]
              "
            >
              On vous voit comme personne
            </h1>
          </div>
        </section>

        {/* PROJECT 2 */}

        <section
          className="
            h-screen
            w-full
            text-white
            grid
            place-content-center
            sticky
            top-0
            rounded-t-2xl
            overflow-hidden
          "
        >
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
              alt=""
            />
          </div>

          <div className="relative px-5">
            <h1
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-[font2]
                text-center
                tracking-tight
                leading-[120%]
              "
            >
              Lamajeure
            </h1>

            <h1
              className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                font-[font2]
                text-center
                tracking-tight
                leading-[120%]
              "
            >
              Lamajeure
            </h1>
          </div>
        </section>

        {/* PROJECT 3 */}

        <section
          className="
            h-screen
            w-full
            text-white
            grid
            place-content-center
            sticky
            top-0
          "
        >
          <div className="absolute inset-0">
            <img
              className="
                h-full
                w-full
                object-cover
                rounded-t-3xl
              "
              src="https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
              alt=""
            />
          </div>

          <div className="relative px-5">
            <h1
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-[font2]
                text-center
                tracking-tight
                leading-[120%]
              "
            >
              Lassonde
            </h1>

            <h1
              className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                font-[font2]
                text-center
                tracking-tight
                leading-[120%]
              "
            >
              Fruité
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Agence;

