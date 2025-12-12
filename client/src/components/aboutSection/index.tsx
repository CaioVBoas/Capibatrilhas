'use client';

import Image from "next/image";
import { aboutRight } from "assets";
import { motion, Variants } from "framer-motion";
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function AboutSection() {


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
    <div id="sobre" className="h-screen w-full flex max-md:flex-col bg-[#ffc107] relative overflow-hidden">
      
      <motion.div 
        className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative z-10 max-md:w-full max-md:pl-4 max-md:pr-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1  }}
      >
  
        <motion.h1 
          className={`${outfit.className} text-[#2563EB] text-8xl leading-tight font-semibold max-md:text-5xl`}
          variants={itemVariants}
        >
          Sobre
        </motion.h1>

        <motion.p 
          className={`${dmSans.className} text-2xl leading-relaxed max-w-lg ml-7 text-justify font-medium -mt-1 max-md:text-lg max-md:ml-2`}
          variants={itemVariants}
        >
          Um desejo. Foi disso que nasceu o projeto Capibatrilhas: do desejo por mais vida. 
          A cidade é o lugar onde tudo pulsa. Cultura, natureza... <span className="text-[#2563EB] font-semibold">gente</span>. 
          Onde suor e sangue se misturam no caldeirão sagrado da <span className="text-[#2563EB] font-semibold">cidadania</span>.<br /><br />
          O que o Capibatrilhas quer é simples: mais <span className="bg-[#2563EB] text-yellow-400 px-2 py-1 rounded font-extrabold">
            VIDA VIVIDA.
          </span><br /> <br />

          <span className="text-[#2563EB] font-semibold">Recife</span> é sua matéria-prima. <br />
          Ouça os sons da sua cidade. <br />
          Abra os olhos para o que ainda não viu. <br />

          <span className="bg-[#2563EB] text-yellow-400 px-2 py-1 rounded font-extrabold inline-block mt-2">
            VIVA RECIFE. VIVA VOCÊ.
          </span><br />
        </motion.p>

      </motion.div>
  
  
      <div className="relative w-1/2 h-full overflow-hidden">
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 h-auto w-auto"
        >
            <Image
            src={aboutRight}
            alt="Foto do Recife Antigo"
            width={495}
            height={495}
            className="object-contain select-none pointer-events-none p-0"
            draggable={false}
            priority
            />
        </motion.div>
        
      </div>
    </div>
  );
}