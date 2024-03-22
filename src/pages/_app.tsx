import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { AppBar } from "@/components/AppBar";
import { RegionProvider } from "@/contexts/region";
import ApiProvider from "@/providers/ApiProvider";
import { theme } from "@/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <ApiProvider>
        <RegionProvider>
          <Head>
            <title>Clanpanion</title>
          </Head>
          <CssBaseline />
          <AppBar />
          <Component {...pageProps} />
        </RegionProvider>
      </ApiProvider>
    </SnackbarProvider>
  </ThemeProvider>
);

export default App;
