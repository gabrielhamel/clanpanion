import { inferRouterOutputs } from "@trpc/server";
import {
  getAccount,
  getClan,
  getClanHistory,
  search,
} from "@/backend/query/wargaming";
import { trpc } from "@/backend/trpc";

export const router = trpc.router({
  wargaming: {
    getAccount,
    getClan,
    getClanHistory,
    search,
  },
});

export type Router = typeof router;
export type RouterOutput = inferRouterOutputs<Router>;
