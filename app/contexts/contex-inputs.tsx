'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { PropsInput } from '../types/type-context';

export const InputContext = createContext<PropsInput | null>(null);

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
