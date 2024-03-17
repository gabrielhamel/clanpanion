import { useContext } from "react";
import { ClanContext } from "@/contexts/clan";

export const useClan = () => {
  const { loading, clan } = useContext(ClanContext);

  return {
    description: clan?.description ?? "",
    id: clan?.clan_id ?? 0,
    loading,
    name: clan?.name ?? "",
    tag: clan?.tag ?? "",
  };
};
