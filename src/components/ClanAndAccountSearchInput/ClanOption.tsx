import { Box } from "@mui/material";
import Image from "next/image";
import { useRegion } from "@/hooks/useRegion";
import { regions } from "@/services/wargaming/region";
import { WargamingFindClanItem } from "@/services/wargaming/types";
import { ClanEmblemContainer } from "./styles";

const ClanOption = ({ clan }: { clan: WargamingFindClanItem }) => {
  const { currentRegion } = useRegion();

  return (
    <>
      <ClanEmblem
        emblemUrl={`https://${regions[currentRegion].websiteDomain}${clan.emblem_url}`}
      />
      <Box>
        <ClanTag tag={clan.tag} color={clan.hex_color} />
        <Box>{clan.name}</Box>
      </Box>
    </>
  );
};

const ClanTag = ({ tag, color }: { tag: string; color: string }) => (
  <Box sx={{ color }}>
    <b>[{tag}]</b>
  </Box>
);

const ClanEmblem = ({ emblemUrl }: { emblemUrl: string }) => (
  <ClanEmblemContainer>
    <Image alt="clan-emblem" width={32} height={32} src={emblemUrl} />
  </ClanEmblemContainer>
);

export default ClanOption;
