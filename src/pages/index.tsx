import { Button } from "@mui/material";
import { useTranslation } from "@/i18n";
import { useRouter } from "@/router";

const Index = () => {
  const { t } = useTranslation();
  useRouter();
  return <Button variant="contained">{t("hello")}</Button>;
};

export default Index;
