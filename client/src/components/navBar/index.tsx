import { logoCapibatrilhas } from "assets";
import Image from "next/image";
import Link from "next/link";
import { UserRound } from 'lucide-react';


export default function NavBar() {

    return (
        <div className=" bg-linear-to-r from-blue-500 to-blue-400 flex items-center w-full h-20 px-4 md:px-10">


            <Image src={logoCapibatrilhas} alt="logo da Capibatrilhas" className=" md:ml-10" height={70} />
            <div className="items-center flex flex-col">
                <p className="font-bold text-blue-800 text-base md:text-lg lg:text-2xl">Capibatrilhas</p>
                <p className="font-medium text-white whitespace-nowrap text-xs md:text-base">Cultura, Cidadania & Descobertas</p>
            </div>

            <div className="space-x-10 flex items-center ml-auto px-4 md:px-10 ">
                <Link href="#" className="text-white font-bold hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Explorar</Link>
                <Link href="#" className="text-white font-bold hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Trilhas</Link>
                <Link href="#" className="text-white font-bold hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Agenda</Link>
                <Link href="#" className="text-white font-bold hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Recompensas</Link>
                <Link href="#" className="text-black bg-white hover:bg-blue-200 hover:text-gray-500 rounded-3xl p-2">
                    <UserRound />
                </Link>
            </div>

        </div>
    )
}