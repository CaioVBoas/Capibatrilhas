import { Flame, Coins } from 'lucide-react';
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

export default function UserCardHomepage({ userCardProp }: UserCardHomepageProps) {
    return (
        <div className="w-full mt-8 mb-10 px-4 md:px-8">
            <div className={`
                w-full
                bg-linear-to-r from-[#2563EB] to-[#3B82F6] 
                rounded-4xl shadow-xl 
                p-6 md:p-10 
                flex flex-col md:flex-row justify-between items-start md:items-end 
                relative overflow-hidden
            `}>

                <div className="z-10 mb-6 md:mb-0 space-y-4">
                    <div>
                        <h2 className={`${outfit.className} text-white font-bold text-3xl md:text-5xl leading-tight`}>
                            Olá, {userCardProp.userName}!
                        </h2>
                        <p className={`${dmSans.className} text-blue-100 mt-1 text-base md:text-lg font-medium`}>
                            Pronto(a) para mais uma aventura?
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
                        <div className="bg-[#ffc107] rounded-full p-1">
                            <Flame className="text-[#2563EB] w-4 h-4" fill="currentColor" />
                        </div>
                        <span className={`${dmSans.className} text-white font-bold text-sm md:text-base tracking-wide`}>
                            Sequência de {userCardProp.sequenceOfDays} dias
                        </span>
                    </div>
                </div>
              <div className="z-10 flex gap-3 w-full md:w-auto">
                    
                    <div className={`${outfit.className} bg-yellow-400 text-[#2563EB] font-bold px-5 py-3 rounded-2xl shadow-lg flex items-center justify-center text-lg flex-1 md:flex-none min-w-[100px]`}>
                        Nível {userCardProp.level}
                    </div>


                    <div className={`${dmSans.className} bg-white/10 border border-white/20 text-white font-bold px-5 py-3 rounded-2xl shadow-lg flex items-center justify-center gap-2 flex-1 md:flex-none min-w-[120px]`}>
                        <Coins className="text-[#ffc107] w-6 h-6" fill="currentColor" />
                        <span className="text-xl tracking-tight">{userCardProp.qtyCapibas}</span>
                    </div>

                </div>

                
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('/noise.png')]"></div> 

            </div>
        </div>
    )
}