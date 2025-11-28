import Image from "next/image";
import { aboutRight, blueRiverMiddle } from "assets";

export function AboutSection() {
  return (
      // ADICIONANDO overflow-hidden AQUI
      <div className="h-screen w-full flex bg-[#ffc107] relative overflow-hidden"> 
        
        {/* LADO ESQUERDO: Logo e Botão */}
        <div className="flex flex-col justify-start pl-8 pt-8 w-1/2 relative">
    
          {/* Palavra "Sobre" no canto superior esquerdo */}
          <h1 className="text-[#2563EB] text-8xl font-thin leading-tight">
            Sobre
          </h1>

          {/* Parágrafo maior */}
          <p className="text-2xl leading-relaxed mt-1 max-w-lg ml-7 text-justify font-medium">
            Um desejo. <br />
            Foi disso que nasceu o Capibatrilhas: do desejo por mais vida. 
            A cidade é o lugar onde tudo pulsa. Cultura, natureza, <span className="text-[#2563EB] font-semibold">gente</span>. 
            Onde suor e sangue se misturam no caldeirão sagrado da <span className="text-[#2563EB] font-semibold">cidadania</span>.<br /><br />

            O que o Capibatrilhas quer é simples: mais <span className="bg-[#2563EB] text-yellow-400 px-2 py-1 rounded font-extrabold">
              VIDA VIVIDA.
            </span><br /> <br /><br />

            <span className="text-[#2563EB] font-semibold">Recife</span> é sua matéria-prima. <br />
            Ouça os sons da sua cidade. <br />
            Abra os olhos para o que ainda não viu. <br />

            {/* Aqui o destaque em caixa azul com letras amarelas */}
            <span className="bg-[#2563EB] text-yellow-400 px-2 py-1 rounded font-extrabold">
              VIVA RECIFE. VIVA VOCÊ.
            </span><br />
          </p>


        </div>
  
        <Image
          src={blueRiverMiddle}
          alt="Elemento do rio azul Capibatrilhas"
          width={176}
          height={200}
          className="absolute top-[-50px] left-[51px] ml-[685px] object-contain select-none pointer-events-none"
          draggable={false}
          />
  
        {/* LADO DIREITO: Ilustração Principal */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src={aboutRight}
            alt="Foto do Recife Antigo"
            width={495}
            height={495}
            className="absolute bottom-0 right-0 object-contain select-none pointer-events-none p-0"
            draggable={false}
            priority
          />
        </div>
      </div>
    );
  }