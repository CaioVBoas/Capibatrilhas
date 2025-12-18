"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DM_Sans } from "next/font/google";
import { outfit } from "styles/fonts";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function FaqSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Como eu posso criar uma trilha personalizada?", a: "Você pode criar trilhas na seção de Criar Trilhas dentro da plataforma, escolhendo desafios, temas, duração e convidados." },
    { q: "Como faço para resgatar meus prêmios?", a: "Os prêmios podem ser resgatados na aba 'Recompensas' no app do Conecta Recife." },
    { q: "O Capibatrilhas é gratuito?", a: "Sim! Todas as trilhas e funcionalidades estão disponíveis gratuitamente." },
    { q: "Existe algum aplicativo para o Capibatrilhas?", a: "AINDA não... (Fique ligado!)" },
    { q: "Quando a próxima trilha temática será disponibilizada?", a: "As trilhas temáticas são lançadas na primeira semana do mês — fique atento ao calendário!" },
    { q: "É possível convidar amigos para minhas trilhas?", a: "Sim! No menu de criação de trilha, clique em 'Convidar Amigos' para gerar um link compartilhável ou um QR code para escaneamento." },
  ];

  return (
    <div id="faq" className="h-screen w-full flex max-md:flex-col bg-[#ffc107] relative overflow-hidden max-md:h-auto max-md:min-h-fit max-md:py-6">


      <motion.div className="flex flex-col pl-8 pt-3 w-[65%] relative z-10 max-md:w-full max-md:pl-4 max-md:pr-4">


        <motion.h1
          className={`${outfit.className} text-[#2563EB] text-8xl leading-tight whitespace-nowrap mb-6 max-md:text-5xl max-md:whitespace-normal`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Dúvidas Comuns
        </motion.h1>

      </motion.div>


      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-6 p-10 pt-32 z-40 max-md:static max-md:grid-cols-1 max-md:gap-4 max-md:p-4 max-md:mt-8">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="relative h-full min-h-[150px] max-md:min-h-[120px]"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >

              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`${dmSans.className} absolute inset-0 bg-[#fff3ef] text-[#2563EB] font-extrabold text-base mt-5 mb-5 md:text-xl py-1 px-4 rounded-3xl shadow-md hover:bg-blue-700 hover:text-white transition flex items-center justify-center`}
                style={{ backfaceVisibility: "hidden" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.q.toUpperCase()}
              </motion.button>


              <motion.div
                onClick={() => setOpenIndex(null)}
                className={`${dmSans.className} absolute inset-0 bg-[#2563EB] text-white p-4 rounded-3xl shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-blue-700 transition`}
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <p className="text-sm font-bold md:text-base leading-relaxed text-center">{item.a.toUpperCase()}</p>
                <span className="text-xs mt-2 text-yellow-400">Clique para voltar</span>
              </motion.div>
            </motion.div>
          </div>
        ))}

      </div>

    </div>
  );
}
