import { logoCapibatrilhas } from "assets";
import Image from "next/image";
import Link from "next/link";
import { UserRound } from 'lucide-react';


export default function NavBar() {

    return (
        <div className=" bg-linear-to-r from-blue-500 to-blue-400 flex items-center w-full h-20">


            <Image src={logoCapibatrilhas} alt="logo da Capibatrilhas" className="ml-17" height={70} />
            <div className="items-center flex flex-col">
                <p className="font-bold text-blue-800 sont-lg ">Capibatrilhas</p>
                <p className="font-medium text-white whitespace-nowrap text-xs">Cultura, Cidadania & Descobertas</p>
            </div>

            <div className="space-x-10 ml-100 grow flex items-center">
                <Link href="#" className="text-white hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Explorar</Link>
                <Link href="#" className="text-white hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Trilhas</Link>
                <Link href="#" className="text-white hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Agenda</Link>
                <Link href="#" className="text-white hover:bg-blue-200 hover:text-gray-500 rounded-2xl p-2">Recompensas</Link>
                <Link href="#" className="text-black bg-white hover:bg-blue-200 hover:text-gray-500 rounded-3xl p-2">
                    <UserRound />
                </Link>
            </div>

        </div>
    )
}