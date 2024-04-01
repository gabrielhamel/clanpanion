import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/region";
import { WargamingFindTypeSchema } from "@/services/wargaming/schemas";
import { transformToTRPCError } from "@/utils/TRPCerrorTransformer";

export const search = trpc.procedure
  .input(
    z.object({
      name: z.string(),
      region: WargamingRegionSchema,
      type: WargamingFindTypeSchema,
    }),
  )
  .query(async ({ input: { name, region, type }, ctx }) => {
    if (name.length < 2) {
      return [];
    }

    try {
      return await ctx.services.wargaming.findClan(name, type, region);
    } catch (e) {
      transformToTRPCError(e);
    }
  });
