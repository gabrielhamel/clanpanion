import { useContext } from "react";
import { ClanContext } from "@/contexts/clan";

export const useClan = () => {
  return useContext(ClanContext);
};
