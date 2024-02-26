"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

function SkillText() {
   return (
      <motion.div initial="hidden" animate="visible" className="w-full h-auto flex flex-col items-center justify-center">
         <motion.div variants={slideInFromTop} className="welcome-box text-lg font-bold p-3 border border-[#7042f88b] opacity-90">
            <SparklesIcon className="text-[#b49bff] mr-[10px] size-5" />
            <h3 className="welcome-text text-[13px]">Think better with NextJS</h3>
         </motion.div>
         <motion.p variants={slideInFromLeft(0.5)} className="text-3xl text-white font-medium mt-[10px] mb-[15px] text-center">
            Making apps with modern technologies
         </motion.p>
         <motion.p variants={slideInFromRight(0.5)} className="cursive text-xl text-gray-200 mb-10 mt-[10px] text-center">
            Never miss a task deadline or idea
         </motion.p>
      </motion.div>
   );
}

export default SkillText;
