import { Box, Skeleton } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import { apiClient } from "@/backend/client";
import { ClanEmblem } from "@/components/ClanEmblem";
import { ClanTag } from "@/components/ClanTag";
import { useRegion } from "@/hooks/useRegion";
import { WargamingFindAccountItem } from "@/services/wargaming/types";

const AccountOption = ({ account }: { account: WargamingFindAccountItem }) => {
  const { currentRegion } = useRegion();

  const { data: accountDetail } = apiClient.account.get.useQuery({
    id: account.id,
    region: currentRegion,
  });

  const { data: clan } = apiClient.clan.get.useQuery(
    accountDetail?.clan_id
      ? {
          id: accountDetail.clan_id,
          region: currentRegion,
        }
      : skipToken,
  );

  return (
    <>
      {account.clan && (
        <>
          {clan ? (
            <>
              <ClanEmblem emblemUrl={clan.emblems.x32.portal} />
            </>
          ) : (
            <Skeleton width={32} height={32} variant="rectangular" />
          )}
          {clan ? (
            <ClanTag tag={clan.tag} color={clan.color} />
          ) : (
            <Skeleton variant="rectangular" width={59} height={17} />
          )}
        </>
      )}
      <Box>{account.name}</Box>
    </>
  );
};

export default AccountOption;
