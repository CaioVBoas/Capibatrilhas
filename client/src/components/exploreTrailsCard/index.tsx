'use client';
import { Funnel } from 'lucide-react';
import { useState } from 'react';

const trailsTypes = [
  'Todas',
  'Cultura',
  'Natureza',
  'Gastronomia',
  'Arte',
  'História'
];

export default function ExploreTrailsCard() {
  const [userInput, setUserInput] = useState('');

  return (
    <div className="bg-[#F8FAFC] w-full flex justify-center">
      <div className="bg-white">
        <h1>Explorar Trilhas</h1>
        <input
          type="text"
          name=""
          id=""
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="bg-[#F8FAFC]"
        />
        <div className='flex px-2'>
            <Funnel className='text-[#627084] mx-1' />
            {trailsTypes.map(type => 
                <button className='mx-1 px-2 rounded-2xl border border-[#627084]' key={type}>{type}</button>
            )}
        </div>
      </div>
    </div>
  );
}
