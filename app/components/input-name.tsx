'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { useContextInput } from '../contexts/context-input';

export function InputName() {
  const context = useContextInput();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text-3xl">Simple Chat</h1>
      <div className="flex">
        <input
          className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300
        placeholder:text-indigo-950 border border-indigo-950"
          onChange={(e) => context?.setName(e.target.value)}
          value={context?.name}
          placeholder="Digite seu Nome"
        />
        <Link
          href="/chat-room"
          className="py-4 px-8 rounded-md m-2 bg-linear-to-r to-gray-300 from-teal-300
          placeholder:text-teal-950 cursor-pointer hover:opacity-80 border border-teal-950"
        >
          Iniciar Chat
        </Link>
      </div>
    </div>
  );
}
