import { z } from "zod";
import { trpc } from "@/backend/trpc";

export const get = trpc.procedure
  .input(
    z.object({
      id: z.number(),
    }),
  )
  .query(({ input: { id }, ctx }) => {
    return ctx.services.wargaming.getClan(id);
  });
