import { createContext } from 'react';
import { LegoSet, DUMMY_SETS } from '@/data/dummy';
import { useState } from 'react';

type SetsContextType = {
  sets: LegoSet[];
  addSet: (set: LegoSet) => void;
};

export const SetsContext = createContext<SetsContextType | null>(null);

export function SetsProvider({ children }: { children: React.ReactNode }) {
  const [sets, setSets] = useState<LegoSet[]>(DUMMY_SETS);

  const addSet = (set: LegoSet) => {
    setSets((prev) => [...prev, set]);
  };

  return (
    <SetsContext.Provider value={{ sets, addSet }}>
      {children}
    </SetsContext.Provider>
  );
}
