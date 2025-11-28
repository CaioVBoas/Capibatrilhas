// components/Header/index.tsx
import { Inter } from "next/font/google";
import Image from "next/image";
import { partners } from "assets"; // Importe a imagem de parceiros

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Header() {
  return (
    <div>
      {/* Logos (Partners) - Posicionado no canto superior esquerdo */}
      <Image
        src={partners}
        alt="Parceiros Capibatrilhas"
        width={250} 
        height={250}
        className="absolute top-6 left-6 object-contain select-none pointer-events-none z-10"
        draggable={false}
      />

      <header className={`${inter.className} absolute top-8 right-8 z-50 font-light`}> 
        <div className="bg-white/10 backdrop-blur-sm rounded-full py-3 px-6 shadow-lg"> 
          <nav className="flex space-x-8 text-xl text-white"> {/* Ajustado gap-20 para space-x-8 e text-2xl para text-xl */}
            <a href="#sobre" className="cursor-pointer hover:text-yellow-400 transition">Sobre</a>
            <a href="#tutorial" className="cursor-pointer hover:text-yellow-400 transition">Tutorial</a>
            <a href="#faq" className="cursor-pointer hover:text-yellow-400 transition">FAQ</a>
            <a href="#contato" className="cursor-pointer hover:text-yellow-400 transition">Contato</a>
            <a href="#login" className="cursor-pointer hover:text-yellow-400 transition">Login</a>
          </nav>
        </div>
      </header>
    </div>
  );
}