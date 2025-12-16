'use client';

import { useState } from 'react';
import { capibatrilhasAlternateLogo, capibatrilhasAlternateLogo2 } from "assets";
import Image from "next/image";
import Link from "next/link";
import { UserRound } from 'lucide-react';
import { DM_Sans, Outfit } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function NavBar() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };

    return (
        <header className="w-full bg-linear-to-r from-[#2563EB] to-[#1E40AF] shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

                <Link 
                    href="#" 
                    className="flex items-center gap-4 group select-none"
                    onClick={handleLogoClick}
                >

                    <div className="relative w-[60px] h-[60px] perspective-[1000px]">
                        
                        <div className={`w-full h-full relative transition-all duration-700 transform-3d ${isFlipped ? 'transform-[rotateY(180deg)]' : ''}`}>
                            
                            <div className="absolute inset-0 backface-hidden">
                                <Image 
                                    src={capibatrilhasAlternateLogo} 
                                    alt="Logo Capibatrilhas Frente" 
                                    fill 
                                    className="object-contain"
                                />
                            </div>

                            <div className="absolute inset-0 transform-[rotateY(180deg)] backface-hidden">
                                <Image 
                                    src={capibatrilhasAlternateLogo2} 
                                    alt="Logo Capibatrilhas Verso" 
                                    fill
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </div>
                    
                    <div className="flex flex-col">
                        <p className={`${outfit.className} font-bold text-white text-xl md:text-2xl tracking-tight`}>
                            Capibatrilhas
                        </p>
                        <p className={`${dmSans.className} font-medium text-blue-100 text-[10px] md:text-xs tracking-wide`}>
                            Cultura, Cidadania & Descobertas
                        </p>
                    </div>
                </Link>


                <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
                    <NavLink href="/homePage" text="Home" />
                    <NavLink href="/exploreTrails" text="Explorar" />
                    <NavLink href="/myTrails" text="Minhas Trilhas" />
                    <NavLink href="/schedulePage" text="Agenda" />
                    <NavLink href="/rewardsPage" text="Recompensas" />
                    
                    <Link 
                        href="profilePage" 
                        className="bg-white/10 text-white hover:bg-white hover:text-blue-700 border-2 border-transparent hover:border-blue-200 transition-all rounded-full p-2.5 shadow-sm"
                    >
                        <UserRound size={20} />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

function NavLink({ href, text }: { href: string, text: string }) {
    return (
        <Link 
            href={href} 
            className={`${dmSans.className} text-white/90 font-medium text-sm lg:text-base hover:text-[#ffc107] transition-colors relative group`}
        >
            {text}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffc107] transition-all group-hover:w-full"></span>
        </Link>
    )
}