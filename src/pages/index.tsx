import { useState } from "react";
import { Box, Button } from "@mui/material";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { useRegion } from "@/hooks/useRegion";
import { WargamingFindClanItem } from "@/services/wargaming/types";

const Index = () => {
  const [clan, setClan] = useState<WargamingFindClanItem | null>(null);

  const { switchRegion } = useRegion();

  return (
    <Box sx={{ padding: "10rem", width: "50rem" }}>
      <Button onClick={() => switchRegion("EU")}>EU</Button>
      <Button onClick={() => switchRegion("ASIA")}>ASIA</Button>
      <Button onClick={() => switchRegion("NA")}>NA</Button>

      <ClanSearchInput onChange={setClan} value={clan} />
    </Box>
  );
};

export default Index;
