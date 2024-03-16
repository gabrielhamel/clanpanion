// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { NextRouter, useRouter as useNextRouter } from "next/router";

export const useRouter = function <T = Record<string, string>>(): Omit<
  NextRouter,
  "query"
> & { query: T } {
  const { query, ...router } = useNextRouter();

  return {
    ...router,
    query: query as T,
  };
};
