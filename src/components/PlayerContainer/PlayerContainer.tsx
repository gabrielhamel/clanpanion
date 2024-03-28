import { Typography } from "@mui/material";
import Head from "next/head";
import { usePlayer } from "@/hooks/usePlayer";

const PlayerContainer = () => {
  const { player } = usePlayer();

  return (
    player && (
      <Typography>
        <Head>
          <title>{player.name}</title>
        </Head>
        {player.name}
      </Typography>
    )
  );
};

export default PlayerContainer;
