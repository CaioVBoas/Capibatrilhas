import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

export function LandingFooter() {
  return (
    <footer className="w-full bg-[#0057FF] text-white px-6 py-10 flex flex-col">
      
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-8">
        

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-[#FFC107]">
            Capibatrilhas
          </h2>
          <p className="text-sm text-blue-100 max-w-xs leading-relaxed">
            Viva sua cidade como nunca antes. <br/>
            Viva o Recife, de Capiba em Capiba.
          </p>
          <span className="text-xs text-blue-200 mt-4 md:mt-8">
            © 2025 Capibatrilhas. Todos os direitos reservados.
          </span>
        </div>

        <div className="flex flex-col gap-4 text-sm font-medium">
          
          <div className="flex items-start gap-3">
            <MapPin className="text-[#FFC107] shrink-0" size={20} />
            <p className="leading-tight max-w-xs">
              Av. Jornalista Aníbal Fernandes, s/n <br/>
              Cidade Universitária (Campus Recife) <br/>
              CEP: 50.740-560 – Recife – PE
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-[#FFC107] shrink-0" size={20} />
            <a href="mailto:contato@cin.ufpe.br" className="hover:text-[#FFC107] transition-colors">
              contato@cin.ufpe.br
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#FFC107] shrink-0" size={20} />
            <p>+55 81 2126-8430</p>
          </div>

          <div className="flex items-center gap-3">
            <Instagram className="text-[#FFC107] shrink-0" size={20} />
            <a 
              href="https://instagram.com/cinufpe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FFC107] transition-colors"
            >
              @cinufpe
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}