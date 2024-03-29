import { inferRouterOutputs } from "@trpc/server";
import { get as getAccount } from "@/backend/query/account/get";
import { find as findClan } from "@/backend/query/clan/find";
import { get as getClan } from "@/backend/query/clan/get";
import { trpc } from "@/backend/trpc";

export const router = trpc.router({
  account: {
    get: getAccount,
  },
  clan: {
    find: findClan,
    get: getClan,
  },
});

export type Router = typeof router;
export type RouterOutput = inferRouterOutputs<Router>;
