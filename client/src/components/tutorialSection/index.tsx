"use client";

import { trilhasValemCapibas, crieRoles, premioNaMao } from "assets";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
            className="text-[#ffc107] text-8xl font-thin leading-tight"
            variants={itemVariants}
          >
            Tutorial
          </motion.h1>
      </motion.div>

      
      
      {/* <Image
          src={yellowRiverTutorial}
          alt="Elemento do rio amarelo TUTORIAL"
          width={3000}
          height={4000}
          className="absolute top-[-23px] ml-[15px] left-[3px] object-contain select-none pointer-events-none fade-up"
          draggable={false}
      /> */}
    
    <div className="absolute top-[250px] ml-[15px] left-[3px] flex flex-col w-[600px] z-20">
      
      <MotionImage
        src={trilhasValemCapibas}
        alt="Img#1 TUTORIAL"
        width={600}
        height={600}
        className="object-contain select-none pointer-events-none relative" 
        draggable={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p 
        className="text-2xl leading-tight mt-4 w-full font-extrabold text-[#2563EB] self-start pl-2 pr-4 text-justify bg-[#ffc107] p-4 rounded-lg"
        
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        <span className="underline underline-offset-4 decoration-2">
            TRILHAS QUE VALEM CAPIBAS:
        </span> <br />

        <span className="font-medium"> 
           Monte seus próprios roteiros, convide a galera para completar suas trilhas e desbloqueie Badges exclusivos de cidadania.
        </span>

      </motion.p>

    </div>

    <div className="absolute top-[900px] ml-[750px] left-[3px] flex flex-col w-[600px] z-20">
      
      {/* IMAGEM: Removemos o absolute daqui */}
      <MotionImage
        src={crieRoles}
        alt="Img#2 TUTORIAL"
        width={600}
        height={600}
        className="object-contain select-none pointer-events-none relative" 
        draggable={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p 
        className="text-2xl leading-tight mt-4 w-full font-extrabold text-[#2563EB] self-start text-justify pl-2 pr-4 bg-[#ffc107] p-4 rounded-lg"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        <span className="underline underline-offset-4 decoration-2">
            CRIE ROLÊS E DESAFIE AMIGOS:
        </span> <br />

        <span className="font-medium"> 
            Monte seus próprios roteiros personalizados, convide a galera para completar suas trilhas e desbloqueie Badges exclusivos de cidadania.
        </span>

      </motion.p>
      
    </div>

    <div className="absolute top-[1500px] ml-[15px] left-[3px] flex flex-col w-[600px] z-20">
      
      <MotionImage
        src={premioNaMao}
        alt="Img#3 TUTORIAL"
        width={600}
        height={600}
        // Removido o absolute daqui
        className="object-contain select-none pointer-events-none relative"
        draggable={false}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.p 
        className="text-2xl leading-tight mt-4 w-full font-extrabold text-[#2563EB] self-start text-justify pl-2 pr-4 bg-[#ffc107] p-4 rounded-lg"
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