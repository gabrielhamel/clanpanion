import { useRouter } from "next/router";
import { z } from "zod";
import { PlayerContainer } from "@/components/PlayerContainer";
import { PlayerProvider } from "@/contexts/player";

const Player = () => {
  const router = useRouter();
  const { playerId } = router.query;

  const numericPlayerId = playerId ? z.coerce.number().parse(playerId) : null;

  return (
    numericPlayerId && (
      <PlayerProvider id={numericPlayerId}>
        <PlayerContainer />
      </PlayerProvider>
    )
  );
};

export default Player;
