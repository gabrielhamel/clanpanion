import { Typography } from "@mui/material";
import Head from "next/head";
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
        {clan.name}
      </Typography>
    )
  );
};

export default ClanContainer;
