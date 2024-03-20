import { Typography } from "@mui/material";
import { useClan } from "@/hooks/useClan";

const ClanContainer = () => {
  const { clan } = useClan();

  return clan && <Typography>{clan.name}</Typography>;
};

export default ClanContainer;
