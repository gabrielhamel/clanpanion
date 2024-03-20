import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { AppBar } from "@/components/AppBar";
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
        <AppBar />
        <Component {...pageProps} />
      </RegionProvider>
    </ApiProvider>
  </SnackbarProvider>
);

export default App;
