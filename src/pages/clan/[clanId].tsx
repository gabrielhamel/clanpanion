import { Typography } from "@mui/material";
import { GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Clan = () => {
  return <Typography>Clan page</Typography>;
};

export const getStaticPaths: GetStaticPaths<{ clanId: string }> = () => ({
  fallback: "blocking",
  paths: [],
});

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: await serverSideTranslations(locale, ["common"]),
});

export default Clan;
