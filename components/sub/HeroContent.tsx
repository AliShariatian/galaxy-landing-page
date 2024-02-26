"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ShimmerBtn from "../shimmerButton/ShimmerBtn";
import { Inter } from "next/font/google";

const fontInter = Inter({ subsets: ["latin"] });

function HeroContent() {
   return (
      <motion.div initial="hidden" animate="visible" className="flex items-center justify-center px-10 md:px-20 mt-52 w-full z-20">
         <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div variants={slideInFromTop} className="welcome-box p-3 border border-[#7042f88b] opacity-90">
               <SparklesIcon className="text-[#b49bff] mr-[10px] size-5" />
               <h2 className="welcome-text font-bold text-[13px]">Front-end Developer</h2>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.2)} className={`${fontInter.className} flex flex-col mt-2 text-3xl md:text-6xl font-bold text-white max-w-[600px] size-auto`}>
               <span>
                  Providing<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>project experience
               </span>
            </motion.p>

            <motion.p variants={slideInFromLeft(0.3)} className="text-lg text-gray-400 my-5 max-w-[600px]">
               I'm a Front-end Developer with experience in Website development. Check out my projects and skills.
            </motion.p>
            <motion.a href="#skills" variants={slideInFromLeft(0.5)} className="max-w-[200px]">
               <ShimmerBtn text="Learn More!" />
            </motion.a>
         </div>
         <motion.div variants={slideInFromRight(0.3)} className=" hidden md:flex md:size-64 lg:size-full justify-center items-center">
            <Image src="/img/mainIconsdark.svg" alt="web-develope-tools" width={650} height={650} />
         </motion.div>
      </motion.div>
   );
}

export default HeroContent;
