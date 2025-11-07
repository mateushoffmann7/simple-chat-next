'use client';

import { useContextInput } from '@/app/contexts/context-input';
import { ReactNode } from 'react';

interface PropsCard {
  messages: MessageProps[];
  children: ReactNode;
}

export interface MessageProps {
  text: string;
  sender: string;
}

export function CardChat({ children, messages }: PropsCard) {
  const context = useContextInput();
  return (
    <div>
      <div className="bg-indigo-200 h-[80vh] w-[500px] flex flex-col items-center justify-end rounded">
        <div className="h-full w-full resize-none outline-0 flex flex-col flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => {
            const isBot = msg.sender === 'Bot';
            return (
              <div key={index} className={isBot ? 'flex justify-end' : ''}>
                <div className="w-[200px] bg-indigo-100 rounded p-2">
                  <h1 className="font-bold">{msg.sender}</h1>
                  <p>{msg.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
