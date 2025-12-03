"use client";

import Image from "next/image";
import { mapaRecife } from "assets";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionImage = motion(Image);

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
    <div id="faq" className="h-screen w-full flex bg-[#ffc107] relative overflow-hidden">


      <motion.div className="flex flex-col pl-8 pt-3 w-[65%] relative z-10">


        <motion.h1
          className="text-[#2563EB] text-8xl font-thin leading-tight whitespace-nowrap mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Perguntas Frequentes
        </motion.h1>

        <MotionImage
          src={mapaRecife}
          alt="Mapa Recife"
          width={2200}
          height={2200}
          className="ml-[-30px] scale-[1] object-cover"
          draggable={false}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

      </motion.div>


      <div className="flex flex-col w-[35%] pr-10 gap-4 justify-center z-40 mt-23">

        {faqs.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setOpenIndex(index)}
            className="bg-[#2563EB] text-white font-extrabold text-xl py-4 rounded-lg shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
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
            className="bg-[#2563EB] text-white p-10 rounded-xl shadow-xl max-w-xl text-center relative"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4">{faqs[openIndex].q}</h2>
            <p className="text-lg leading-relaxed">{faqs[openIndex].a}</p>

            <button
              onClick={() => setOpenIndex(null)}
              className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* <Image
        src={blueRiverFaq}
        alt="Elemento do rio azul Capibatrilhas"
        width={560}
        height={600}
        className="absolute top-[-250px] left-10 ml-[832px] translate-y-2 object-contain"
        draggable={false}
      /> */}

    </div>
  );
}
