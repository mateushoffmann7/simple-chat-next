'use client';

import Link from 'next/link';
import { useContextInput } from '../contexts/context-input';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export function InputName() {
  const context = useContextInput();
  const router = useRouter();

  function handleNavigate() {
    if (context?.name !== '') {
      return router.push('/chat-room');
    } else {
      alert('Digite seu username!');
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text-3xl text-indigo-950">Simple Chat</h1>
      <div className="flex">
        <input
          className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300
        placeholder:text-indigo-950 border border-indigo-950 outline-0"
          onChange={(e) => context?.setName(e.target.value)}
          value={context?.name}
          placeholder="Digite seu Nome"
        />
        {/* <Link
          href={context?.name === '' ? '' : '/chat-room'}
          onNavigate={() => {
            if (context?.name === '') {
              alert('Preencha um nome!');
            }
          }}
          className="py-4 px-8 rounded-md m-2 bg-linear-to-r to-gray-300 from-teal-300
          placeholder:text-teal-950 cursor-pointer hover:opacity-80 border border-teal-950"
        >
          Iniciar Chat
        </Link> */}
        <Button
          onClick={() => handleNavigate()}
          className="py-4 px-8 rounded-md m-2 bg-linear-to-r to-gray-300 from-teal-300
          placeholder:text-teal-950 cursor-pointer hover:opacity-80 border border-teal-950"
          label="Iniciar Chat"
        />
      </div>
    </div>
  );
}
