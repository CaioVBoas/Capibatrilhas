"use client";

import Image from "next/image";
import { blueRiverFaq, mapaRecife } from "assets";
import { motion, Variants } from "framer-motion";

const MotionImage = motion(Image);

export function FaqSection() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
<div id="faq" className="h-screen w-full flex bg-[#ffc107] relative overflow-hidden">

  {/* COLUNA ESQUERDA — TÍTULO + MAPA */}
  <motion.div
    className="flex flex-col pl-8 pt-3 relative z-10 w-1/2"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.1 }}
  >
    
    {/* TÍTULO */}
    <motion.h1
      className="text-[#2563EB] text-8xl font-thin leading-tight whitespace-nowrap mb-6"
      variants={itemVariants}
    >
      <span>Perguntas Frequentes</span>
    </motion.h1>

    <MotionImage
        src={mapaRecife}
        alt="Map Recife"
        width={10000}
        height={10000}
        className="object-contain select-none pointer-events-none  w-[140%] max-w-none ml-[-31px] -mt-2 origin-top-left"
        draggable={false}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
    />


  </motion.div>

  {/* RIO — NÃO TOQUEI EM NADA */}
  <Image
    src={blueRiverFaq}
    alt="Elemento do rio azul Capibatrilhas"
    width={560}
    height={600}
    className="absolute top-[-250px] left-10 ml-[832px] translate-y-2 object-contain select-none pointer-events-none"
    draggable={false}
  />
</div>

  );
}
