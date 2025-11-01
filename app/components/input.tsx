'use client';

import { useContextInput } from '../contexts/contex-inputs';

export function Input() {
  const context = useContextInput();
  return (
    <div>
      <input
        type="text"
        value={context?.name}
        placeholder="Digite seu Nome"
        onChange={(e) => context?.setName(e.target.value)}
      />
      <p className="text-black">{context?.name}</p>
    </div>
  );
}
