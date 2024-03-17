export enum WargamingRegion {
  EU = "EU",
  NA = "NA",
  ASIA = "ASIA",
}

export type WargamingRegionInfo = {
  apiDomain: string;
  websiteDomain: string;
};

export const regions: Record<WargamingRegion, WargamingRegionInfo> = {
  [WargamingRegion.EU]: {
    apiDomain: "api.worldoftanks.eu",
    websiteDomain: "eu.wargaming.net",
  },
  [WargamingRegion.ASIA]: {
    apiDomain: "api.worldoftanks.asia",
    websiteDomain: "asia.wargaming.net",
  },
  [WargamingRegion.NA]: {
    apiDomain: "api.worldoftanks.com",
    websiteDomain: "na.wargaming.net",
  },
};
