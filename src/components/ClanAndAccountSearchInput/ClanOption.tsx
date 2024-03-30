import { Box } from "@mui/material";
import { ClanEmblem } from "@/components/ClanEmblem";
import { ClanTag } from "@/components/ClanTag";
import { useRegion } from "@/hooks/useRegion";
import { regions } from "@/services/wargaming/region";
import { WargamingFindClanItem } from "@/services/wargaming/types";

const ClanOption = ({ clan }: { clan: WargamingFindClanItem }) => {
  const { currentRegion } = useRegion();

  return (
    <>
      <ClanEmblem
        emblemUrl={`https://${regions[currentRegion].websiteDomain}${clan.emblem_url}`}
      />
      <ClanTag tag={clan.tag} color={clan.hex_color} />
      <Box>{clan.name}</Box>
    </>
  );
};

export default ClanOption;
