import Link from "next/link";



export default function AddMyTrail() {

    return (
        <div className="w-full mt-8 flex justify-center" >
            <Link href="createTrail" className="bg-linear-to-r from-blue-600 to-blue-500 w-300 md:w-330 rounded-3xl h-10 flex justify-center items-center">
                    <p className="text-white text-base md:text-3xl font-bold">+</p>
                    <p className="text-white text-sm md:text-base font-semibold ml-3"> Criar Minha Própria Trilha</p>
            </Link>
        </div>
    )
}