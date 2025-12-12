import { Plus } from "lucide-react"

export default function MyTrails() {
    return(
        <div>
            <div className="flex flex-row justify-between py-6 px-96 border ">
                <h1 className="text-2xl font-semibold">Minhas Trilhas</h1>
                <button className="flex flex-row text-sm bg-[#2563EB] text-white p-2 gap-2 rounded-2xl"> <Plus size={18}></Plus> Criar Trilha</button>
            </div>
        </div>
    )
}