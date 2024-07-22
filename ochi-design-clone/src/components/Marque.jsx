import React from "react";
import {motion} from "framer-motion"
const Marque = () => {
  return (
    <div className="bg-[#004D43] w-full overflow-hidden py-20 rounded-t-2xl">
      <div className="border-t-[1px] border-b-[1px] border-[#DDDDDD] flex font-bold gap-10 pb-7 whitespace-nowrap leading-none">
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease :"linear", repeat: Infinity, duration: 10 }} className="text-[15vw]">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease :"linear", repeat: Infinity, duration: 10 }} className="text-[15vw]">WE ARE OCHI</motion.h1>
      </div>
    </div>
  );
};

export default Marque;
