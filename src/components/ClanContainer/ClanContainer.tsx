import { Box, Typography } from "@mui/material";
import Head from "next/head";
import ClanHistory from "@/components/ClanContainer/ClanHistory";
import { useClan } from "@/hooks/useClan";

const ClanContainer = () => {
  const { clan } = useClan();

  return (
    clan && (
      <Typography>
        <Head>
          <title>
            [{clan.tag}] - {clan.name}
          </title>
        </Head>
        <Box>
          <Box>{clan.name}</Box>
          <ClanHistory />
        </Box>
      </Typography>
    )
  );
};

export default ClanContainer;
