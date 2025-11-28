"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { landingRight } from "assets"; // Ilustração da direita
import { yellowRiverRight } from "assets"; // Ilustração do rio/forma orgânica
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function HeroSection() {
  return (
    <div className="h-screen w-full flex bg-[#2563EB] relative overflow-hidden"> 
      
      <div className="flex flex-col justify-start pl-16 pt-40 w-1/2">
        <motion.h1
          className={`${poppins.className} text-[#ffc107] leading-[0.9] relative`} // Adicionei 'relative' por segurança
          style={{ fontSize: "180px" }}
          
          // AQUI ESTÁ A MÁGICA DE FLUTUAR:
          animate={{ y: [0, -20, 0] }} // Sobe 20px e desce
          transition={{
            duration: 3.5,      // Demora 3.5s para fazer o ciclo (suave)
            repeat: Infinity,   // Repete para sempre
            ease: "easeInOut",  // Movimento natural (não robótico)
          }}
        >

            <div className="absolute ml-89 w-20 h-20 bg-[#ffc107] rounded-full mt-13 left-[180px]"></div>
          
          capiba<br />
          <span className="pl-2.5">trilhas</span>
        </motion.h1>

        <button className="z-50 mt-13 ml-34 bg-[#ffc107] hover:bg-[#FFFFFF] hover:shadow-2xl hover:scale-105 transition text-black hover:text-[#2563EB] text-3xl font-bold py-7 px-16 rounded-full shadow-xl w-[450px] h-[100px]">
        CRIE SUA CONTA
        </button>
      </div>

      <Image
        src={yellowRiverRight}
        alt="Ilustração do rio amarelo Capibatrilhas"
        width={290}
        height={115}
        className="absolute top-[540px] left-80px ml-145 object-contain select-none pointer-events-none"
        draggable={false}
        />

      {/* LADO DIREITO: Ilustração Principal */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <Image
          src={landingRight}
          alt="Ilustrações do Capibatrilhas"
          width={540}
          height={540}
          className="absolute bottom-0 right-0 object-contain select-none pointer-events-none"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
}