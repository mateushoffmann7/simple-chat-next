'use client';

import { useState } from 'react';
import { Input } from './ui/input';

export function ChatHistory() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div>
      <div>
        <Input
          value={input1}
          onChange={setInput1}
          placeholder="Digite seu nome"
          className="py-2 px-4 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300 placeholder:text-indigo-950"
        />
        <Input
          value={input2}
          onChange={setInput2}
          placeholder="Digite um texto"
          className="py-2 px-4 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300 placeholder:text-indigo-950"
        />
      </div>
    </div>
  );
}
