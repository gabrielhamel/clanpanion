import { createContext, ReactNode } from "react";
import { apiClient } from "@/backend/client";
import { useRegion } from "@/hooks/useRegion";
import { WargamingGetClanItem } from "@/services/wargaming/types";

export const ClanContext = createContext<{
  clan: WargamingGetClanItem | undefined;
  isLoading: boolean;
  isError: boolean;
}>({
  clan: undefined,
  isError: false,
  isLoading: true,
});

export const ClanProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: number;
}) => {
  const { currentRegion } = useRegion();

  const { data, isLoading, isError } = apiClient.wargaming.getClan.useQuery({
    id,
    region: currentRegion,
  });

  return (
    <ClanContext.Provider
      value={{
        clan: data,
        isError,
        isLoading,
      }}
    >
      {children}
    </ClanContext.Provider>
  );
};
