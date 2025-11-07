'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

export interface InputProps {
  name: string;
  setName: (name: string) => void;
}

export const InputContext = createContext<InputProps | null>(null);

export function ContextInput({ children }: { children: ReactNode }) {
  const [name, setName] = useState('');
  return (
    <InputContext.Provider value={{ name, setName }}>
      {children}
    </InputContext.Provider>
  );
}

export function useContextInput() {
  return useContext(InputContext);
}
