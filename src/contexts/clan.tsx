import { createContext, ReactNode } from "react";
import { apiClient } from "@/backend/client";
import { WargamingGetClanResult } from "@/services/wargaming/schemas";

export const ClanContext = createContext<{
  clan: WargamingGetClanResult | undefined;
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
  const { data, isLoading } = apiClient.clan.get.useQuery({ id });

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
