'use client';

import Image from "next/image";
import { contactLeft } from "assets";
import { motion, Variants } from "framer-motion";

export function ContactSection() {
  
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
    <div id="contato" className="h-screen w-full flex bg-[#fff3ef] relative overflow-hidden">

      <motion.div 
        className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative z-10 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1 
          className="text-[#2563EB] text-7xl font-thin leading-tight"
          variants={itemVariants}
        >
          <span className="whitespace-nowrap">Ainda em dúvida?</span><br />
          <span className="whitespace-nowrap">Entre em contato!</span>
        </motion.h1>

        <motion.form 
          variants={itemVariants}
          className="flex flex-col text-2xl w-[75%] font-light"
        >
          <label className="mb-1">Nome completo</label>
          <input 
            type="text" 
            className="border-b border-black bg-transparent mb-6 pb-2 focus:outline-none"
          />
          <label className="mb-1">E-mail</label>
          <input 
            type="email" 
            className="border-b border-black bg-transparent mb-6 pb-2 focus:outline-none"
          />
          <label className="mb-0.5">Mensagem</label>
          <textarea 
            rows={1}
            className="border-b border-black bg-transparent -mb-2 pb-2 focus:outline-none"
          />
        </motion.form>
      </motion.div>

      <motion.button
        type="submit"
        variants={itemVariants} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="absolute right-10 bottom-10 bg-[#2563EB] hover:bg-[#1d4ed8] 
                   text-[#FDE68A] text-3xl font-medium px-10 py-4 rounded-full 
                   border border-black shadow-md transition z-30"
      >
        Enviar mensagem
      </motion.button>

      <motion.div

        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 z-0 pointer-events-none"
      >
        <Image
          src={contactLeft}
          alt="Elemento abstrato"
          width={495}
          height={495}
          className="object-contain select-none pointer-events-none p-0"
          draggable={false}
          priority
        />
      </motion.div>

    </div>
  );
}