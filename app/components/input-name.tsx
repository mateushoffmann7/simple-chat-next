'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function InputName() {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-extrabold text-3xl">Simple Chat</h1>
      <div className="flex">
        <Input
          className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300
        placeholder:text-indigo-950 border border-indigo-950"
          onChange={setName}
          value={name}
          placeholder="Digite seu Nome"
        />
        <Button
          label="Iniciar Chat"
          onClick={() => {}}
          className="py-4 px-8 rounded-md m-2 bg-linear-to-r to-gray-300 from-teal-300
        placeholder:text-teal-950 cursor-pointer hover:opacity-80 border border-teal-950"
        />
      </div>
    </div>
  );
}
