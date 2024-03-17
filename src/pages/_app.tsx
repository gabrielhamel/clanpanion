import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppProps } from "next/app";
import { apiClient } from "@/backend/client";
import { RegionProvider } from "@/contexts/region";
import i18n from "@/i18n";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [client] = useState(() =>
    apiClient.createClient({
      links: [
        httpBatchLink({
          url: `/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <>
      <apiClient.Provider client={client} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <RegionProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </RegionProvider>
          </I18nextProvider>
        </QueryClientProvider>
      </apiClient.Provider>
    </>
  );
};

export default App;
