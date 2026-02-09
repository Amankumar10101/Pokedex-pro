"use client";
import { createContext, useContext, useState } from "react";

type Trainer = {
  name: string;
  level: number;
  xp: number;
  xpToNext: number;
  pokemonCount: number;
  teams: number;
  battles: number;
};

type DashboardContextType = {
  trainer: Trainer;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [trainer] = useState<Trainer>({
    name: "Trainer Panda",
    level: 28,
    xp: 14320,
    xpToNext: 20000,
    pokemonCount: 128,
    teams: 4,
    battles: 57,
  });

  return (
    <DashboardContext.Provider value={{ trainer }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("DashboardContext missing");
  return ctx;
}
