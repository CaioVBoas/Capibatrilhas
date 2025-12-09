'use client';

import Image from "next/image";
import { endingRight } from "assets";
import { motion, Variants } from "framer-motion";

export function EndingSection() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  return (
    <div id="login" className="h-screen w-full flex bg-[#2563EB] relative overflow-hidden">
      

      <motion.div 
        className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative z-10 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
  

        <motion.h1 
          className="text-[#ffc107] text-7xl font-thin leading-tight"
          variants={itemVariants}
        >
          Sua jornada começa onde nasce o Oceano Atlântico:{" "}
          <br /><span className="bg-[#ffc107] text-[#2563EB] px-2 py-1 rounded font-extrabold">
            às margens do Capibaribe.
          </span>
        </motion.h1>

        <motion.button
          variants={itemVariants}
          className="
            px-16 py-6
            rounded-full text-4xl font-bold
            shadow-xl border bg-[#ffc107] hover:bg-[#FFFFFF] 
            hover:shadow-2xl hover:scale-105 transition text-black 
            hover:text-[#2563EB] 
             w-[70%]
          "
        >
          Volte a Explorar
        </motion.button>
      </motion.div>

  

      <motion.div
        variants={containerVariants}  
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative w-1/2 h-full overflow-hidden z-0 flex justify-end items-end"
      >
        <motion.div variants={itemVariants} className="absolute bottom-0 right-[-3px] h-full w-full">
          <Image
            src={endingRight}
            alt="Foto do Recife Antigo"
            fill
            className="object-cover select-none pointer-events-none"
            draggable={false}
            priority
          />
        </motion.div>
      </motion.div>

    </div>
  );
}
