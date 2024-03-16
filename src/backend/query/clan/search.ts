import { z } from "zod";
import { trpc } from "@/backend/trpc";
import { WargamingService } from "@/services/wargaming/wargaming.service";

export const search = trpc.procedure
  .input(
    z.object({
      name: z.string(),
    }),
  )
  .query(({ input: { name } }) => WargamingService.searchClans(name));
