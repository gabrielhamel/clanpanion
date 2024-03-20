import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { SnackbarProvider } from "notistack";
import { RegionProvider } from "@/contexts/region";
import ApiProvider from "@/providers/ApiProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = ({ Component, pageProps }: AppProps) => (
  <SnackbarProvider>
    <ApiProvider>
      <RegionProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </RegionProvider>
    </ApiProvider>
  </SnackbarProvider>
);

export default appWithTranslation(App);
