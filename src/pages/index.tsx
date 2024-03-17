import { useState } from "react";
import { Box, Button } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ClanSearchInput } from "@/components/ClanSearchInput";
import { useRegion } from "@/hooks/useRegion";

const Index = () => {
  const [clan, setClan] = useState<number | null>(null);

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

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: await serverSideTranslations(locale, ["common"]),
});

export default Index;
