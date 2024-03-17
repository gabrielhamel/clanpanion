import { inferRouterOutputs } from "@trpc/server";
import { find } from "@/backend/query/clan/find";
import { get } from "@/backend/query/clan/get";
import { trpc } from "@/backend/trpc";

export const router = trpc.router({
  clan: {
    find,
    get,
  },
});

export type Router = typeof router;
export type RouterOutput = inferRouterOutputs<Router>;
