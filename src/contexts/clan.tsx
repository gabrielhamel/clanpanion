import { createContext, ReactNode } from "react";
import { apiClient } from "@/backend/client";
import { WargamingRegion } from "@/services/wargaming/region";
import { WargamingGetClanItem } from "@/services/wargaming/types";

export const ClanContext = createContext<{
  clan: WargamingGetClanItem | undefined;
  loading: boolean;
}>({
  clan: undefined,
  loading: true,
});

export const ClanProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: number;
}) => {
  const { data, isLoading } = apiClient.clan.get.useQuery({
    id,
    region: WargamingRegion.EU,
  });

  return (
    <ClanContext.Provider
      value={{
        clan: data,
        loading: isLoading,
      }}
    >
      {children}
    </ClanContext.Provider>
  );
};
