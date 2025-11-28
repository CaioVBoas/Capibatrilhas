import { yellowRiverTutorial, trilhasValemCapibas, crieRoles, premioNaMao } from "assets";
import Image from "next/image";


export function TutorialSection() {
  return (
    <div id="tutorial" className="w-full flex h-[300vh] bg-[#2563EB] relative overflow-hidden">
      <div className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative">
        <h1 className="text-[#ffc107] text-8xl font-thin leading-tight">
            Tutorial
        </h1>
      </div>
      <Image
          src={yellowRiverTutorial}
          alt="Elemento do rio amarelo TUTORIAL"
          width={3000}
          height={4000}
          className="absolute top-[-23px] ml-[15px] left-[3px] object-contain select-none pointer-events-none fade-up"
          draggable={false}
      />
    
      <Image
          src={trilhasValemCapibas}
          alt="Img#1 TUTORIAL"
          width={600}
          height={600}
          className="absolute top-[250px] ml-[15px] left-[3px] object-contain select-none pointer-events-none fade-up"
          draggable={false}
      />
        <Image
            src={crieRoles}
            alt="Img#2 TUTORIAL"
            width={600}
            height={600}
            className="absolute top-[900px] ml-[750px] left-[3px] object-contain select-none pointer-events-none fade-up"
            draggable={false}
        />
        <Image
            src={premioNaMao}
            alt="Img#3 TUTORIAL"
            width={600}
            height={600}
            className="absolute top-[1500px] ml-[15px] left-[3px] object-contain select-none pointer-events-none"
            draggable={false}
        />


    </div>
  )}