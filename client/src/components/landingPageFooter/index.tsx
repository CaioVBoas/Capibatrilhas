export function LandingFooter() {
  return (
    <footer className="w-full bg-[#ffc107] text-black px-6 py-4 flex flex-col">

      <div className="flex flex-col gap-3 text-base font-light">


        <div className="flex items-start gap-2">
          <span className="text-xl">📍</span>
          <p className="leading-tight">
            Av. Jornalista Aníbal Fernandes, s/n – Cidade Universitária (Campus Recife) <br />
            CEP: 50.740-560 – Recife – PE
          </p>
        </div>


        <div className="flex items-center gap-2">
          <span className="text-xl">✉️</span>
          <p>contato@cin.ufpe.br</p>
        </div>


        <div className="flex items-center gap-2">
          <span className="text-xl">📞</span>
          <p>+55 81 2126-8430</p>
        </div>


        <div className="flex items-center gap-2">
          <span className="text-xl">📷</span>
          <p>@cinufpe</p>
        </div>

      </div>


      <p className="w-full text-center text-gray-700 text-sm mt-4">
        Capibatrilhas. Todos os direitos reservados. © 2025
      </p>

    </footer>
  );
}
