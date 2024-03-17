import { z } from "zod";
import {
  WargamingFindClanItemSchema,
  WargamingGetClanItemSchema,
} from "@/services/wargaming/schemas";

export type WargamingFindClanItem = z.infer<typeof WargamingFindClanItemSchema>;
export type WargamingGetClanItem = z.infer<typeof WargamingGetClanItemSchema>;
