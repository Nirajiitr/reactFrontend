import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
const About = () => {
  return (
    <div className="w-full  bg-[#CDEA68] rounded-2xl text-black">
      <p className=" p-20 mr-52 text-5xl ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </p>
      <div className=" w-full flex border-y-2 border-[#868c72] py-5 justify-between px-20">
        <div className="w-[40%]">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-[20%] flex flex-col gap-5 pb-20 h-80">
          <p className="h-32">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="w-[20%] flex flex-col gap-5">
          <div className="h-32 relative">
            <p className=" absolute bottom-0 left-0">S:</p>
          </div>

          <div className="flex flex-col gap-1">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>

      <div className="h-96 justify-between items-start px-20  py-4 flex w-full">
        <div className="flex flex-col ">
          <h1 className="text-6xl ">Our approach:</h1>

          <button className="text-left w-52 mt-10 h-14 flex items-center gap-4 bg-black text-white rounded-full p-4 px-10 group">
            <div>Read more</div>
            <CgArrowTopRightO className="text-white size-2 bg-white cursor-pointer mx-auto ease-linear duration-200 rounded-full group-hover:size-8 group-hover:bg-black" />
          </button>
        </div>
        <div className=" h-full  ">
          <img
            className="object-cover h-full rounded-md "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
