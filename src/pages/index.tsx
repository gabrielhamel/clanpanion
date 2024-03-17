import { useState } from "react";
import { Box } from "@mui/material";
import { ClanSearchInput, ClanSearchValue } from "@/components/ClanSearchInput";

const Index = () => {
  const [clan, setClan] = useState<ClanSearchValue | null>(null);

  return (
    <Box sx={{ padding: "10rem", width: "50rem" }}>
      <ClanSearchInput onChange={setClan} value={clan} />
    </Box>
  );
};

export default Index;
