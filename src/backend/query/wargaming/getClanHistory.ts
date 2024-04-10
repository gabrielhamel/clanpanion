import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingRegionSchema } from "@/services/wargaming/region";
import { transformToTRPCError } from "@/utils/TRPCerrorTransformer";

export const getClanHistory = trpc.procedure
  .input(
    z.object({
      id: z.number(),
      region: WargamingRegionSchema,
    }),
  )
  .query(async ({ input: { id, region }, ctx }) => {
    try {
      const events = await ctx.services.wargaming.getClanHistory(id, region);

      return events.flatMap((event) =>
        event.accounts_ids.map((accountId) => ({
          ...event,
          accountId,
          accountInfo: event.accounts_info[accountId],
          additionalInfo: event.additional_info[accountId][0],
        })),
      );
    } catch (e) {
      transformToTRPCError(e);
    }
  });
