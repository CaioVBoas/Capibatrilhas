"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import { partners } from "assets";
import { useRouter } from "next/navigation";
import { DM_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function LandingHeader() {
  const router = useRouter();

  return (
    <div>
      <Image
        src={partners}
        alt="Parceiros Capibatrilhas"
        width={250} 
        height={250}
        className="absolute top-6 left-6 object-contain select-none pointer-events-none z-10"
        draggable={false}
      />

      <header className={`${inter.className} absolute top-8 right-8 z-50 font-light`}> 
        <nav className={`${dmSans.className} flex space-x-12 text-2xl text-white`}> 
          <button onClick={() => scrollToSection('sobre')} className="cursor-pointer hover:text-yellow-400 hover:font-extrabold transition font-semibold">Sobre</button>
          <button onClick={() => scrollToSection('tutorial')} className="cursor-pointer hover:text-yellow-400 hover:font-extrabold transition font-semibold">Tutorial</button>
          <button onClick={() => scrollToSection('faq')} className="cursor-pointer hover:text-yellow-400 hover:font-extrabold transition font-semibold">FAQ</button>
          <button onClick={() => scrollToSection('contato')} className="cursor-pointer hover:text-yellow-400 hover:font-extrabold transition font-semibold">Contato</button>
          <button onClick={() => {
            window.history.replaceState(null, '', '/landingPage');
            router.push('/login');
          }} className="cursor-pointer hover:text-yellow-400 hover:font-extrabold transition font-semibold">Login</button>
        </nav>
      </header>
    </div>
  );
}