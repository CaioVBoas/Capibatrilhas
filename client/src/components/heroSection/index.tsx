// components/HeroSection/index.tsx
import { Poppins } from "next/font/google";
import Image from "next/image";
import { landingRight } from "assets"; // Ilustração da direita
import { yellowRiverRight } from "assets"; // Ilustração do rio/forma orgânica

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function HeroSection() {
  return (
    // container principal da Hero Section (fundo azul e altura total)
    <div className="h-screen w-full flex bg-[#2563EB] relative"> 
      
      {/* LADO ESQUERDO: Logo e Botão */}
      <div className="flex flex-col justify-start pl-16 pt-40 w-1/2">
        <h1
          className={`${poppins.className} text-[#ffc107] leading-[0.9]`}
          style={{ fontSize: "180px" }}
        >
          {/* Bolha (Não alterada) */}
          <div className="absolute ml-105 w-20 h-20 bg-[#ffc107] rounded-full mt-13 left-[180px]"></div>
          
          capiba<br />
          <span className="pl-2.5">trilhas</span>
        </h1>

        {/* Botão CTA (Ajustei ml-43 para ml-10, usando Tailwind padrão) */}
        <button className="z-50 mt-16 ml-10 bg-[#ffc107] hover:bg-[#FFFFFF] hover:shadow-2xl hover:scale-105 transition text-black hover:text-[#2563EB] text-3xl font-bold py-7 px-16 rounded-full shadow-xl w-[400px]">
        CRIE SUA CONTA
        </button>
      </div>

      {/* Ilustração do Rio/Forma Orgânica */}
      <Image
        src={yellowRiverRight}
        alt="Ilustração do rio amarelo Capibatrilhas"
        width={290}
        height={115}
        // Ajustei as classes de posicionamento para Tailwind padrão.
        // O valor exato 'left-80px ml-145' precisa ser ajustado manualmente, aqui usei valores de exemplo:
        className="absolute top-[550px] left-[300px] object-contain select-none pointer-events-none" 
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