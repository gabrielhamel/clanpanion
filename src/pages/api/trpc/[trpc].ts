import { createNextApiHandler } from "@trpc/server/adapters/next";
import { router } from "@/backend/router";

export default createNextApiHandler({
  router,
});
