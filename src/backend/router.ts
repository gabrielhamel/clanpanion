import { inferRouterOutputs } from "@trpc/server";
import { getAccount, getClan, search } from "@/backend/query/wargaming";
import { trpc } from "@/backend/trpc";

export const router = trpc.router({
  wargaming: {
    getAccount,
    getClan,
    search,
  },
});

export type Router = typeof router;
export type RouterOutput = inferRouterOutputs<Router>;
