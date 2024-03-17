import { createContext, ReactNode, useState } from "react";
import { WargamingRegion } from "@/services/wargaming/region";

export const RegionContext = createContext<{
  currentRegion: WargamingRegion;
  switchRegion: (region: WargamingRegion) => void;
}>({ currentRegion: "EU", switchRegion: () => {} });

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [currentRegion, switchRegion] = useState<WargamingRegion>("EU");

  return (
    <RegionContext.Provider
      value={{
        currentRegion,
        switchRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};
