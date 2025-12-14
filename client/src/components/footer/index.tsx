import { logoPrefeitura } from "assets";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-linear-to-r from-blue-600 to-blue-500 flex justify-center p-8 h-42">
            <Image src={logoPrefeitura} alt="Logo da Prefeitrua" height={100} width={100} />
        </div>
    )
}