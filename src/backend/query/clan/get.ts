import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingService } from "@/services/wargaming/wargaming.service";

export const get = trpc.procedure
  .input(
    z.object({
      id: z.number(),
    }),
  )
  .query(({ input: { id } }) => WargamingService.getClan(id));
