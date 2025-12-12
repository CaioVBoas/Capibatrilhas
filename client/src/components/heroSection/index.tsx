"use client";

import { Poppins, DM_Sans } from "next/font/google";
import Image from "next/image";
import { landingRight } from "assets";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function HeroSection() {
  const router = useRouter();

  return (
    <div id="hero" className="h-screen w-full flex max-md:flex-col bg-[#2563EB] relative overflow-hidden max-md:h-auto max-md:min-h-[85vh] max-md:pb-0"> 
      
      <div className="flex flex-col justify-start pl-16 pt-40 w-1/2 max-md:w-full max-md:pl-6 max-md:pt-16">
        <motion.h1
          className={`${poppins.className} text-[#ffc107] leading-[0.9] relative text-[76px] md:text-[180px]`} 
          animate={{ y: [0, -20, 0] }} 
          transition={{
            duration: 3.5,      
            repeat: Infinity,     
            ease: "easeInOut", 
          }}
        >

          <div className="absolute md:ml-89 w-20 h-20 bg-[#ffc107] rounded-full md:mt-13 left-[180px] max-md:m-0 max-md:w-10 max-md:h-10 max-md:left-[230px] max-md:top-4"></div>
          
          <span className="max-md:ml-1.5">capiba</span><br />
          <span className="pl-2.5">trilhas</span>
        </motion.h1>

        <button 
          onClick={() => {
            window.history.replaceState(null, '', '/landingPage');
            router.push('/login');
          }}
          className={`${dmSans.className} z-50 mt-8 ml-2 bg-[#ffc107] hover:bg-[#FFFFFF] 
        hover:shadow-2xl hover:scale-102 transition text-[#2563EB] hover:text-[#2563EB] 
        text-3xl font-bold py-7 px-16 rounded-full shadow-xl w-[425px] h-[100px] max-md:w-[300px] max-md:h-[70px] max-md:text-xl max-md:py-4 max-md:px-8 max-md:mt-6`}>
        COMECE POR AQUI
        </button>
      </div>

      <div className="relative w-1/2 h-full overflow-hidden max-md:w-full max-md:h-[60vh] max-md:mt-4">
        <Image
          src={landingRight}
          alt="Elementos Abstratos do Capibatrilhas"
          width={540}
          height={540}
          className="absolute bottom-0 right-0 object-contain select-none pointer-events-none max-md:w-full max-md:h-full max-md:left-0 max-md:object-cover max-md:object-bottom"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
}