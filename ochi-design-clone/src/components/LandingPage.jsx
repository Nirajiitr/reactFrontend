import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && <div className="w-32 text-center bg-lime-500 h-[6vw] rounded-sm"></div>}
                <h1
                  key={index}
                  className="uppercase leading-[7vw] tracking-tighter font-bold text-9xl"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-12 py-5 px-20 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div className="start flex gap-2 items-center ">
          <div className=" cursor-pointer border-[1px] border-zinc-700 text-md p-1 px-3 rounded-full uppercase">
            Start the project
          </div>
          <div className="cursor-pointer h-10 w-10 flex items-center justify-center border-[1px] border-zinc-700 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
