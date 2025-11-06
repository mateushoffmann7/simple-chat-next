'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { ContextInput, useContextInput } from '../contexts/context-input';

export function ChatHistory() {
  const context = useContextInput();

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div>
      <div>
        <Input
          value={input1}
          onChange={setInput1}
          placeholder={
            context?.name
              ? `${context.name}, digite uma mensagem...`
              : 'Digite uma mensagem...'
          }
          className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300 placeholder:text-indigo-950 placeholder:text-[10px]"
        />
        <Input
          value={input2}
          onChange={setInput2}
          placeholder="Bot, digite uma mensagem..."
          className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300 placeholder:text-indigo-950 placeholder:text-[10px]"
        />
      </div>
    </div>
  );
}
