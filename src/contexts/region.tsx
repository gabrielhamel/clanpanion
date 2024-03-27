import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  WargamingRegion,
  WargamingRegionSchema,
} from "@/services/wargaming/region";

export const RegionContext = createContext<{
  currentRegion: WargamingRegion;
  switchRegion: (region: WargamingRegion) => void;
}>({ currentRegion: "EU", switchRegion: () => {} });

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [currentRegion, setRegion] = useState<WargamingRegion>("EU");
  const router = useRouter();

  const loadCurrentRegionFromUrl = () => {
    const regionQueryValue = router.query.region;

    if (!regionQueryValue) {
      return;
    }

    const region = WargamingRegionSchema.parse(regionQueryValue);
    if (region !== currentRegion) {
      setRegion(region);
    }
  };

  useEffect(loadCurrentRegionFromUrl, [currentRegion, router.query.region]);

  const switchRegion = (newValue: WargamingRegion) => {
    const newPath = router.asPath.replace(`/${currentRegion}`, `/${newValue}`);
    void router.push(newPath);
  };

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
