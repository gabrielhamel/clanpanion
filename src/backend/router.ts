import { searchClan } from "@/backend/query/searchClan";
import { trpc } from "@/backend/trpc";

export const router = trpc.router({
  searchClan,
});

export type Router = typeof router;
