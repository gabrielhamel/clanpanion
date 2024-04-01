import { createContext, ReactNode } from "react";
import { apiClient } from "@/backend/client";
import { useRegion } from "@/hooks/useRegion";
import { WargamingGetAccountItem } from "@/services/wargaming/types";

export const AccountContext = createContext<{
  account: WargamingGetAccountItem | undefined;
  isLoading: boolean;
  isError: boolean;
}>({
  account: undefined,
  isError: false,
  isLoading: true,
});

export const AccountProvider = ({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) => {
  const { currentRegion } = useRegion();

  const { data, isLoading, isError } = apiClient.wargaming.getAccount.useQuery({
    id,
    region: currentRegion,
  });

  return (
    <AccountContext.Provider
      value={{
        account: data,
        isError,
        isLoading,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
