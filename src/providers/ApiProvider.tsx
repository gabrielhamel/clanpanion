import { ReactNode, useState } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useSnackbar } from "notistack";
import { apiClient } from "@/backend/client";

const ApiProvider = ({ children }: { children: ReactNode }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleError = (error: Error) => {
    const errorMessage = error.message ?? "Oups ! An error has occurred";
    enqueueSnackbar(errorMessage, { variant: "error" });
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
