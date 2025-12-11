import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function AddMyTrail() {

    return (
        <div className="w-full mt-8 flex justify-center" >
            <Link href="createTrail" className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-[#ffc107] hover:to-[#ffc107] w-300 md:w-330 rounded-3xl h-10 flex justify-center items-center transition-colors duration-400 ease-in-out group">
                    <p className={`${outfit.className} text-white group-hover:text-[#2563EB] text-base md:text-3xl font-bold transition-colors duration-400 ease-in-out`}>+</p>
                    <p className={`${outfit.className} text-white group-hover:text-[#2563EB] text-sm md:text-base font-semibold ml-3 transition-colors duration-400 ease-in-out`}> Criar Minha Própria Trilha</p>
            </Link>
        </div>
    )
}