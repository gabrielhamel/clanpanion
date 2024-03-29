import { z } from "zod";
import {
  WargamingFindAccountItemSchema,
  WargamingFindClanItemSchema,
  WargamingFindItemSchema,
  WargamingFindTypeSchema,
  WargamingGetAccountItemSchema,
  WargamingGetClanItemSchema,
} from "@/services/wargaming/schemas";

export type WargamingFindType = z.infer<typeof WargamingFindTypeSchema>;
export type WargamingFindClanItem = z.infer<typeof WargamingFindClanItemSchema>;
export type WargamingFindAccountItem = z.infer<
  typeof WargamingFindAccountItemSchema
>;
export type WargamingFindItem = z.infer<typeof WargamingFindItemSchema>;
export const isClan = (
  item: WargamingFindItem,
): item is WargamingFindClanItem => item.type === "clan";
export const isAccount = (
  item: WargamingFindItem,
): item is WargamingFindAccountItem => item.type === "account";

export type WargamingGetClanItem = z.infer<typeof WargamingGetClanItemSchema>;
export type WargamingGetAccountItem = z.infer<
  typeof WargamingGetAccountItemSchema
>;
