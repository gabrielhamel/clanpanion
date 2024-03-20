import { ReactNode, useState } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useTranslation } from "next-i18next";
import { useSnackbar } from "notistack";
import { apiClient } from "@/backend/client";

const ApiProvider = ({ children }: { children: ReactNode }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const handleError = (error: Error) => {
    console.error(error);
    enqueueSnackbar(t("state.error.generic"), { variant: "error" });
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: handleError,
        }),
        queryCache: new QueryCache({
          onError: handleError,
        }),
      }),
  );

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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </apiClient.Provider>
  );
};

export default ApiProvider;
