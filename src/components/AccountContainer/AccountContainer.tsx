import { Typography } from "@mui/material";
import { skipToken } from "@tanstack/react-query";
import Head from "next/head";
import { apiClient } from "@/backend/client";
import { useAccount } from "@/hooks/useAccount";
import { useRegion } from "@/hooks/useRegion";

const AccountContainer = () => {
  const { currentRegion } = useRegion();
  const { account } = useAccount();

  const { data: clan } = apiClient.wargaming.getClan.useQuery(
    account?.clan_id
      ? {
          id: account?.clan_id,
          region: currentRegion,
        }
      : skipToken,
  );

  if (!account) {
    return "Loading...";
  }

  const title = clan
    ? `[${clan.name}] - ${account.nickname}`
    : account.nickname;

  return (
    <Typography>
      <Head>
        <title>{title}</title>
      </Head>
      {account.nickname}
    </Typography>
  );
};

export default AccountContainer;
