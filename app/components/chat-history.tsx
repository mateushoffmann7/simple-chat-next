'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { useContextInput } from '../contexts/context-input';
import { CardChat } from './ui/chat-card';

export interface MessageProps {
  id: number;
  text: string;
  sender: string;
}

export function ChatHistory() {
  const context = useContextInput();

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const [messages, setMessages] = useState<MessageProps[]>([]);

  const handleSubmit1 = () => {
    setMessages([
      ...messages,
      { id: messages.length + 1, text: input1, sender: `${context?.name}` },
    ]);
    setInput1('');
  };

  const handleSubmit2 = () => {
    setMessages([
      ...messages,
      { id: messages.length + 1, text: input2, sender: 'Bot' },
    ]);
    setInput2('');
  };

  function handleDeleteMessage(id: number) {
    setMessages(
      messages.filter((e) => {
        return e.id !== id;
      }),
    );
  }

  return (
    <div>
      <div>
        <CardChat messages={messages} onMessageDel={handleDeleteMessage}>
          <div className="p-4">
            <Input
              value={input1}
              onSubmit={handleSubmit1}
              onChange={setInput1}
              placeholder={
                context?.name
                  ? `${context.name}, digite uma mensagem e aperte enter...`
                  : 'Digite uma mensagem e aperte enter...'
              }
              className="py-6 px-12 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300
            placeholder:text-indigo-950 placeholder:text-[1rem] placeholder:opacity-60 outline-1 outline-indigo-950 min-w-[450px]"
            />
            <Input
              value={input2}
              onSubmit={handleSubmit2}
              onChange={setInput2}
              placeholder="Bot, digite uma mensagem e aperte enter..."
              className="py-6 px-12 rounded-md m-2 bg-linear-to-t to-blue-400 from-indigo-300 placeholder:text-indigo-950 
            placeholder:text-[1rem] placeholder:opacity-60 outline-1 outline-indigo-950 min-w-[450px]"
            />
          </div>
        </CardChat>
      </div>
    </div>
  );
}
