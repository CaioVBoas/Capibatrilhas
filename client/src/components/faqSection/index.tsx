"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const MotionImage = motion(Image);

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


      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-6 p-10 pt-32 z-40 max-md:relative max-md:grid-cols-1 max-md:flex max-md:flex-col max-md:w-full max-md:pr-4 max-md:pl-4 max-md:mt-8 max-md:pb-8 max-md:pt-0">

        {faqs.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setOpenIndex(index)}
            className={`${dmSans.className} bg-[#fff3ef] text-[#2563EB] font-extrabold text-2xl px-1 rounded-3xl shadow-md hover:bg-blue-700 hover:text-white transition max-md:text-base max-md:py-3`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item.q.toUpperCase()}
          </motion.button>
        ))}

      </div>

      {openIndex !== null && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpenIndex(null)}
        >
          <motion.div
            className={`${dmSans.className} bg-[#2563EB] text-white p-10 rounded-xl shadow-xl max-w-xl text-center relative max-md:p-6 max-md:mx-4`}
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4 max-md:text-xl">{faqs[openIndex].q}</h2>
            <p className="text-lg leading-relaxed max-md:text-base">{faqs[openIndex].a}</p>

            <button
              onClick={() => setOpenIndex(null)}
              className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}
