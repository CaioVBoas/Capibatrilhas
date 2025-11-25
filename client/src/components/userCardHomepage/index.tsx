import { Flame, Coins } from 'lucide-react';



interface UserCardHomepage {
    userName: string,
    level: number,
    qtyCapibas: number,
    sequenceOfDays: number,
}

interface UserCardHomepageProps {
    userCardProp: UserCardHomepage
}

export default function UserCardHomepage({
    userCardProp
}: UserCardHomepageProps) {

    return (

        <div className="w-full mt-12 flex justify-center">
            <div className="flex justify-between items-start bg-linear-to-r from-blue-600 to-blue-500  h-37 md:h-40  rounded-xl w-300 md:w-330">

                <div className="mt-5 ml-10 h-full">

                    <p className="text-white font-bold text-3xl ">Olá, {userCardProp.userName}!</p>
                    <p className="text-white mt-1.5 ">Pronto(a) para mais uma aventura?</p>

                    <div className=' bg-blue-400 md:w-55 flex justify-center text-white p-1 rounded-2xl mt-2 md:mt-3 border-x-2 border-y-0.5'>
                        <Flame className='bg-linear-to-t from-yellow-600 to-red-600 rounded-4xl md:mr-2 ' />
                        <p>Sequência de 7 dias</p>
                    </div>

                </div>

                <div className='mt-5 ml-auto mr-10 flex'>
                    <p className='bg-yellow-300 rounded-2xl px-6 mr-2'>Nível {userCardProp.level}</p>

                    <div className='bg-blue-300 rounded-2xl px-5 text-white font-semibold flex'>
                        <Coins className='mr-1.5' />
                        <p>{userCardProp.qtyCapibas}</p>
                    </div>

                </div>


            </div>

        </div>
    )
}