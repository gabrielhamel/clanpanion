import { z } from "zod";
import { trpc } from "@/backend/trpc";

export const find = trpc.procedure
  .input(
    z.object({
      name: z.string(),
    }),
  )
  .query(({ input: { name }, ctx }) => {
    if (name.length < 2) {
      return [];
    }

    return ctx.services.wargaming.findClan(name);
  });
