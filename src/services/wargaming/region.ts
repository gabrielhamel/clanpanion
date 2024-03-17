import { z } from "zod";

export const WargamingRegionSchema = z.enum(["EU", "NA", "ASIA"]);
export type WargamingRegion = z.infer<typeof WargamingRegionSchema>;

export type WargamingRegionInfo = {
  apiDomain: string;
  websiteDomain: string;
};

export const regions: Record<WargamingRegion, WargamingRegionInfo> = {
  ASIA: {
    apiDomain: "api.worldoftanks.asia",
    websiteDomain: "asia.wargaming.net",
  },
  EU: {
    apiDomain: "api.worldoftanks.eu",
    websiteDomain: "eu.wargaming.net",
  },
  NA: {
    apiDomain: "api.worldoftanks.com",
    websiteDomain: "na.wargaming.net",
  },
};
