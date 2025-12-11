'use client';
import { motion, Variants } from "framer-motion";
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <div id="contato" className="h-screen w-full flex max-md:flex-col bg-[#fff3ef] relative overflow-hidden max-md:h-auto max-md:min-h-fit max-md:py-6">

      <motion.div 
        className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative z-10 gap-10 max-md:w-full max-md:pl-4 max-md:pr-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1 
          className={`${outfit.className} text-[#2563EB] text-7xl leading-tight max-md:text-4xl`}
          variants={itemVariants}
        >
          <span className="whitespace-nowrap">Ainda em dúvida?</span><br />
          <span className="whitespace-nowrap">Entre em contato!</span>
        </motion.h1>

        <motion.form 
          variants={itemVariants}
          className={`${dmSans.className} flex flex-col text-2xl w-[75%] font-light max-md:w-full max-md:text-lg`}
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
        
        <motion.button
          type="submit"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${dmSans.className} bg-[#2563EB] hover:bg-[#FFFFFF] 
          hover:shadow-2xl transition text-[#ffc107] hover:text-[#2563EB] text-xl px-8 py-3 rounded-full 
          shadow-md font-bold mt-6 md:hidden`}
        >
          Enviar mensagem
        </motion.button>
      </motion.div>

      <motion.button
        type="submit"
        variants={itemVariants} 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className={`${dmSans.className} absolute left-[210px] bottom-24 bg-[#2563EB] hover:bg-[#FFFFFF] 
        hover:shadow-2xl hover:scale-102 transition
                   text-[#ffc107] text-3xl px-10 py-4 rounded-full 
                     shadow-md font-bold z-30 max-md:hidden`}
      >
        Enviar mensagem
      </motion.button>


    </div>
  );
}