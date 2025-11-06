'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { useContextInput } from '../contexts/context-input';
import { CardChat } from './ui/chat-card';

export function ChatHistory() {
  const context = useContextInput();

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    [],
  );
  const handleSubmit1 = () => {
    setMessages([
      ...messages,
      { text: input1, sender: context?.name || `${context?.name}` },
    ]);
    setInput1('');
  };

  const handleSubmit2 = () => {
    setMessages([...messages, { text: input2, sender: 'Bot' }]);
    setInput2('');
  };

  return (
    <div>
      <div>
        <CardChat messages={messages}>
          <Input
            value={input1}
            onSubmit={handleSubmit1}
            onChange={setInput1}
            placeholder={
              context?.name
                ? `${context.name}, digite uma mensagem...`
                : 'Digite uma mensagem...'
            }
            className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300
            placeholder:text-indigo-950 placeholder:text-[1rem] placeholder:opacity-60 outline-0 min-w-[450px]"
          />
          <Input
            value={input2}
            onSubmit={handleSubmit2}
            onChange={setInput2}
            placeholder="Bot, digite uma mensagem..."
            className="py-4 px-8 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300 placeholder:text-indigo-950 
            placeholder:text-[1rem] placeholder:opacity-60 outline-0 min-w-[450px]"
          />
        </CardChat>
      </div>
    </div>
  );
}
