import React from "react";
import { PartyPopper } from "lucide-react"
import { Capiba, Prefeitura, LogoCapibatrilhas } from "../../assets/index"
import Image from 'next/image';


interface TopHomepage {
  userName: string,
  numCapibas: number,
  level: number,
  sequenceOfdays: number
}

interface TopHomepageProps { userInformation: TopHomepage }



const TopHomePage: React.FC<TopHomepageProps> = ({ userInformation }) => {
  return (

    <div className="bg-blue-500 shadow px-4 md:px-10 lg:px-20 py-0.5 rounded-md flex w-full justify-between **items-center** md:items-center **flex-col md:flex-row**">
      <div className="grow">


        <div className="flex space-x-4 items-center">
          <div>
            <h1 className="text-white font-bold text-2xl sm:text-3xl">Olá, {userInformation.userName}!</h1>
            <p className="text-white text-sm sm:text-base">Pronto(a) para mais aventuras?</p>
          </div>
          <Image src={Prefeitura} alt="Símbolo da Prefeitura" width={50} height={50} className="mb-2 sm:w-12 sm:h-12" />


          <div className="**ml-auto md:ml-auto mr-4  flex-shrink-0**">
            <p className="text-xs bg-amber-300 rounded-2xl **w-fit px-3 py-0.5** text-center font-medium mb-1 mt-3">Nível {userInformation.level}</p>
            <div className="flex justify-center items-center">
              <Image src={Capiba} alt="Capiba" width={20} height={20} className="text-black mr-1" />
              <p className="text-white font-bold bg-transparent">🪙 {userInformation.numCapibas}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-400 pl-5 flex items-center h-10 rounded-tl-xl rounded-bl-xl **mt-4 w-full**">
          <PartyPopper className="text-white" />
          <p className="text-white pl-3 text-sm">Sequência de {userInformation.sequenceOfdays} dias!🔥</p>
        </div>

      </div>


      <Image src={LogoCapibatrilhas} alt="Logo da Capibatrilhas" width={120} height={120} />

    </div>
  );
}

export default TopHomePage;
