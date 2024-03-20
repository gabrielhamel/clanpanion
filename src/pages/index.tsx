import { Typography } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  return <Typography>We cooking !</Typography>;
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: await serverSideTranslations(locale, ["common"]),
});

export default Index;
