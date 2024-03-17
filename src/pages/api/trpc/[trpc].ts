import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createContext } from "@/backend/context";
import { router } from "@/backend/router";

export default createNextApiHandler({
  createContext,
  router,
});
