import { useState } from "react";
import { Box } from "@mui/material";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { WargamingRegion } from "@/services/wargaming/region";
import { WargamingFindClanItem } from "@/services/wargaming/types";

const Index = () => {
  const [clan, setClan] = useState<WargamingFindClanItem | null>(null);

  return (
    <Box sx={{ padding: "10rem", width: "50rem" }}>
      <ClanSearchInput
        onChange={setClan}
        value={clan}
        region={WargamingRegion.ASIA}
      />
    </Box>
  );
};

export default Index;
