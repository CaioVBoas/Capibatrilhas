import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

import Image from "next/image";
import { landingRight } from "assets";
import { partners } from "assets";
import { yellowRiverRight } from "assets";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function LandingPage() {
  return (
    // container principal
    <div className="h-screen w-full flex bg-[#2563EB]">
      {/* LADO ESQUERDO */}
      <div className="flex flex-col justify-start pl-16 pt-40 w-1/2">
        <h1
          className={`${poppins.className} text-[#ffc107] leading-[0.9]`}
          style={{ fontSize: "180px" }}
        >
            <div className="absolute ml-105 w-20 h-20 bg-[#ffc107] rounded-full mt-13 left-[180px]"></div>
          
          capiba<br />
          <span className="pl-2.5">trilhas</span>
        </h1>

        <button className="z-50 mt-16 ml-43 bg-[#ffc107] hover:bg-[#FFFFFF] hover:shadow-2xl hover:scale-105 transition text-black hover:text-[#2563EB] text-3xl font-bold py-7 px-16 rounded-full shadow-xl w-[400px]">
        CRIE SUA CONTA
        </button>
      </div>

      <Image
        src={partners}
        alt="Parceiros Capibatrilhas"
        width={275}
        height={275}
        className="absolute top-3 left-6 object-contain select-none pointer-events-none"
        draggable={false}
        />

        <Image
        src={yellowRiverRight}
        alt="Ilustração do rio amarelo Capibatrilhas"
        width={290}
        height={115}
        className="absolute top-[550px] left-80px ml-145 object-contain select-none pointer-events-none"
        draggable={false}
        />

        {/* LADO DIREITO*/}
      <header className={`${inter.className} fixed top-7 right-0 p-6 z-50 font-light`}>
            <nav className="flex gap-20 text-2xl text-white">
                <a href="#sobre" className="cursor-pointer hover:text-yellow-400 transition">
                Sobre
                </a>
                <a href="#tutorial" className="cursor-pointer hover:text-yellow-400 transition">
                Tutorial
                </a>
                <a href="#faq" className="cursor-pointer hover:text-yellow-400 transition">
                FAQ
                </a>
                <a href="#contato" className="cursor-pointer hover:text-yellow-400 transition">
                Contato
                </a>
                <a href="#login" className="cursor-pointer hover:text-yellow-400 transition">
                Login
                </a>
            </nav>
      </header>

      <div className="relative w-1/2 h-full overflow-hidden">
        <Image
          src={landingRight}
          alt="Ilustrações do Capibatrilhas"
          width={540}
          height={540}
          className="absolute bottom-0 right-0 object-contain select-none pointer-events-none" // <-- AQUI!
          draggable={false}
          priority
        />
      </div>
    </div>
  );
}