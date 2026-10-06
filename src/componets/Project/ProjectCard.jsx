
import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {/* IMAGE 1 */}

      <div
        className="
          w-full
          md:w-1/2
          h-full
          group
          relative
          overflow-hidden
          rounded-none
          hover:rounded-[30px]
          transition-all
          duration-300">
        <img
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
          src={props.imge1}
          alt=""
        />

        <div
          className="
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/20
            p-4
          "
        >
          <h1
            className="
              uppercase
              text-[clamp(18px,3vw,48px)]
              font-[font2]
              text-white
              border-2
              border-white
              rounded-full
              px-4
              py-2
              leading-none
              text-center
              whitespace-nowrap
            "
          >
            voir le project
          </h1>
        </div>
      </div>

      {/* IMAGE 2 */}

      {props.imge2 && (
        <div
          className="
            w-full
            md:w-1/2
            h-full
            group
            relative
            overflow-hidden
            rounded-none
            hover:rounded-[30px]
            transition-all
            duration-300
          "
        >
          <img
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            src={props.imge2}
            alt=""
          />

          <div
            className="
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-black/20
              p-4
            "
          >
            <h1
              className="
                uppercase
                text-[clamp(18px,3vw,48px)]
                font-[font2]
                text-white
                border-2
                border-white
                rounded-full
                px-4
                py-2
                leading-none
                text-center
                whitespace-nowrap
              "
            >
              voir le project
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

