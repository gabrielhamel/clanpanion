import { useContext } from "react";
import { RegionContext } from "@/contexts/region";

export const useRegion = () => {
  return useContext(RegionContext);
};
