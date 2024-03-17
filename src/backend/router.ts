import { inferRouterOutputs } from "@trpc/server";
import { get } from "@/backend/query/clan/get";
import { search } from "@/backend/query/clan/search";
import { trpc } from "@/backend/trpc";

export const router = trpc.router({
  clan: {
    get,
    search,
  },
});

export type Router = typeof router;
export type RouterOutput = inferRouterOutputs<Router>;
