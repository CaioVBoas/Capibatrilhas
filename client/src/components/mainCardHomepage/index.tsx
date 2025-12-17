'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Coins, ChevronLeft, ChevronRight } from 'lucide-react';
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface UserCardHomepage {
    userName: string;
    level: number;
    qtyCapibas: number;
    sequenceOfDays: number;
}

interface UserCardHomepageProps {
    userCardProp: UserCardHomepage;
}

interface ThematicTrail {
    id: number;
    subtitle: string;
    title: string;
    image: string;
}

const thematicTrails: ThematicTrail[] = [
    {
        id: 1,
        subtitle: "Trilha temática do mês de Dezembro:",
        title: "Capibatrilha Natalina",
        image: "bg-linear-to-r from-red-400 to-green-400"
    },
    {
        id: 2,
        subtitle: "Ouça os sons das ruas com nossa trilha urbana:",
        title: "Circuito de Arte Urbana",
        image: "bg-linear-to-r from-purple-400 to-pink-400"
    },
    {
        id: 3,
        subtitle: "Aproveite o calor verão com nossa trilha especial:",
        title: "7 dias de Verão",
        image: "bg-linear-to-r from-yellow-400 to-orange-400"
    },
    {
        id: 4,
        subtitle: "A cultura de um povo é a sua identidade. Quem somos? Descubra na nossa trilha:",
        title: "Capibatrilha Histórica",
        image: "bg-linear-to-r from-amber-600 to-orange-600"
    },
    {
        id: 5,
        subtitle: "Venha jogar a Edição do Recife Verde de Dezembro",
        title: "Recife Verde: Parques",
        image: "bg-linear-to-r from-green-500 to-cyan-400"
    },
];

export default function UserCardHomepage({ userCardProp }: UserCardHomepageProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const allCards = [
        { type: 'user', data: userCardProp },
        ...thematicTrails.map(trail => ({ type: 'trail', data: trail }))
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === allCards.length - 1 ? 0 : prevIndex + 1
            );
        }, 95000);

        return () => clearInterval(interval);
    }, [allCards.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? allCards.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === allCards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentCard = allCards[currentIndex];

    return (
        <div className="w-full mt-8 mb-10 px-4 md:px-8">
            <div className={`
                w-full
                rounded-4xl shadow-xl 
                p-6 md:p-10 
                h-96 md:h-80
                relative overflow-hidden
                group
                flex flex-col justify-between
                ${currentCard.type === 'user' 
                    ? 'bg-linear-to-r from-[#2563EB] to-[#3B82F6]'
                    : (currentCard.data as ThematicTrail).image
                }
            `}>

                {currentCard.type === 'user' ? (
                    <>
                        <div className="z-10 space-y-4 flex-1">
                            <div>
                                <h2 className={`${outfit.className} text-white font-bold text-5xl md:text-7xl leading-tight`}>
                                    Olá, {(currentCard.data as UserCardHomepage).userName}!
                                </h2>
                                <p className={`${dmSans.className} text-blue-100 mt-2 text-lg md:text-2xl font-medium`}>
                                    Pronto(a) para mais uma aventura?
                                </p>
                            </div>

                            <div className="inline-flex items-center gap-3 bg-blue-800/40 border border-blue-400/30 rounded-full px-5 py-3 backdrop-blur-sm">
                                <div className="bg-[#ffc107] rounded-full p-2">
                                    <Flame className="text-[#2563EB] w-5 h-5" fill="currentColor" />
                                </div>
                                <span className={`${dmSans.className} text-white font-bold text-base md:text-lg tracking-wide`}>
                                    Sequência de {(currentCard.data as UserCardHomepage).sequenceOfDays} dias
                                </span>
                            </div>
                        </div>
                        
                        <div className="z-10 flex gap-3 w-full md:w-auto md:self-end">
                            <div className={`${outfit.className} bg-yellow-400 text-[#2563EB] font-bold px-5 py-3 rounded-2xl shadow-lg flex items-center justify-center text-lg flex-1 md:flex-none min-w-[100px]`}>
                                Nível {(currentCard.data as UserCardHomepage).level}
                            </div>

                            <div className={`${dmSans.className} bg-white/10 border border-white/20 text-white font-bold px-5 py-3 rounded-2xl shadow-lg flex items-center justify-center gap-2 flex-1 md:flex-none min-w-[120px]`}>
                                <Coins className="text-[#ffc107] w-6 h-6" fill="currentColor" />
                                <span className="text-xl tracking-tight">{(currentCard.data as UserCardHomepage).qtyCapibas}</span>
                            </div>
                        </div>

                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('/noise.png')]"></div>
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent"></div>
                        <div className="z-10 space-y-3">
                            <p className={`${dmSans.className} text-base md:text-xl font-semibold text-white`}>
                                {(currentCard.data as ThematicTrail).subtitle}
                            </p>
                            <h2 className={`${outfit.className} text-5xl md:text-7xl font-bold leading-tight text-white`}>
                                {(currentCard.data as ThematicTrail).title}
                            </h2>
                        </div>
                    </>
                )}

                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-1"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1"
                    aria-label="Próximo"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {allCards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                                index === currentIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 w-2 hover:bg-white/70"
                            }`}
                            aria-label={`Ir para card ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}