import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/region";

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
      console.error(e);
      throw new TRPCError({
        cause: e,
        code: "INTERNAL_SERVER_ERROR",
        message: "Wargaming services error",
      });
    }
  });
