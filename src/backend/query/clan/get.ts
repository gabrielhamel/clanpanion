import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/region";
import { transformToTRPCError } from "@/utils/TRPCerrorTransformer";

export const get = trpc.procedure
  .input(
    z.object({
      id: z.number(),
      region: WargamingRegionSchema,
    }),
  )
  .query(async ({ input: { id, region }, ctx }) => {
    try {
      return await ctx.services.wargaming.getClan(id, region);
    } catch (e) {
      transformToTRPCError(e);
    }
  });
