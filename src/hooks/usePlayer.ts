import { useContext } from "react";
import { PlayerContext } from "@/contexts/player";

export const usePlayer = () => {
  return useContext(PlayerContext);
};
