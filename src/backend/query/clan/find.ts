import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/region";
import { WargamingFindTypeSchema } from "@/services/wargaming/schemas";

export const find = trpc.procedure
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
      console.error(e);
      throw new TRPCError({
        cause: e,
        code: "INTERNAL_SERVER_ERROR",
        message: "Wargaming services error",
      });
    }
  });
