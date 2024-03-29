import { z } from "zod";

export const WargamingFindClanItemSchema = z.object({
  emblem_url: z.string(),
  hex_color: z.string(),
  id: z.number(),
  name: z.string(),
  tag: z.string(),
  type: z.enum(["clan"]),
  url: z.string(),
});

export const WargamingFindAccountItemSchema = z.object({
  clan: z
    .object({
      tag: z.string(),
    })
    .nullable(),
  id: z.number(),
  name: z.string(),
  role: z
    .object({
      name: z.string(),
    })
    .nullable(),
  type: z.enum(["account"]),
  url: z.string().optional(),
});

export const WargamingFindItemSchema = z.union([
  WargamingFindClanItemSchema,
  WargamingFindAccountItemSchema,
]);

export const WargamingFindTypeSchema = z.enum(["all", "accounts", "clans"]);

export const WargamingFindClanResultSchema = z.object({
  _meta_: z.object({
    collection: z.enum(["search_autocomplete_result"]),
    total_accounts: z.number().nullable(),
    total_clans: z.number().nullable(),
  }),
  search_autocomplete_result: z.array(WargamingFindItemSchema),
});

export const WargamingGetClanItemSchema = z.object({
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

export const WargamingGetClanResultSchema = z.object({
  data: z.record(WargamingGetClanItemSchema),
  meta: z.object({ count: z.number() }),
  status: z.enum(["ok"]),
});

export const WargamingAccountStatisticsSchema = z.object({
  avg_damage_assisted: z.number().optional(),
  avg_damage_assisted_radio: z.number().optional(),
  avg_damage_assisted_track: z.number().optional(),
  avg_damage_blocked: z.number().optional(),
  battle_avg_xp: z.number(),
  battles: z.number(),
  battles_on_stunning_vehicles: z.number(),
  capture_points: z.number(),
  damage_dealt: z.number(),
  damage_received: z.number(),
  direct_hits_received: z.number(),
  draws: z.number(),
  dropped_capture_points: z.number(),
  explosion_hits: z.number(),
  explosion_hits_received: z.number(),
  frags: z.number(),
  hits: z.number(),
  hits_percents: z.number(),
  losses: z.number(),
  max_damage: z.number().optional(),
  max_damage_tank_id: z.number().nullish(),
  max_frags: z.number().optional(),
  max_frags_tank_id: z.number().nullish(),
  max_xp: z.number().optional(),
  max_xp_tank_id: z.number().nullish(),
  no_damage_direct_hits_received: z.number(),
  piercings: z.number(),
  piercings_received: z.number(),
  shots: z.number(),
  spotted: z.number(),
  stun_assisted_damage: z.number(),
  stun_number: z.number(),
  survived_battles: z.number(),
  tanking_factor: z.number(),
  wins: z.number(),
  xp: z.number(),
});

export const WargamingGetAccountItemSchema = z.object({
  account_id: z.number(),
  clan_id: z.number().nullable(),
  client_language: z.string(),
  created_at: z.number(),
  global_rating: z.number(),
  last_battle_time: z.number(),
  logout_at: z.number(),
  nickname: z.string(),
  private: z.null(),
  statistics: z.object({
    all: WargamingAccountStatisticsSchema,
    clan: WargamingAccountStatisticsSchema,
    company: WargamingAccountStatisticsSchema,
    frags: z.null(),
    historical: WargamingAccountStatisticsSchema,
    regular_team: WargamingAccountStatisticsSchema,
    stronghold_defense: WargamingAccountStatisticsSchema,
    stronghold_skirmish: WargamingAccountStatisticsSchema,
    team: WargamingAccountStatisticsSchema,
    trees_cut: z.number(),
  }),
  updated_at: z.number(),
});

export const WargamingGetAccountResultSchema = z.object({
  data: z.record(WargamingGetAccountItemSchema),
  meta: z.object({ count: z.number() }),
  status: z.enum(["ok"]),
});
