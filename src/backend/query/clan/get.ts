import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/schemas";

export const get = trpc.procedure
  .input(
    z.object({
      id: z.number(),
      region: WargamingRegionSchema,
    }),
  )
  .query(({ input: { id, region }, ctx }) => {
    return ctx.services.wargaming.getClan(id, region);
  });
