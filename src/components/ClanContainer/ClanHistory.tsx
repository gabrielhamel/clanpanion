import { skipToken } from "@tanstack/react-query";
import { apiClient } from "@/backend/client";
import { useClan } from "@/hooks/useClan";
import { useRegion } from "@/hooks/useRegion";

const ClanHistory = () => {
  const { currentRegion } = useRegion();
  const { clan, isLoading: isLoadingClan } = useClan();
  const { data: clanHistory, isLoading: isLoadingClanHistory } =
    apiClient.wargaming.getClanHistory.useQuery(
      clan
        ? {
            id: clan.clan_id,
            region: currentRegion,
          }
        : skipToken,
    );

  if (isLoadingClan || isLoadingClanHistory) {
    return <>Loading...</>;
  }

  if (!clan || !clanHistory) {
    return <>Error</>;
  }

  return <>{clanHistory[0].type}</>;
};

export default ClanHistory;
