"use client";

import Image from "next/image";
import { riverComponent } from "assets";

export function RiverLayer() {
  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-10" style={{ height: '300vh' }} aria-hidden>
      <div className="absolute" style={{ top: '73vh', left: '60%', transform: 'translateX(-50%)', width: '100%', height: '650vh' }}>
        <Image
          src={riverComponent}
          alt="Elemento decorativo rio"
          fill
          className="object-contain opacity-95 select-none pointer-events-none"
          draggable={false}
          priority
        />
      </div>
    </div>
  );
}
