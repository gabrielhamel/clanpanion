import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { apiClient } from "@/backend/client";
import { RegionProvider } from "@/contexts/region";
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
    <apiClient.Provider client={client} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RegionProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </RegionProvider>
      </QueryClientProvider>
    </apiClient.Provider>
  );
};

export default appWithTranslation(App);
