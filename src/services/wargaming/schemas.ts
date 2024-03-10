import { z } from "zod";

export const WargamingClanListSchema = z.array(
  z.object({
    emblem_url: z.string(),
    hex_color: z.string(),
    id: z.number(),
    name: z.string(),
    tag: z.string(),
    type: z.enum(["clan"]),
    url: z.string(),
  }),
);
export type WargamingClanList = z.infer<typeof WargamingClanListSchema>;

export const WargamingSearchAutocompleteResultSchema = z.object({
  _meta_: z.object({
    collection: z.enum(["search_autocomplete_result"]),
    total_accounts: z.number().nullable(),
    total_clans: z.number(),
  }),
  search_autocomplete_result: WargamingClanListSchema,
});
export type WargamingSearchAutocompleteResult = z.infer<
  typeof WargamingSearchAutocompleteResultSchema
>;
