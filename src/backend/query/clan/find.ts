import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/schemas";

export const find = trpc.procedure
  .input(
    z.object({
      name: z.string(),
      region: WargamingRegionSchema,
    }),
  )
  .query(({ input: { name, region }, ctx }) => {
    if (name.length < 2) {
      return [];
    }

    return ctx.services.wargaming.findClan(name, region);
  });
