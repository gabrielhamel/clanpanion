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

export const WargamingClanSchema = z.object({
  accepts_join_requests: z.boolean(),
  clan_id: z.number(),
  color: z.string(),
  created_at: z.number(),
  creator_id: z.number(),
  creator_name: z.string(),
  description: z.string(),
  description_html: z.string(),
  emblems: z.object({
    x195: z.object({ portal: z.string() }),
    x24: z.object({ portal: z.string() }),
    x256: z.object({ wowp: z.string() }),
    x32: z.object({ portal: z.string() }),
    x64: z.object({ portal: z.string(), wot: z.string() }),
  }),
  is_clan_disbanded: z.boolean(),
  leader_id: z.number(),
  leader_name: z.string(),
  members: z.array(
    z.object({
      account_id: z.number(),
      account_name: z.string(),
      joined_at: z.number(),
      role: z.string(),
      role_i18n: z.string(),
    }),
  ),
  members_count: z.number(),
  motto: z.string(),
  name: z.string(),
  old_name: z.string(),
  old_tag: z.string(),
  private: z.null(),
  renamed_at: z.number(),
  tag: z.string(),
  updated_at: z.number(),
});

export const WargamingClanGetSchema = z.object({
  data: z.record(WargamingClanSchema),
  meta: z.object({ count: z.number() }),
  status: z.enum(["ok"]),
});

export type WargamingGetClanResult = z.infer<typeof WargamingClanSchema>;
