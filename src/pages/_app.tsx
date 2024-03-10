import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <Component {...pageProps} />
  </>
);

export default App;
