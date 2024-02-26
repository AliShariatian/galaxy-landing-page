"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
   title: string;
   src: string;
   width: number;
   height: number;
   index: number;
}

function SkillDataProvider({ src, width, height, title, index }: Props) {
   const { ref, inView } = useInView({
      triggerOnce: true,
   });

   const imageVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
   };

   const animationDelay = 0.3;

   return (
      <motion.div ref={ref} initial="hidden" variants={imageVariants} animate={inView ? "visible" : "hidden"} custom={index} transition={{ delay: index * animationDelay }} className="hover-scale">
         <Image src={src} width={width} height={height} alt="front-end skill" title={title} />
      </motion.div>
   );
}

export default SkillDataProvider;
