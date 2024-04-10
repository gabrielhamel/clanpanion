import { z } from "zod";
import {
  WargamingClanEventAdditionalInfoSchema,
  WargamingClanEventTypeSchema,
  WargamingEventJoinSchema,
  WargamingEventLeaveSchema,
  WargamingEventRoleChangeSchema,
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

export type WargamingClanEventType = z.infer<
  typeof WargamingClanEventTypeSchema
>;
export type WargamingEventRoleChange = z.infer<
  typeof WargamingEventRoleChangeSchema
>;
export type WargamingEventJoin = z.infer<typeof WargamingEventJoinSchema>;
export type WargamingEventLeave = z.infer<typeof WargamingEventLeaveSchema>;

type WargamingClanEventAdditionalInfo = z.infer<
  typeof WargamingClanEventAdditionalInfoSchema
>;
export const isClanJoinEvent = (
  eventType: WargamingClanEventType,
  additionalInfo: WargamingClanEventAdditionalInfo,
): additionalInfo is WargamingEventJoin => eventType === "join_clan";
export const isClanLeaveEvent = (
  eventType: WargamingClanEventType,
  additionalInfo: WargamingClanEventAdditionalInfo,
): additionalInfo is WargamingEventLeave => eventType === "leave_clan";
export const isRoleChangeEvent = (
  eventType: WargamingClanEventType,
  additionalInfo: WargamingClanEventAdditionalInfo,
): additionalInfo is WargamingEventRoleChange => eventType === "change_role";
