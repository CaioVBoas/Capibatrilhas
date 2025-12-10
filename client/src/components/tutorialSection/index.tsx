"use client";

import { trilhasValemCapibas, crieRoles, premioNaMao } from "assets";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MotionImage = motion(Image);

export function TutorialSection() {
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
    <div id="tutorial" className="w-full flex h-[275vh] bg-[#2563EB] relative overflow-hidden">
      

      <motion.div 
          className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }} 
        >
    
          <motion.h1 
            className={`${outfit.className} text-[#ffc107] text-8xl leading-tight`}
            variants={itemVariants}
          >
            Tutorial
          </motion.h1>
      </motion.div>

    
    <div className="absolute top-[150px] ml-2.5 left-[3px] flex flex-col w-[600px] z-20">
      
      <MotionImage
        src={trilhasValemCapibas}
        alt="Img#1 TUTORIAL"
        width={600}
        height={600}
        className="object-contain select-none pointer-events-none relative rounded-4xl border-2 border-black" 
        draggable={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p 
        className={`${dmSans.className} text-2xl leading-tight mt-4 w-full font-extrabold text-[#2563EB] self-start pl-2 pr-4 text-justify bg-[#FFFFFF] shadow-lg p-4 rounded-lg border-4 border-black`}
        style={{ WebkitTextStroke: '0.5px black' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        <span className="underline underline-offset-4 decoration-2">
            TRILHAS QUE VALEM CAPIBAS:
        </span> <br />

        <span className="font-medium"> 
        Escolha (ou crie) trilhas temáticas, complete desafios e acumule Capibas. Quanto mais você explora, mais você ganha!
        </span>

      </motion.p>

    </div>

    <div className="absolute top-[750px] ml-[750px] left-[3px] flex flex-col w-[600px] z-20">
      
      <MotionImage
        src={crieRoles}
        alt="Img#2 TUTORIAL"
        width={600}
        height={600}
        className="object-contain select-none pointer-events-none relative rounded-4xl border-2 border-black" 
        draggable={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p 
        className={`${dmSans.className} text-2xl leading-tight mt-3 w-full font-extrabold text-[#2563EB] self-start text-justify pl-2 pr-4 bg-[#FFFFFF] shadow-lg  p-4 rounded-lg border-4 border-black`}
        style={{ WebkitTextStroke: '0.5px black' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        <span className="underline underline-offset-4 decoration-2">
            CRIE ROLÊS E DESAFIE AMIGOS:
        </span> <br />

        <span className="font-medium"> 
            Monte seus próprios roteiros personalizados, convide a galera para completar suas trilhas e desbloqueie Insígnias exclusivas de cidadania.
        </span>

      </motion.p>
      
    </div>

    <div className="absolute top-[1300px] ml-2.5 left-[3px] flex flex-col w-[600px] z-20">
      
      <MotionImage
        src={premioNaMao}
        alt="Img#3 TUTORIAL"
        width={600}
        height={600}

        className="object-contain select-none pointer-events-none relative rounded-4xl border-2 border-black"
        draggable={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p 
        className={`${dmSans.className} text-2xl leading-tight mt-4 w-full font-extrabold text-[#2563EB] self-start text-justify pl-2 pr-4 bg-[#FFFFFF] shadow-lg p-4 rounded-lg border-4 border-black`}
        style={{ WebkitTextStroke: '0.5px black' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        <span className="underline underline-offset-4 decoration-2">
            CAPIBA NA CONTA, PRÊMIO NA MÃO:
        </span> <br />

        <span className="font-medium"> 
        Juntou, trocou! Use suas Capibas acumuladas para resgatar diversos prêmios com os Parceiros Capiba, criando experiências únicas pela cidade.
        </span>

      </motion.p>

    </div>

    </div>
  )}